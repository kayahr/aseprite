import { describe, it } from "node:test";

import { BlendMode } from "../main/BlendMode.ts";
import { Direction } from "../main/Direction.ts";
import { Format } from "../main/Format.ts";
import * as aseprite from "../main/index.ts";
import { assertDefined, assertSame } from "@kayahr/assert";

describe("index", () => {
    it("exports all interfaces and enums", () => {
        assertSame(aseprite.BlendMode, BlendMode);
        assertSame(aseprite.Direction, Direction);
        assertSame(aseprite.Format, Format);

        // Interface existence can only be checked by compiler, not by Jest
        assertDefined({} as aseprite.ArrayFrame, );
        assertDefined({} as aseprite.Color, );
        assertDefined({} as aseprite.Frame, );
        assertDefined({} as aseprite.FrameTag, );
        assertDefined({} as aseprite.Layer, );
        assertDefined({} as aseprite.Meta, );
        assertDefined({} as aseprite.Point, );
        assertDefined({} as aseprite.Rectangle, );
        assertDefined({} as aseprite.Size, );
        assertDefined({} as aseprite.Slice, );
        assertDefined({} as aseprite.SliceKey, );
        assertDefined({} as aseprite.SpriteSheet, );
    });
});
