/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface PointJSON {
    x: number;
    y: number;
}

export class Point {
    private constructor(
        private readonly x: number,
        private readonly y: number
    ) {}

    public static fromJSON(json: PointJSON): Point;
    public static fromJSON(json?: PointJSON): Point | null;
    public static fromJSON(json?: PointJSON): Point | null {
        return json == null ? null : new Point(
            json.x,
            json.y
        );
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}
