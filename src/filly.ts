import {Page} from "puppeteer";
import {format} from "@bodar/totallylazy/dates";


interface FormFiller {
  fillAndSubmit(url:string, name:string): Promise<void>

}

export type evalFunction = () => void

export interface NewPageType {
  type(selector: string, value: string): void;
  click(selector: string): void;
  evaluate(evaluateFunction: evalFunction): void
}

export class MakersFormFiller implements FormFiller {
    constructor( private page: NewPageType){}

  public async fillAndSubmit(url: string, name: string): Promise<void> {
    // await this.page.goto(url);
    // await this.page.waitForSelector(".formName");

    await this.selectOptions();
    await this.page.click(".submitButton");

    return
  }

  public async selectOptions() {
    await this.page.evaluate((async () => {
      const inputElements = document.querySelectorAll(".cellContainer>.formCell");
      const optionsArray = Array.from(inputElements).filter((selectElement) => {
          const potentialSelect = selectElement as HTMLSelectElement;
          return potentialSelect.dataset.columntype === "select"
        });

      await optionsArray.forEach( (option) => {
        const circle = option.querySelectorAll(".items-center.flex-none.circle")[2] as HTMLSelectElement;
        circle.click();
        return
      });

    }));
  }

  public async fillName(name: string) {
    await this.page.type(".col-12.line-height-4", name);
  }

  public async fillDate() {
    const dateToday = format(new Date(), "en", "dd/MM/yyyy");
    await this.page.type(".date.truncate.px1", dateToday);
  }

}
