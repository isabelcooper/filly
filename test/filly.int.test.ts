import * as puppeteer from "puppeteer";
import { takeScreenshot } from "../src/filly";

function parseFormParams(requestBody: string) {
  const relevantString = requestBody.split(`name="file"`)[1].split("--")[0];
  return JSON.parse(relevantString).cellValuesByColumnId;
}

describe('Filly', () => {
    it('sends request to airtable', async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        let requestBody = "";
        page.on('request', (interceptedReq) =>{
            if (interceptedReq.url() === "https://airtable-inbound-production.s3.amazonaws.com/") {
              requestBody = interceptedReq.postData()
            }
            interceptedReq.continue()
        });
        await takeScreenshot(page);
        await browser.close();
        const parsedParams = parseFormParams(requestBody);
        expect(parsedParams).toEqual({ fldyWzC1p5jzDzWPs: 'hello',
        fldkdY4SoeqSLjMJ7: '2019-09-05T00:00:00.000Z',
        fldM0AU0NqHM2UgcS: 'seli3qiIewebEMoik' })
    });
});