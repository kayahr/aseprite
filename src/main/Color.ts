/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { AsepriteError } from "./AsepriteError";

export type ColorJSON = string;

const ColorJSONRegExp = /^#(?<red>[0-9a-f]{2})(?<green>[0-9a-f]{2})(?<blue>[0-9a-f]{2})(?<alpha>[0-9a-f]{2})$/;

export class Color {
    private constructor(
        private readonly red: number,
        private readonly green: number,
        private readonly blue: number,
        private readonly alpha: number
    ) {}

    public static fromJSON(json: ColorJSON): Color;
    public static fromJSON(json?: ColorJSON): Color | null;
    public static fromJSON(json?: ColorJSON): Color | null {
        if (json == null) {
            return null;
        }
        const match = ColorJSONRegExp.exec(json);
        if (match == null || match.groups == null) {
            throw new AsepriteError("Unable to parse color string: " + json);
        }
        return new Color(
            parseInt(match.groups["red"], 16) / 255,
            parseInt(match.groups["green"], 16) / 255,
            parseInt(match.groups["blue"], 16) / 255,
            parseInt(match.groups["alpha"], 16) / 255
        );
    }

    public getRed(): number {
        return this.red;
    }

    public getGreen(): number {
        return this.green;
    }

    public getBlue(): number {
        return this.blue;
    }

    public getAlpha(): number {
        return this.alpha;
    }
}
