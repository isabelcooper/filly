import {Page} from "puppeteer";


interface FormFiller {
  fillAndSubmit(url:string, name:string): Promise<void>

}

export class MakersFormFiller implements FormFiller {
    constructor( private page: Page){}

  public async fillAndSubmit(url: string, name: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForSelector(".formName");

    await this.page.type(".col-12.line-height-4", name);
    await this.page.type(".date.truncate.px1","9/5/2019");

    await this.selectOptions(2);
    await this.page.click(".submitButton");

    return
  }

  private async selectOptions(choice: number) {
    await this.page.evaluate(`(async () => {
      const inputElements = document.querySelectorAll(".cellContainer>.formCell");
      console.log(inputElements);
      const optionsArray = Array.from(inputElements).filter((selectElement) => {
          const potentialSelect = selectElement;
          return potentialSelect.dataset.columntype === "select"
        });
      await optionsArray.forEach(async option => {
      const circle = option.querySelectorAll(".items-center.flex-none.circle")[${choice}];
      circle.click();
      await page.screenshot({path: "test.png"});
      return
      });
    })()`);


  }
}
