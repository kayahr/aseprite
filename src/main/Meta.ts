/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Format } from "./Format.js";
import { type FrameTag } from "./FrameTag.js";
import { type Layer } from "./Layer.js";
import { type Size } from "./Size.js";
import { type Slice } from "./Slice.js";

/** Sprite sheet meta data. */

export interface Meta {
    /** The application which produced the sprite sheet (Usually `http://www.aseprite.org/`). */
    app: string;

    /** The version of the application which produced the sprite sheet. */
    version: string;

    /** Relative path to the sprite sheet image file. */
    image: string;

    /** The pixel format of the sprite sheet image file. */
    format: Format;

    /** The pixel size of the sprite sheet image file. */
    size: Size;

    /**
     * The scale. Usually always `1`. It is a string instead of a number, most likely to be compatible to whatever
     * application used this kind of sprite sheet JSON format first (TexturePacker?).
     */
    scale: string;

    /** List of tags. Only present when tags export is enabled in Aseprite. */
    frameTags?: FrameTag[];

    /** List of layers. Only present when layers export is enabled in Aseprite. */
    layers?: Layer[];

    /** List of slices. Only present when slices export is enabled in Aseprite. */
    slices?: Slice[];
}
