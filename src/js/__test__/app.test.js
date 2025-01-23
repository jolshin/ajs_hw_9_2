import ArrayBufferConverter from "../arraybufferconverter";
import { getBuffer } from "../app.js";

const bufferConverter = new ArrayBufferConverter;

test('load() and toString() methods', () => {

  const expected = "{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}"

  bufferConverter.load(getBuffer());
  
  const received = bufferConverter.toString();

  expect(received).toEqual(expected);

});