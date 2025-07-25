import { describe, expect, it } from "vitest";

import { BlendMode } from "../main/BlendMode.js";
import { Direction } from "../main/Direction.js";
import { Format } from "../main/Format.js";
import * as aseprite from "../main/index.js";

describe("index", () => {
    it("exports all interfaces and enums", () => {
        expect(aseprite.BlendMode).toBe(BlendMode);
        expect(aseprite.Direction).toBe(Direction);
        expect(aseprite.Format).toBe(Format);

        // Interface existence can only be checked by compiler, not by Jest
        expect({} as aseprite.ArrayFrame).toBeDefined();
        expect({} as aseprite.Color).toBeDefined();
        expect({} as aseprite.Frame).toBeDefined();
        expect({} as aseprite.FrameTag).toBeDefined();
        expect({} as aseprite.Layer).toBeDefined();
        expect({} as aseprite.Meta).toBeDefined();
        expect({} as aseprite.Point).toBeDefined();
        expect({} as aseprite.Rectangle).toBeDefined();
        expect({} as aseprite.Size).toBeDefined();
        expect({} as aseprite.Slice).toBeDefined();
        expect({} as aseprite.SliceKey).toBeDefined();
        expect({} as aseprite.SpriteSheet).toBeDefined();
    });
});
