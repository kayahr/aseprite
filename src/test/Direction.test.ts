import { describe, expect, it } from "vitest";

import { Direction } from "../main/Direction.js";

describe("Direction", () => {
    it("has 3 values", () => {
        expect(Object.keys(Direction).length).toBe(3);
    });
    it("Forward has value 'forward'", () => {
        expect(Direction.Forward).toBe("forward");
    });
    it("Reverse has value 'reverse'", () => {
        expect(Direction.Reverse).toBe("reverse");
    });
    it("PingPong has value 'pingpong'", () => {
        expect(Direction.PingPong).toBe("pingpong");
    });
});
