declare module "*.aseprite.json" {
    const value: import("@kayahr/aseprite").SpriteSheet;
    export = value;
}
