/*
 * Copyright (C) 2025 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/** Layer cels with z index overrides. */
export interface Cel {
  /** The frame number of the z index override. */
  frame: number;

  /** The z index override. */
  zIndex: number;
}