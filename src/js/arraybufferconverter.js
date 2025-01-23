import { getBuffer } from "./app.js";

export default class ArrayBufferConverter {
    constructor() {
        this.bufferView
        this.text = '';
    };

    load(buffer) {
        this.bufferView = new Int16Array(buffer);
    };

    toString() {
        for (let i = 0; i < this.bufferView.length; i += 1) {
            this.text += String.fromCharCode(this.bufferView[i]);
        }
    
    return this.text;

    };
}

/*
const bufferConverter = new ArrayBufferConverter;
bufferConverter.load(getBuffer());
console.log(bufferConverter.toString());
*/

