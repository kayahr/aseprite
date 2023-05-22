/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Rectangle, RectangleJSON } from "./Rectangle";
import { Size, SizeJSON } from "./Size";

export interface FrameJSON {
    filename?: string;
    frame: RectangleJSON;
    rotated: boolean;
    trimmed: boolean;
    spriteSourceSize: RectangleJSON;
    sourceSize: SizeJSON;
    duration: number;
}

export class Frame {
    private constructor(
        private readonly filename: string,
        private readonly frame: Rectangle,
        private readonly rotated: boolean,
        private readonly trimmed: boolean,
        private readonly spriteSourceSize: Rectangle,
        private readonly sourceSize: Size,
        private readonly duration: number,
    ) {}

    public static fromJSON(json: FrameJSON, filename: string = ""): Frame {
        return new Frame(
            json.filename ?? filename,
            Rectangle.fromJSON(json.frame),
            json.rotated,
            json.trimmed,
            Rectangle.fromJSON(json.spriteSourceSize),
            Size.fromJSON(json.sourceSize),
            json.duration
        );
    }

    public getFilename(): string {
        return this.filename;
    }

    public getFrame(): Rectangle {
        return this.frame;
    }

    public isRotated(): boolean {
        return this.rotated;
    }

    public isTrimmed(): boolean {
        return this.trimmed;
    }

    public getSpriteSourceSize(): Rectangle {
        return this.spriteSourceSize;
    }

    public getSourceSize(): Size {
        return this.sourceSize;
    }

    public getDuration(): number {
        return this.duration;
    }
}
