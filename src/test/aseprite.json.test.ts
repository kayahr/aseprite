import { assertGreaterThan, assertSame } from "@kayahr/assert";
import { describe, it } from "node:test";

describe("aseprite.json", () => {
    it("provides typings for *.aseprite.json files", async () => {
        const sprite = (await import("../../src/test/sprites/kayahr.aseprite.json", { with: { type: "json" }})).default;
        assertGreaterThan(sprite.frames.length, 0);
        assertSame(sprite.meta.frameTags?.[0]?.repeat, undefined);
        assertSame(sprite.meta.frameTags?.[1]?.repeat, "2");
        assertSame(sprite.meta.image, "kayahr.png");
    });
});
