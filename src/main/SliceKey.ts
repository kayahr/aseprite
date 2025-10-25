/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Point } from "./Point.ts";
import type { Rectangle } from "./Rectangle.ts";

/** A slice key defining the slice rectangle in a specific frame. */
export interface SliceKey {
    /** The frame number. */
    frame: number;

    /** The outer slice bounds within the frame. */
    bounds: Rectangle;

    /** Optional rectangle within the slice defining the center area of a nine-patch slice. */
    center?: Rectangle;

    /** Optional pivot point within the slice. */
    pivot?: Point;
}
