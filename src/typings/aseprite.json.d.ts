declare module "*.aseprite.json" {
    const value: import("../main/SpriteSheet.ts").SpriteSheet;
    export = value;
}
