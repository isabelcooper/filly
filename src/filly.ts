import {Page} from "puppeteer";

export const takeScreenshot = async (page: Page) : Promise<void> => {
    await page.goto('https://airtable.com/shri36qqm4SB9dTTC');
    await page.waitForSelector(".formName");
    await page.type(".col-12.line-height-4","hello");
    await page.type(".date.truncate.px1","9/5/2019");
    await page.evaluate(() => {
        const option = document.querySelectorAll(".sharedFormField")[2].querySelectorAll(".items-center.flex-none.circle")[2] as HTMLSelectElement;
        option.click()
    });
    await page.click(".submitButton");
    await page.screenshot({path: "third.png"});
    await page.close();
    return
};
