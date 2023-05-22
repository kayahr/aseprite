/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface SizeJSON {
    w: number;
    h: number;
}

export class Size {
    private constructor(
        private readonly width: number,
        private readonly height: number
    ) {}

    public static fromJSON(json: SizeJSON): Size;
    public static fromJSON(json?: SizeJSON): Size | null;
    public static fromJSON(json?: SizeJSON): Size | null {
        return json == null ? null : new Size(
            json.w,
            json.h
        );
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }
}
