/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { BlendMode } from "./BlendMode";
import { Color, ColorJSON } from "./Color";

export interface LayerJSON {
    name: string;
    opacity?: number;
    blendMode?: BlendMode;
    color?: ColorJSON;
    data?: string;
    group?: string;
}

export class Layer {
    private constructor(
        private readonly name: string,
        private readonly opacity: number | null = null,
        private readonly blendMode: BlendMode | null = null,
        private readonly color: Color | null = null,
        private readonly data: string | null = null,
        private readonly group: string | null = null
    ) {}

    public static fromJSON(json: LayerJSON): Layer {
        return new Layer(
            json.name,
            json.opacity,
            json.blendMode,
            Color.fromJSON(json.color),
            json.data,
            json.group
        );
    }

    public getName(): string {
        return this.name;
    }

    public getOpacity(): number | null {
        return this.opacity;
    }

    public getBlendMode(): BlendMode | null {
        return this.blendMode;
    }

    public getColor(): Color | null {
        return this.color;
    }

    public getData(): string | null {
        return this.data;
    }

    public getGroup(): string | null {
        return this.group;
    }
}
