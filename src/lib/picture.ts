import P5 from "p5";

export type Work<T = any> = Pick<P5, "preload" | "setup" | "draw"> &
  ([T] extends [never]
    ? {}
    : {
      state: T;
    })

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
      const reloop = p.isLooping();
      p.remove();
      p.setup();

      if (reloop) {
        p.loop();
      } else {
        p.redraw();
      }
    });
  }
}
