# Ring Buffer

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

Missing feature? Note that you can export and import the buffer as array and you can do what ever you want with the array. You can also consider to create an issue here and pull-request to add features.

## Install

```text
npm i ring-buffer-ts
```

[NPM Package](https://www.npmjs.com/package/ring-buffer-ts)

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
