/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Frame animation direction. */
export enum Direction {
    /** Normal animation direction. */
    Forward = "forward",

    /** Reversed animation direction. */
    Reverse = "reverse",

    /** Animation is played forward and then backward and so on. */
    PingPong = "pingpong"
}
