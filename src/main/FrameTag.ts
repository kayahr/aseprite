/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Direction } from "./Direction.ts";

/** A tagged frame group which is a way to define a single animation within the sprite sheet. */
export interface FrameTag {
    /** The tag name. */
    name: string;

    /** Start frame number. */
    from: number;

    /** End frame number. */
    to: number;

    /** Animation direction. */
    direction: Direction;

    /** Number of times to repeat the animation. `undefined` means loop indefinitely */
    repeat?: string;
}
