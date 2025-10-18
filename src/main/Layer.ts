/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type BlendMode } from "./BlendMode.js";
import { type Cel } from "./Cel.js";
import { type Color } from "./Color.js";

/**
 * A sprite layer or layer group. Layer information only makes sense when sprite sheet image is splitted by layer
 * because otherwise the layers are already flattened.
 */
export interface Layer {
    /** The layer name. */
    name: string;

    /** Optional parent group. Not present when on root level. */
    group?: string;

    /** Opacity (0-255) of the layer. Not present when layer is actually a layer group. */
    opacity?: number;

    /** Blend mode of the layer. Not present when layer is actually a layer group. */
    blendMode?: BlendMode;

    /**
     * Optional color with which the layer is displayed in Aseprite. Only present when color is not
     * fully transparent.
     */
    color?: Color;

    /** Optional custom data. Only present when string is not empty. */
    data?: string;

    /** Optional array of Z index overrides. Only present when z indices are set on one or more frames. */
    cels?: Cel[];
}
