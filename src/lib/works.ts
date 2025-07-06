import fs from "node:fs";

export const lastWorkFilename = fs
  .readdirSync("./src/pages/works")
  .sort((a, b) => b.localeCompare(a))[0];

export const lastWorkId = parseInt(lastWorkFilename.replace(".astro", ""), 10);
