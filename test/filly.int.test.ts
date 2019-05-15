import {evalFunction, MakersFormFiller, NewPageType} from "../src/filly";
import {JSDOM} from 'jsdom';
import {airtableHTML} from "./fakeHTML/airtableHTML";


export class JsdomTranslator implements NewPageType {

  constructor(private pageObject: JSDOM ) {
  }
  
  click(selector: string): void {
    const selectElement = this.pageObject.window.document.querySelector(selector) as HTMLSelectElement;
    selectElement.click()
  }

  evaluate(evaluateFunction: evalFunction): void {
    this.pageObject.window.eval(`${evaluateFunction}`)
  }

  type(selector: string, value: string): void {
    const inputElement = this.pageObject.window.document.querySelector(selector) as HTMLInputElement;
    inputElement.value = value
  }

  querySelector(selector: string): HTMLElement | null {
    return this.pageObject.window.document.querySelector(selector)
  }

}


describe('Filly', () => {
    it('it can fill in the name of the user', async() => {
      const page = new JsdomTranslator(new JSDOM(airtableHTML));
      const testFormFiller = new MakersFormFiller(page);
      await testFormFiller.fillName("Tom");
      // @ts-ignore
      expect(page.querySelector(".col-12.line-height-4").value).toEqual("Tom")
    });
});