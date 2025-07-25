/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type ArrayFrame } from "./ArrayFrame.js";
import { type Frame } from "./Frame.js";
import { type Meta } from "./Meta.js";

/** Aseprite sprite sheet. This is the root type in an Aseprite JSON file. */
export interface SpriteSheet {
    /**
     * Array or map (depending on export settings) with sprite frame definitions. When exported in Hash format
     * then the keys of this map are the frame filenames. See {@link ArrayFrame["filename"]} for important
     * information regarding the filename format.
     */
    frames: Record<string, Frame> | ArrayFrame[];

    /** Sprite sheet meta data. */
    meta: Meta;
}
