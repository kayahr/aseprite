/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Rectangle } from "./Rectangle.ts";
import type { Size } from "./Size.ts";

/**
 * A frame definition within a frames object when selecting Hash format during export in Aseprite. This is the
 * same as the {@link ArrayFrame} type but without its additional {@link ArrayFrame.filename} property because the
 * filename is the object key in Hash format.
 */

export interface Frame {
    /** Rectangle of the frame within the sprite sheet image. */
    frame: Rectangle;

    /**
     * True if frame is rotated within the sprite sheet image to save space. As far as I know Aseprite doesn't
     * support this so this is always `false`.
     */
    rotated: boolean;

    /** True if frame was trimmed by selecting "Trim Sprite" or "Trim Cels" in Aseprite. */
    trimmed: boolean;

    /**
     * The trimmed rectangle within the sprite. Will be the same as {@link sourceSize} with coordinates
     * x=0 y=0 when frame is not trimmed.
     */
    spriteSourceSize: Rectangle;

    /** The actual frame (sprite) size. */
    sourceSize: Size;

    /** The frame duration in milliseconds. */
    duration: number;
}
