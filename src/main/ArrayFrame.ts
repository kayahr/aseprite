/*
 * Copyright (C) 2023 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Frame } from "./Frame.js";

/**
 * A frame definition within a frames array when selecting Array format during export in Aseprite. This is the
 * same as the {@link Frame} type but with an additional {@link filename} property.
 */
export interface ArrayFrame extends Frame {
    /**
     * The frame filename. When sprite sheet image is splitted by layers and/or tags (in which case multiple
     * definitions exists per frame) then this filename property contains crucial information like the layer name,
     * tag name and the actual frame number which is not the same as the frames index within the frames array.
     * So without parsing this filename it is quite impossible to correctly import a splitted sprite sheet in a
     * universal way because the filename format can be freely customized during export in Aseprite and an importer
     * can't know this format.
     *
     * So the easiest way is to not enable the "Split Layers" and "Split Tags" feature of Aseprite so the element
     * indices within the frames array are the actual frame numbers which start by 0 and you can completely
     * ignore the frame filename. But then you lose other features like control over the frame layers.
     *
     * This is a very annoying flaw in Aseprite's JSON format. Consider up-voting
     * https://community.aseprite.org/t/10158 to hopefully get a better solution in the future.
     */
    filename: string;
}
