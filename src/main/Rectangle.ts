/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface RectangleJSON {
    x: number;
    y: number;
    w: number;
    h: number;
}

export class Rectangle {
    private constructor(
        private readonly x: number,
        private readonly y: number,
        private readonly width: number,
        private readonly height: number
    ) {}

    public static fromJSON(json: RectangleJSON): Rectangle;
    public static fromJSON(json?: RectangleJSON): Rectangle | null;
    public static fromJSON(json?: RectangleJSON): Rectangle | null {
        return json == null ? null : new Rectangle(
            json.x,
            json.y,
            json.w,
            json.h
        );
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }
}
