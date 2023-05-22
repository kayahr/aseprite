/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Point, PointJSON } from "./Point";
import { Rectangle, RectangleJSON } from "./Rectangle";

export interface SliceKeyJSON {
    frame: number;
    bounds: RectangleJSON;
    center?: RectangleJSON;
    pivot?: PointJSON;
}

export class SliceKey {
    private constructor(
        private readonly frame: number,
        private readonly bounds: Rectangle,
        private readonly center: Rectangle | null = null,
        private readonly pivot: Point | null = null
    ) {}

    public static fromJSON(json: SliceKeyJSON): SliceKey {
        return new SliceKey(
            json.frame,
            Rectangle.fromJSON(json.bounds),
            Rectangle.fromJSON(json.center),
            Point.fromJSON(json.pivot)
        );
    }

    public getFrame(): number {
        return this.frame;
    }

    public getBounds(): Rectangle {
        return this.bounds;
    }

    public getCenter(): Rectangle | null {
        return this.center;
    }

    public getPivot(): Point | null {
        return this.pivot;
    }
}
