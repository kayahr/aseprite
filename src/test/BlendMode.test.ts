import { describe, it } from "node:test";

import { BlendMode } from "../main/BlendMode.ts";
import { assertSame } from "@kayahr/assert";

describe("BlendMode", () => {
    it("has 12 values", () => {
        assertSame(Object.keys(BlendMode).length, 19);
    });
    it("Normal has value 'normal'", () => {
        assertSame(BlendMode.Normal, "normal");
    });
    it("Darken has value 'darken'", () => {
        assertSame(BlendMode.Darken, "darken");
    });
    it("Multiply has value 'multiply'", () => {
        assertSame(BlendMode.Multiply, "multiply");
    });
    it("ColorBurn has value 'color_burn'", () => {
        assertSame(BlendMode.ColorBurn, "color_burn");
    });
    it("Lighten has value 'lighten'", () => {
        assertSame(BlendMode.Lighten, "lighten");
    });
    it("Screen has value 'screen'", () => {
        assertSame(BlendMode.Screen, "screen");
    });
    it("ColorDodge has value 'color_dodge'", () => {
        assertSame(BlendMode.ColorDodge, "color_dodge");
    });
    it("Addition has value 'addition'", () => {
        assertSame(BlendMode.Addition, "addition");
    });
    it("Overlay has value 'overlay'", () => {
        assertSame(BlendMode.Overlay, "overlay");
    });
    it("SoftLight has value 'soft_light'", () => {
        assertSame(BlendMode.SoftLight, "soft_light");
    });
    it("HardLight has value 'hard_light'", () => {
        assertSame(BlendMode.HardLight, "hard_light");
    });
    it("Difference has value 'difference'", () => {
        assertSame(BlendMode.Difference, "difference");
    });
    it("Exclusion has value 'exclusion'", () => {
        assertSame(BlendMode.Exclusion, "exclusion");
    });
    it("Subtract has value 'subtract'", () => {
        assertSame(BlendMode.Subtract, "subtract");
    });
    it("Divide has value 'divide'", () => {
        assertSame(BlendMode.Divide, "divide");
    });
    it("Hue has value 'hsl_hue'", () => {
        assertSame(BlendMode.Hue, "hsl_hue");
    });
    it("Saturation has value 'hsl_saturation'", () => {
        assertSame(BlendMode.Saturation, "hsl_saturation");
    });
    it("Color has value 'hsl_color'", () => {
        assertSame(BlendMode.Color, "hsl_color");
    });
    it("Luminosity has value 'hsl_luminosity'", () => {
        assertSame(BlendMode.Luminosity, "hsl_luminosity");
    });
});
