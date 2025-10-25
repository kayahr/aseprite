import { describe, it } from "node:test";

import { Direction } from "../main/Direction.ts";
import { assertSame } from "@kayahr/assert";

describe("Direction", () => {
    it("has 3 values", () => {
        assertSame(Object.keys(Direction).length, 3);
    });
    it("Forward has value 'forward'", () => {
        assertSame(Direction.Forward, "forward");
    });
    it("Reverse has value 'reverse'", () => {
        assertSame(Direction.Reverse, "reverse");
    });
    it("PingPong has value 'pingpong'", () => {
        assertSame(Direction.PingPong, "pingpong");
    });
});
