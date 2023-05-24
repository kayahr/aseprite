module "*.aseprite.json" {
    const value: import("../main/SpriteSheet").SpriteSheet;
    export default value;
}
