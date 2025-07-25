describe("aseprite.json", () => {
    it("provides typings for *.aseprite.json files", async () => {
        const sprite = (await import("../../src/test/sprites/kayahr.aseprite.json")).default;
        expect(sprite.frames.length).toBeGreaterThan(0);
        expect(sprite.meta.frameTags?.[0]?.repeat).toBe(undefined);
        expect(sprite.meta.frameTags?.[1]?.repeat).toBe("2");
        expect(sprite.meta.image).toBe("kayahr.png");
    });
});
