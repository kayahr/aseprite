/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Color } from "./Color.js";
import { type SliceKey } from "./SliceKey.js";

/** A slice within the sprite. */
export interface Slice {
    /** The slice name. */
    name: string;

    /** The list of slice keys. */
    keys: SliceKey[];

    /**
     * Optional color with which the slice frame is displayed in Aseprite. Only present when color is not
     * fully transparent.
     */
    color?: Color;

    /** Optional custom data. Only present when string is not empty. */
    data?: string;
}
