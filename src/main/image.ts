import { AsepriteError } from "./AsepriteError";

export async function loadImage(uri: string, width?: number, height?: number): Promise<HTMLImageElement> {
    const image = new Image(width, height);
    return new Promise((resolve, reject) => {
        image.onload = () => {
            image.onload = null;
            image.onerror = null;
            resolve(image);
        };
        image.onerror = () => {
            image.onload = null;
            image.onerror = null;
            reject(new AsepriteError(`Unable to load sprite '${uri}`));
        };
        image.src = uri;
    });
}
