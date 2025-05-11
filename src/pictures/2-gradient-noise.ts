import P5 from "p5";
import { randInt } from "../utils.ts";

export default function Picture(p: P5) {
  Object.assign(p, {
    preload() {},
    setup() {
      const canvasSize = 640;
      p.createCanvas(canvasSize, canvasSize);

      const squareWidth = 8;
      const rows = canvasSize / squareWidth;
      const columns = canvasSize / squareWidth;
      p.noStroke();

      const noRandomnessStripeHeight = randInt(rows * 0.05, rows * 0.25);

      for (let nx = 0; nx < columns; nx++) {
        for (let ny = 0; ny < rows; ny++) {
          let minLightness;
          let maxLightness;

          const rand = randInt(
            noRandomnessStripeHeight,
            rows - 1 - noRandomnessStripeHeight,
          );

          let isDarkSquare = rand <= ny ? 1 : 0;

          const lightnessRange = 30;
          if (isDarkSquare === 1) {
            minLightness = 0;
            maxLightness = minLightness + lightnessRange;
          } else {
            minLightness = 255 - lightnessRange;
            maxLightness = 255;
          }

          const value = randInt(minLightness, maxLightness);
          const color = p.color(value, value, value, 255);
          p.fill(color);
          p.square(nx * squareWidth, ny * squareWidth, squareWidth);
        }
      }
    },
    draw() {},
  } satisfies Pick<typeof p, "preload" | "setup" | "draw">);
}
