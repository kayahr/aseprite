/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { AsepriteError } from "./AsepriteError";
import { Filename } from "./Filename";
import { Rectangle, RectangleJSON } from "./Rectangle";
import { Size, SizeJSON } from "./Size";
import { SpriteSheetJSONOptions } from "./SpriteSheet";

export interface FrameJSON {
    filename?: string;
    frame: RectangleJSON;
    rotated: boolean;
    trimmed: boolean;
    spriteSourceSize: RectangleJSON;
    sourceSize: SizeJSON;
    duration: number;
}

export interface FrameJSONOptions extends SpriteSheetJSONOptions {
    filename?: string;
}

export class Frame {
    private constructor(
        private readonly filename: Filename,
        private readonly frame: Rectangle,
        private readonly rotated: boolean,
        private readonly trimmed: boolean,
        private readonly spriteSourceSize: Rectangle,
        private readonly sourceSize: Size,
        private readonly duration: number,
    ) {}

    public static fromJSON(json: FrameJSON, options: FrameJSONOptions = {}): Frame {
        const filename = json.filename ?? options.filename ?? AsepriteError.throw("Frame has no filename");
        return new Frame(
            Filename.fromJSON(filename, options),
            Rectangle.fromJSON(json.frame),
            json.rotated,
            json.trimmed,
            Rectangle.fromJSON(json.spriteSourceSize),
            Size.fromJSON(json.sourceSize),
            json.duration
        );
    }

    public getFilename(): Filename {
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

    public draw(ctx: CanvasRenderingContext2D): void {
    }
}
