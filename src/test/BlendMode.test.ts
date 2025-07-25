import { describe, expect, it } from "vitest";

import { BlendMode } from "../main/BlendMode.js";

describe("BlendMode", () => {
    it("has 12 values", () => {
        expect(Object.keys(BlendMode).length).toBe(19);
    });
    it("Normal has value 'normal'", () => {
        expect(BlendMode.Normal).toBe("normal");
    });
    it("Darken has value 'darken'", () => {
        expect(BlendMode.Darken).toBe("darken");
    });
    it("Multiply has value 'multiply'", () => {
        expect(BlendMode.Multiply).toBe("multiply");
    });
    it("ColorBurn has value 'color_burn'", () => {
        expect(BlendMode.ColorBurn).toBe("color_burn");
    });
    it("Lighten has value 'lighten'", () => {
        expect(BlendMode.Lighten).toBe("lighten");
    });
    it("Screen has value 'screen'", () => {
        expect(BlendMode.Screen).toBe("screen");
    });
    it("ColorDodge has value 'color_dodge'", () => {
        expect(BlendMode.ColorDodge).toBe("color_dodge");
    });
    it("Addition has value 'addition'", () => {
        expect(BlendMode.Addition).toBe("addition");
    });
    it("Overlay has value 'overlay'", () => {
        expect(BlendMode.Overlay).toBe("overlay");
    });
    it("SoftLight has value 'soft_light'", () => {
        expect(BlendMode.SoftLight).toBe("soft_light");
    });
    it("HardLight has value 'hard_light'", () => {
        expect(BlendMode.HardLight).toBe("hard_light");
    });
    it("Difference has value 'difference'", () => {
        expect(BlendMode.Difference).toBe("difference");
    });
    it("Exclusion has value 'exclusion'", () => {
        expect(BlendMode.Exclusion).toBe("exclusion");
    });
    it("Subtract has value 'subtract'", () => {
        expect(BlendMode.Subtract).toBe("subtract");
    });
    it("Divide has value 'divide'", () => {
        expect(BlendMode.Divide).toBe("divide");
    });
    it("Hue has value 'hsl_hue'", () => {
        expect(BlendMode.Hue).toBe("hsl_hue");
    });
    it("Saturation has value 'hsl_saturation'", () => {
        expect(BlendMode.Saturation).toBe("hsl_saturation");
    });
    it("Color has value 'hsl_color'", () => {
        expect(BlendMode.Color).toBe("hsl_color");
    });
    it("Luminosity has value 'hsl_luminosity'", () => {
        expect(BlendMode.Luminosity).toBe("hsl_luminosity");
    });
});
