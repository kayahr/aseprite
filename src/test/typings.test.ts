describe("typings", () => {
    it("allow import of an *.aseprite.json file with correct typings", async () => {
        const sprite = (await import("../../src/test/sprites/kayahr.aseprite.json")).default;
        expect(sprite.frames.length).toBeGreaterThan(0);
        expect(sprite.meta.image).toBe("kayahr.png");
    });
});
