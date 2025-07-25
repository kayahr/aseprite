aseprite
========

[GitHub] | [NPM] | [API Doc]

A set of TypeScript interfaces and enums, API documentation, JSON file typings and JSON schema for [Aseprite] JSON files.

Installation
------------

```sh
npm install @kayahr/aseprite
```

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

This project provides typings for JSON files with the file pattern `*.aseprite.json`. So when you name your JSON files like this and your module loader supports importing JSON files then you can import the sprite sheets right away and TypeScript already knows the type and can validate your code:

```typescript
import * as aseprite from "@kayahr/aseprite";
import spaceship from "../sprites/spaceship.aseprite.json" with { type: "json" };

const image = spaceship.meta.image;
const isRGBA = spaceship.meta.format === aseprite.Format.RGBA8888;
```

Note that you have to import `@kayahr/aseprite` somewhere in your application at least once or otherwise TypeScript doesn't load the typings for `*.aseprite.json` files. If you don't actually need to import an actual type then simply do `import "@kayahr/aseprite"` somewhere in your code or add `node_modules/@kayahr/aseprite/typings/aseprite.json.d.ts` to the include list in your `tsconfig.json`.

JSON schema
-----------

In case you want to validate Aseprite JSON files or benefit from completion while editing these files there is also a [JSON schema file](https://kayahr.github.io/aseprite/aseprite.schema.json) which is automatically generated from the TypeScript types.

You can also access the schema file via your module loader by importing `@kayahr/aseprite/aseprite.schema.json`.

API documentation
-----------------

The interfaces and enums describing the Aseprite JSON format are documented so VSCode displays the documentation during completion and in tooltips. There is also a [HTML API documentation](https://kayahr.github.io/aseprite/).


[API Doc]: https://kayahr.github.io/aseprite/
[GitHub]: https://github.com/kayahr/aseprite
[NPM]: https://www.npmjs.com/package/@kayahr/aseprite
[Aseprite]: https://www.aseprite.org/
