import { FilenameParser, Value } from "./FilenameParser";

const PATH_MATCHER = /^((?<path>.*)[\\/])?(?<name>(?<title>.*?)(\.(?<extension>.*))?)$/;

export type FilenameJSON = string;

export interface FilenameJSONOptions {
    filenameParser?: FilenameParser;
}

export class Filename {
    private constructor(
        private readonly filename: string,
        private readonly fullName: string | null = null,
        private readonly path: string | null = null,
        private readonly name: string | null = null,
        private readonly title: string | null = null,
        private readonly extension: string | null = null,
        private readonly layer: string | null = null,
        private readonly tag: string | null = null,
        private readonly innerTag: string | null = null,
        private readonly outerTag: string | null = null,
        private readonly frame: number | null = null,
        private readonly tagFrame: number | null = null,
        private readonly duration: number | null = null
    ) {}

    public static fromJSON(json: FilenameJSON, { filenameParser }: FilenameJSONOptions = {}): Filename {
        if (filenameParser == null) {
            return new Filename(json);
        }
        const groups = filenameParser.parse(json);
        const parseIndex = (value: Value): number | null => {
            const index = groups[value];
            if (index == null) {
                return null;
            }
            const offset = filenameParser.getIndexOffset(value);
            return Number(index) - offset;
        };
        let fullName = groups["fullname"] ?? null;
        let path = groups["path"] ?? null;
        let name = groups["name"] ?? null;
        let title = groups["title"] ?? null;
        let extension = groups["extension"] ?? null;
        // Parse path, name, title and extension from full name if possible and needed
        if (fullName != null && (path == null || name == null || title == null || extension == null)) {
            const groups = PATH_MATCHER.exec(fullName)?.groups;
            path ??= groups?.["path"] ?? null;
            name ??= groups?.["name"] ?? null;
            title ??= groups?.["title"] ?? null;
            extension ??= groups?.["extensions"] ?? null;
        }
        // Parse title and extension from name if possible and needed
        if (name != null && (title == null || extension == null)) {
            const groups = PATH_MATCHER.exec(name)?.groups;
            title ??= groups?.["title"] ?? null;
            extension ??= groups?.["extensions"] ?? null;
        }
        // Build name from title and extension if possible and needed
        if (name == null && title != null) {
            name = title + (extension != null ? `.${extension}` : "");
        }
        // Build full name from path and name if possible and needed
        if (fullName == null && name != null && path != null) {
            fullName = path + (path.includes("\\") ? "\\" : "/") + name;
        }
        return new Filename(
            json,
            fullName,
            path,
            name,
            title,
            extension,
            groups["layer"] ?? null,
            groups["tag"] ?? null,
            groups["innertag"] ?? null,
            groups["outertag"] ?? null,
            parseIndex("frame") ?? 0,
            parseIndex("tagframe"),
            groups["duration"] != null ? Number(groups["duration"]) : null
        );
    }

    public toString(): string {
        return this.filename;
    }

    public getFullName(): string | null {
        return this.fullName;
    }

    public getPath(): string | null {
         return this.path;
    }

    public getName(): string | null {
         return this.name;
    }

    public getTitle(): string | null {
         return this.title;
    }

    public getExtension(): string | null {
         return this.extension;
    }

    public getLayer(): string | null {
         return this.layer;
    }

    public getTag(): string | null {
         return this.tag;
    }

    public getInnerTag(): string | null {
         return this.innerTag;
    }

    public getOuterTag(): string | null {
         return this.outerTag;
    }

    public getFrame(): number | null {
         return this.frame;
    }

    public getTagFrame(): number | null {
         return this.tagFrame;
    }

    public getDuration(): number | null {
         return this.duration;
    }
}
