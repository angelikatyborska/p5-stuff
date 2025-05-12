import P5 from "p5";
import Picture from "./pictures/3-hundertwasser.ts";

// Entrypoint code
const rootEl = document.getElementById("p5-root");
if (!rootEl) {
  throw new Error("Cannot find element root #p5-root");
}

main(rootEl);

function main(rootElement: HTMLElement) {
  new P5(Picture, rootElement);
}
