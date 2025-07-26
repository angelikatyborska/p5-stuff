const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  const slugs = fs.readdirSync("src/pages/works/");

  for (let i = 0; i < slugs.length; i++) {
    let slug = slugs[i];

    if (slug.startsWith(".")) {
      continue;
    }

    slug = slug.split(".")[0];

    console.log(`visiting ${slug}`);
    await page.goto(`http://localhost:4321/works/${slug}`);
    const artwork = await page.waitForSelector("[data-passe-partout]");
    await artwork.screenshot({ path: `public/og/${slug}.png` });
  }

  await browser.close();
})();
