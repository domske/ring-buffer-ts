const ringBuffer = new RingBuffer(5);
ringBuffer.add(1);
ringBuffer.add(2, 3);
ringBuffer.add(4, 5, 6);

const result = ringBuffer.toArray();

console.log(result);

if (result.length !== 5) {
  throw new Error('Wrong array length.');
}

result.forEach((value, i) => {
  if (value !== i + 2) {
    throw new Error('Wrong array content.');
  }
});

console.log('Passed');
