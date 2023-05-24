import { AsepriteError } from "./AsepriteError";

// export const DEFAULT_FILENAME_FORMAT = "{title} ({layer}) #{tag} {frame}.{extension}";
export const DEFAULT_FILENAME_FORMAT = "{title} ({layer}) {frame}.{extension}";

export const DEFAULT_FILENAME_FORMATS = [
    "{title} {frame}.{extension}",
    "{title}.{extension}",
    "{title} ({layer}) {frame}.{extension}",
    "{title} ({layer}).{extension}",
    "{title} ({layer}) #{tag} {frame}.{extension}",
    "{title} ({layer}) #{tag}.{extension}"
];

enum ValueType {
    String,
    Number,
    Index
}

const values = {
    "fullname": ValueType.String,
    "path": ValueType.String,
    "name": ValueType.String,
    "title": ValueType.String,
    "extension": ValueType.String,
    "layer": ValueType.String,
    "tag": ValueType.String,
    "innertag": ValueType.String,
    "outertag": ValueType.String,
    "frame": ValueType.Index,
    "duration": ValueType.Number,
    "tagframe": ValueType.Index
} as const;

export type Value = keyof typeof values;

function isValue(value: string): value is Value {
    return value in values;
}

function createValueMatcher(value: Value, format?: string): string {
    switch (values[value]) {
        case ValueType.String:
            return ".*?";
        case ValueType.Number:
            return "[0-9]+";
        case ValueType.Index: {
            if (format?.at(0) === "0") {
                return `[0-9]{${format.length}}`;
            } else {
                return "[0-9]+";
            }
        }
    }
}
export class FilenameParser {
    private readonly format: string;
    private readonly matcher: RegExp;
    private readonly indexOffsets = new Map<Value, number>();

    public constructor(format: string = DEFAULT_FILENAME_FORMAT) {
        this.format = format;
        const parts = format.split(/({[a-z]+[0-9]*})/);
        const pattern = `^${parts.map(part => {
            if (part.startsWith("{") && part.endsWith("}")) {
                const [ value, format ] = part.substring(1, part.length - 1).split(/([0-9]+)/, 2);
                if (value != null && isValue(value)) {
                    if (format != null) {
                        this.indexOffsets.set(value, Number(format));
                    }
                    return `(?<${value}>${createValueMatcher(value, format)})`;
                }
            }
            return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }).join("")}$`;
        this.matcher = new RegExp(pattern);
    }

    public parse(filename: string): Record<string, string> {
        const groups = this.matcher.exec(filename)?.groups;
        if (groups == null) {
            throw new AsepriteError(`Frame item filename '${filename}' does not match format '${this.format}'`);
        }
        return groups;
    }

    public getIndexOffset(value: Value): number {
        return this.indexOffsets.get(value) ?? 0;
    }
}
