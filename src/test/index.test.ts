import { describe, it } from "node:test";

import { BlendMode } from "../main/BlendMode.ts";
import { Direction } from "../main/Direction.ts";
import { Format } from "../main/Format.ts";
import * as exports from "../main/index.ts";
import { assertSame } from "@kayahr/assert";
import type { ArrayFrame } from "../main/ArrayFrame.ts";
import type { Cel } from "../main/Cel.ts";
import type { Color } from "../main/Color.ts";
import type { Frame } from "../main/Frame.ts";
import type { FrameTag } from "../main/FrameTag.ts";
import type { Layer } from "../main/Layer.ts";
import type { Meta } from "../main/Meta.ts";
import type { Point } from "../main/Point.ts";
import type { Rectangle } from "../main/Rectangle.ts";
import type { Size } from "../main/Size.ts";
import type { Slice } from "../main/Slice.ts";
import type { SliceKey } from "../main/SliceKey.ts";
import type { SpriteSheet }  from "../main/SpriteSheet.ts";

describe("index", () => {
    it("exports all interfaces and enums", () => {
        assertSame(exports.BlendMode, BlendMode);
        assertSame(exports.Direction, Direction);
        assertSame(exports.Format, Format);

        // Interface existence can only be checked by compiler, not by Jest
        ((): ArrayFrame => (({} as exports.ArrayFrame)))();
        ((): Cel => (({} as exports.Cel)))();
        ((): Color => (({} as exports.Color)))();
        ((): Frame => (({} as exports.Frame)))();
        ((): FrameTag => (({} as exports.FrameTag)))();
        ((): Layer => (({} as exports.Layer)))();
        ((): Meta => (({} as exports.Meta)))();
        ((): Point => (({} as exports.Point)))();
        ((): Rectangle => (({} as exports.Rectangle)))();
        ((): Size => (({} as exports.Size)))();
        ((): Slice => (({} as exports.Slice)))();
        ((): SliceKey => (({} as exports.SliceKey)))();
        ((): SpriteSheet => (({} as exports.SpriteSheet)))();
    });
});
