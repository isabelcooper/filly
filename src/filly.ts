import * as puppeteer from 'puppeteer';

const takeScreenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://airtable.com/shri36qqm4SB9dTTC');
    await page.waitForSelector(".formName");
    await page.type(".col-12.line-height-4","hello");
    await page.type(".date.truncate.px1","9/5/2019");
    await page.screenshot({path: "date.png"})
    await page.evaluate(() => {
        const option = document.querySelectorAll(".sharedFormField")[2].querySelectorAll(".items-center.flex-none.circle")[2] as HTMLSelectElement;
        option.click()
    });
    await page.click(".submitButton");
    await page.screenshot({path: "third.png"});
    await page.close();
    await browser.close();
};

takeScreenshot();