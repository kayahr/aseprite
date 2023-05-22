/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Format } from "./Format";
import { FrameTag, FrameTagJSON } from "./FrameTag";
import { Layer, LayerJSON } from "./Layer";
import { Size, SizeJSON } from "./Size";
import { Slice, SliceJSON } from "./Slice";

export interface MetaJSON {
    app: string;
    version: string;
    image: string;
    format: Format;
    size: SizeJSON;
    scale: string;
    frameTags: FrameTagJSON[];
    layers: LayerJSON[];
    slices?: SliceJSON[];
}

export class Meta {
    private constructor(
        private readonly app: string,
        private readonly version: string,
        private readonly image: string,
        private readonly format: Format,
        private readonly size: Size,
        private readonly scale: string,
        private readonly frameTags: FrameTag[],
        private readonly layers: Layer[],
        private readonly slices: Slice[] = []
    ) {}

    public static fromJSON(json: MetaJSON): Meta {
        return new Meta(
            json.app,
            json.version,
            json.image,
            json.format,
            Size.fromJSON(json.size),
            json.scale,
            json.frameTags.map(FrameTag.fromJSON),
            json.layers.map(Layer.fromJSON),
            json.slices?.map(Slice.fromJSON)
        );
    }

    public getApp(): string {
        return this.app;
    }

    public getVersion(): string {
        return this.version;
    }

    public getImage(): string {
        return this.image;
    }

    public getFormat(): Format {
        return this.format;
    }

    public getSize(): Size {
        return this.size;
    }

    public getScale(): string {
        return this.scale;
    }

    public getFrameTags(): FrameTag[] {
        return this.frameTags.slice();
    }

    public getLayers(): Layer[] {
        return this.layers.slice();
    }

    public getSlices(): Slice[] {
        return this.slices.slice();
    }
}
