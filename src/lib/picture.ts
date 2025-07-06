import P5 from "p5";

export type Work = Pick<P5, "preload" | "setup" | "draw">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function picture(Picture: (...args: any[]) => any) {
  const rootEl = document.getElementById("p5-root");
  if (!rootEl) {
    throw new Error("Cannot find element root #p5-root");
  }

  const p = new P5(Picture, rootEl);

  const redrawButton = document.getElementById("p5-redraw-button");
  if (redrawButton) {
    redrawButton.addEventListener("click", () => {
      p.redraw();
    });
  }
}
