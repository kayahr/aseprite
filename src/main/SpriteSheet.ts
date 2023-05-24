/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { AsepriteError } from "./AsepriteError";
import { FilenameParser } from "./FilenameParser";
import { Frame, FrameJSON } from "./Frame";
import { Meta, MetaJSON } from "./Meta";

export interface SpriteSheetJSON {
    frames: FrameJSON[] | Record<string, FrameJSON>;
    meta: MetaJSON;
}

export interface SpriteSheetJSONOptions {
    filenameParser?: FilenameParser;
}

export class SpriteSheet {
    private constructor(
        private readonly frames: Frame[][],
        private readonly meta: Meta
    ) {}

    public static fromJSON(json: SpriteSheetJSON, options: SpriteSheetJSONOptions = {}): SpriteSheet {
        const groupedFrames: Frame[][] = [];
        const frames = json.frames instanceof Array
                ? json.frames.map(json => Frame.fromJSON(json, options))
                : Object.entries(json.frames).map(([ filename, json ]) => Frame.fromJSON(json,
                    { ...options, filename }));
        for (const frame of frames) {
            const frameIndex = frame.getFilename().getFrame() ?? groupedFrames.length;
            (groupedFrames[frameIndex] ??= []).push(frame);
        }
        console.log(groupedFrames);
        return new SpriteSheet(
            groupedFrames,
            Meta.fromJSON(json.meta)
        );
    }

    public getNumFrames(): number {
        return this.frames.length;
    }

    public getFrames(index: number): Frame[] {
        return this.frames[index]?.slice() ?? AsepriteError.throw(`No frames with index ${index} found`);
    }

    public getMeta(): Meta {
        return this.meta;
    }
}
