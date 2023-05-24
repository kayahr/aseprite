import { BlendMode } from "./BlendMode";
import { FilenameParser } from "./FilenameParser";
import { loadImage } from "./image";
import { SpriteSheet, SpriteSheetJSON } from "./SpriteSheet";

export class Sprite {
    private constructor(
        private readonly image: HTMLImageElement,
        private readonly sheet: SpriteSheet
    ) {}

    public static async load(uri: string, filenameParser?: FilenameParser): Promise<Sprite> {
        const json = await (await fetch(uri)).json() as SpriteSheetJSON;
        const spriteSheet = SpriteSheet.fromJSON(json, { filenameParser });
        const meta = spriteSheet.getMeta();
        const imageUrl = uri.replace(/((.*)\/)?.*/, `$1${meta.getImage()}`);
        const imageSize = meta.getSize();
        const image = await loadImage(imageUrl, imageSize.getWidth(), imageSize.getHeight());
        return new Sprite(image, spriteSheet);
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    public getSheet(): SpriteSheet {
        return this.sheet;
    }

    public drawFrame(ctx: CanvasRenderingContext2D, index: number): void {
        for (const frame of this.sheet.getFrames(index)) {
            ctx.save();
            const layerName = frame.getFilename().getLayer();
            if (layerName != null) {
                const layer = this.sheet.getMeta().getLayer(layerName);
                const opacity = layer.getOpacity();
                if (opacity != null) {
                    ctx.globalAlpha *= opacity / 255;
                }
                const blendMode = layer.getBlendMode();
                if (blendMode != null) {
                    ctx.globalCompositeOperation = BlendMode.toCompositeOperation(blendMode);
                }
            }
            const frameRect = frame.getFrame();
            const spriteSourceRect = frame.getSpriteSourceSize();
            ctx.drawImage(
                this.image,
                frameRect.getX(), frameRect.getY(), frameRect.getWidth(), frameRect.getHeight(),
                spriteSourceRect.getX(), spriteSourceRect.getY(),
                spriteSourceRect.getWidth(), spriteSourceRect.getHeight()
            );
            ctx.restore();
        }
    }
}
