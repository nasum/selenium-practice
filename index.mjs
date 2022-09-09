import { remote } from "webdriverio";

const browser = await remote({
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/",
  capabilities: {
    browserName: "chrome",
  },
  logLevel: "info",
});

await browser.url("https://nasum.dev");

const elem = await browser.$(
  "#app > div.l-wrapper > div > ul > li:nth-child(1) > a"
);

await browser.saveScreenshot("./schreenshots/1.png");

await elem.click();

await browser.saveScreenshot("./schreenshots/2.png");
await browser.deleteSession();
