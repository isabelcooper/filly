import puppeteer from 'puppeteer';
import {MakersFormFiller} from "../src/filly";

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
        page.on('request', (interceptedReq: any) =>{
            if (interceptedReq.url() === "https://airtable-inbound-production.s3.amazonaws.com/") {
                const postData = interceptedReq.postData() ?  interceptedReq.postData() as string : "";
              requestBody = postData
            }
            interceptedReq.continue()
        });
        const formFiller = new MakersFormFiller(page);
        await formFiller.fillAndSubmit('https://airtable.com/shri36qqm4SB9dTTC', "Tom");
        await browser.close();
        const parsedParams = parseFormParams(requestBody);
        // await this.page.close();
        expect(parsedParams).toEqual({ fldyWzC1p5jzDzWPs: 'Tom',
        fldkdY4SoeqSLjMJ7: '2019-09-05T00:00:00.000Z',
        fldM0AU0NqHM2UgcS: 'seli3qiIewebEMoik' })

    });
});