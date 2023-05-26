declare module "*.aseprite.json" {
    const value: import("./SpriteSheet").SpriteSheet;
    export default value;
}
