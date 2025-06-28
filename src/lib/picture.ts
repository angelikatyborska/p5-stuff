import P5 from "p5";

export function picture(Picture: any) {
  const rootEl = document.getElementById("p5-root");
  if (!rootEl) {
    throw new Error("Cannot find element root #p5-root");
  }

  new P5(Picture, rootEl);
}
