import * as puppeteer from "puppeteer";
import { takeScreenshot } from "../src/filly";

describe('Filly', () => {
    it('sends request to airtable', async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        let requestBody = ""
        page.on('request', (interceptedReq) =>{
            console.log(interceptedReq.url());
            if (interceptedReq.url() === "https://airtable.com/v0.3/view/viwMGduVHfcJ0QcUp/submitSharedForm") {
                requestBody = interceptedReq.postData()
            }
            interceptedReq.continue()
        });
        await takeScreenshot(page);
        await browser.close();
        expect(requestBody).toContain("hello")
    });
});