/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Color, ColorJSON } from "./Color";
import { SliceKey, SliceKeyJSON } from "./SliceKey";

export interface SliceJSON {
    name: string;
    color: ColorJSON;
    keys: SliceKeyJSON[];
    data?: string;
}

export class Slice {
    private constructor(
        private readonly name: string,
        private readonly color: Color,
        private readonly keys: SliceKey[],
        private readonly data: string | null = null
    ) {}

    public static fromJSON(json: SliceJSON): Slice {
        return new Slice(
            json.name,
            Color.fromJSON(json.color),
            json.keys.map(SliceKey.fromJSON),
            json.data
        );
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): Color | null {
        return this.color;
    }

    public getKeys(): SliceKey[] {
        return this.keys.slice();
    }

    public getData(): string | null {
        return this.data;
    }
}
