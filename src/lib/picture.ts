import P5 from "p5";

export type Work = Pick<P5, "preload" | "setup" | "draw">;

export function picture(Picture: P5) {
  const rootEl = document.getElementById("p5-root");
  if (!rootEl) {
    throw new Error("Cannot find element root #p5-root");
  }

  // @ts-expect-error "is not assignable to parameter of type (...args: any[]) => any"
  new P5(Picture, rootEl);
}
