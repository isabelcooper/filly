import {evalFunction, MakersFormFiller, NewPageType} from "../src/filly";
import {JSDOM} from 'jsdom';
import {airtableHTML} from "./fakeHTML/airtableHTML";
import {format} from "@bodar/totallylazy/dates";


export class JsdomTranslator implements NewPageType {

  constructor(private pageObject: JSDOM ) {
  }
  
  click(selector: string): void {
    const selectElement = this.pageObject.window.document.querySelector(selector) as HTMLSelectElement;
    selectElement.click()
  }

  evaluate(evaluateFunction: evalFunction): void {
    this.pageObject.window.eval(`(${evaluateFunction})()`)
  }

  type(selector: string, value: string): void {
    const inputElement = this.pageObject.window.document.querySelector(selector) as HTMLInputElement;
    inputElement.value = value
  }

  querySelector(selector: string): HTMLElement | null {
    return this.pageObject.window.document.querySelector(selector)
  }

  querySelectorAll(selector: string): NodeList {
    return this.pageObject.window.document.querySelectorAll(selector)
  }

  addEventListener(type: string, element: HTMLElement, callback: () => any ) {
    element.addEventListener(type, callback)
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

    it('it can fill date today by default', async() => {
      const page = new JsdomTranslator(new JSDOM(airtableHTML));
      const testFormFiller = new MakersFormFiller(page);
      await testFormFiller.fillDate();
      // @ts-ignore
      expect(page.querySelector(".date.truncate.px1").value).toEqual(format(new Date(),"en", "dd/MM/yyyy"))
    });

    it('it selects green on a picklist', async() => {
      const page = new JsdomTranslator(new JSDOM(airtableHTML, { runScripts: "outside-only" }));
      const testFormFiller = new MakersFormFiller(page);
      // @ts-ignore
      const targetCircles = page.querySelectorAll(".items-center.flex-none.circle");
      const clicks: number[] = [];

      targetCircles.forEach((circle, index) => page.addEventListener("click", circle as HTMLElement, () =>{clicks.push(index)}));
      await testFormFiller.selectOptions();

      expect(clicks).toEqual([2]);
    });
});