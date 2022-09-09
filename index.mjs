import { remote } from "webdriverio";

const browser = await remote({
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/",
  capabilities: {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: [
        "--no-sandbox",
        "--enable-logging=stderr",
        "--user-data-dir=/tmp"
      ] 
    }
  },
  logLevel: "info",
});

await browser.url("https://nasum.dev");

const elem = await browser.$(
  "#app > div.l-wrapper > div > ul > li:nth-child(1) > a"
);

await browser.saveScreenshot("./screenshots/1.png");

await elem.click();

await browser.saveScreenshot("./screenshots/2.png");
await browser.deleteSession();
