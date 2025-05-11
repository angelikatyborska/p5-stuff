import P5 from "p5";
import { randInt } from "../utils.ts";

export default function Picture(p: P5) {
  Object.assign(p, {
    preload() {},
    setup() {
      const canvasSize = 640;
      p.createCanvas(canvasSize, canvasSize);

      const squareWidth = 10;
      const rows = canvasSize / squareWidth;
      const columns = canvasSize / squareWidth;
      p.noStroke();

      for (let nx = 0; nx < columns; nx++) {
        for (let ny = 0; ny < rows; ny++) {
          const min = 0;
          const max = 255;
          const value = randInt(min, max);
          const color = p.color(value, value, value, 255);
          p.fill(color);
          p.square(nx * squareWidth, ny * squareWidth, squareWidth);
        }
      }
    },
    draw() {},
  } satisfies Pick<typeof p, "preload" | "setup" | "draw">);
}
