import { Format } from "../main/Format";

describe("Format", () => {
    it("has 2 values", () => {
        expect(Object.keys(Format).length).toBe(2);
    });
    it("RGBA8888 has value 'RGBA8888'", () => {
        expect(Format.RGBA8888).toBe("RGBA8888");
    });
    it("I8 has value 'I8'", () => {
        expect(Format.I8).toBe("I8");
    });
});
