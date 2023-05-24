aseprite
========

[GitHub] | [NPM] | [API Doc]

A set of TypeScript interfaces and enums, API documentation, JSON file typings and JSON schema for [Aseprite] JSON files.

Types
-----

You can use the provided interfaces and enums to work with Aseprite JSON data in a type-safe way:

```typescript
import * as aseprite from "@kayahr/aseprite";

const response = await fetch("spaceship.aseprite.json");
const spaceship = (await response.json()) as aseprite.SpriteSheet;
const image = spaceship.meta.image;
const isRGBA = spaceship.meta.format === aseprite.Format.RGBA8888;
```

JSON file typings
-----------------

This project provides typings for JSON files with the file pattern `*.aseprite.json`. So when you name your JSON files like this and your module loader supports importing JSON files then you can import the sprite sheets right away and TypeScript already knows the type:

```typescript
import spaceship from "../sprites/spaceship.aseprite.json";

const image = spaceship.meta.image;
const isRGBA = spaceship.meta.format === aseprite.Format.RGBA8888) {
```

JSON schema
-----------

In case you want to validate Aseprite JSON files or benefit from completion while editing these files there is also a [JSON schema file](https://kayahr.github.io/aseprite/aseprite.schema.json) which is automatically generated from the TypeScript types.

API documentation
-----------------

The interfaces and enums describing the Aseprite JSON format are documented so VSCode displays the documentation during completion and in tooltips. There is also a [HTML API documentation](https://kayahr.github.io/aseprite/).


[API Doc]: https://kayahr.github.io/aseprite/
[GitHub]: https://github.com/kayahr/aseprite
[NPM]: https://www.npmjs.com/package/@kayahr/aseprite
[Aseprite]: https://www.aseprite.org/
