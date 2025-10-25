import { describe, it } from "node:test";

import { Format } from "../main/Format.ts";
import { assertSame } from "@kayahr/assert";

describe("Format", () => {
    it("has 2 values", () => {
        assertSame(Object.keys(Format).length, 2);
    });
    it("RGBA8888 has value 'RGBA8888'", () => {
        assertSame(Format.RGBA8888, "RGBA8888");
    });
    it("I8 has value 'I8'", () => {
        assertSame(Format.I8, "I8");
    });
});
