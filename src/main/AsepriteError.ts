export class AsepriteError extends Error {
    public static throw(message: string, options?: ErrorOptions): never {
        throw new AsepriteError(message, options);
    }
}
