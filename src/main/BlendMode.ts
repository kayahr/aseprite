/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { AsepriteError } from "./AsepriteError";

export enum BlendMode {
    Normal = "normal",
    Darken = "darken",
    Multiply = "multiply",
    ColorBurn = "color_burn",
    Lighten = "lighten",
    Screen = "screen",
    ColorDodge = "color_dodge",
    Addition = "addition",
    Overlay = "overlay",
    SoftLight = "soft_light",
    HardLight = "hard_light",
    Difference = "difference",
    Exclusion = "exclusion",
    Subtract = "subtract",
    Divide = "divide",
    Hue = "hsl_hue",
    Saturation = "hsl_saturation",
    Color = "hsl_color",
    Luminosity = "hsl_luminosity",
}

export namespace BlendMode {
    export function toCompositeOperation(blendMode: BlendMode): GlobalCompositeOperation {
        switch (blendMode) {
            case BlendMode.Normal:
                return "source-over";
            case BlendMode.Darken:
                return "darken";
            case BlendMode.Multiply:
                return "multiply";
            case BlendMode.ColorBurn:
                return "color-burn";
            case BlendMode.Lighten:
                return "lighten";
            case BlendMode.Screen:
                return "screen";
            case BlendMode.ColorDodge:
                return "color-dodge";
            case BlendMode.Overlay:
                return "overlay";
            case BlendMode.SoftLight:
                return "soft-light";
            case BlendMode.HardLight:
                return "hard-light";
            case BlendMode.Difference:
                return "difference";
            case BlendMode.Exclusion:
                return "exclusion";
            case BlendMode.Hue:
                return "hue";
            case BlendMode.Saturation:
                return "saturation";
            case BlendMode.Color:
                return "color";
            case BlendMode.Luminosity:
                return "luminosity";
            default:
                throw new AsepriteError(`No existing composite operation for blend mode ${blendMode}`);
        }
    }
}
