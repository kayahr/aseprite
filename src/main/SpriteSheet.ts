/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Frame, FrameJSON } from "./Frame";
import { Meta, MetaJSON } from "./Meta";

export interface SpriteSheetJSON {
    frames: FrameJSON[] | Record<string, FrameJSON>;
    meta: MetaJSON;
}

export class SpriteSheet {
    private constructor(
        private readonly frames: Frame[],
        private readonly meta: Meta
    ) {}

    public static fromJSON(json: SpriteSheetJSON): SpriteSheet {
        return new SpriteSheet(
            json.frames instanceof Array
                ? json.frames.map(json => Frame.fromJSON(json))
                : Object.entries(json.frames).map(([ key, value ]) => Frame.fromJSON(value, key)),
            Meta.fromJSON(json.meta)
        );
    }

    public getFrames(): Frame[] {
        return this.frames.slice();
    }

    public getMeta(): Meta {
        return this.meta;
    }
}
