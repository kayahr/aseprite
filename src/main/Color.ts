/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

/**
 * A color in 32 Bit RGBA hex format (Example: `#40e0d0ff` for fully opaque turquoise).
 *
 * @pattern ^#[0-9a-f]{8}$
 */
export type Color = string;
