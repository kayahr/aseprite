import { Format } from "../main/Format";
import { SpriteSheet, SpriteSheetJSON } from "../main/SpriteSheet";

const minimalSpriteSheet: SpriteSheetJSON = {
    frames: [],
    meta: {
        app: "test",
        version: "v1",
        image: "image.png",
        format: Format.I8,
        size: { w: 1, h: 2 },
        scale: "1",
        frameTags: [],
        layers: []
    }
};

describe("SpriteSheet", () => {
    describe("fromJSON", () => {
        it("can parse minimal sprite sheet JSON", () => {
            const spriteSheet = SpriteSheet.fromJSON(minimalSpriteSheet);
            expect(spriteSheet).toMatchSnapshot();
        });
    });
});
