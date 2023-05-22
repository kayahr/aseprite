/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Direction } from "./Direction";

export interface FrameTagJSON {
    name: string;
    from: number;
    to: number;
    direction: Direction;
}

export class FrameTag {
    private constructor(
        private readonly name: string,
        private readonly from: number,
        private readonly to: number,
        private readonly direction: Direction
    ) {}

    public static fromJSON(json: FrameTagJSON): FrameTag {
        return new FrameTag(
            json.name,
            json.from,
            json.to,
            json.direction
        );
    }

    public getName(): string {
        return this.name;
    }

    public getFrom(): number {
        return this.from;
    }

    public getTo(): number {
        return this.to;
    }

    public getDirection(): Direction {
        return this.direction;
    }
}
