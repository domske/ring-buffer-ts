# Ring Buffer

[![Version][version]][package] [![MIT License][license-badge]][license]

![](readme/logo.png)

Aka "circular buffer" written in TypeScript

- Well tested.
- Documentation (included declaration types and doc-comments).
- Clean and modern code.
- Written in TypeScript (strict mode and strongly typed).
- Easy API.
- High performance when adding items.
- No dependencies.
- NodeJS, Browser.
- Tiny size.

Missing feature? Note that you can export and import the buffer as an array and do whatever you want with the array. For example using slice. You can also consider creating an issue here and adding features via pull request. Note that the compatibility of protected members in the next minor or patch releases cannot be guaranteed and is not documented.

## Install

```text
npm i ring-buffer-ts
```

## Usage

```ts
import { RingBuffer } from 'ring-buffer-ts';

const ringBuffer = new RingBuffer<number>(5);
ringBuffer.add(1);
ringBuffer.add(2, 3);
ringBuffer.add(4, 5, 6);

console.log(ringBuffer.toArray());
// Result: [2, 3, 4, 5, 6]
```

[Documentation](https://domske.github.io/ring-buffer-ts/)

[license-badge]: https://img.shields.io/npm/l/ring-buffer-ts.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[version]: https://img.shields.io/npm/v/ring-buffer-ts.svg?style=flat-square
[package]: https://www.npmjs.com/package/ring-buffer-ts
