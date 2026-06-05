import {test,expect} from '@playwright/test'
test("Handle Checkboxes",async ({page}) => {
 await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php")
 const block = await page.locator("xpath=/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]")
 const sports= await block.locator('[name="sports"]')//multiple value
 const sportsCount=await sports.count();

 for(let i=0;i<sportsCount;i++){

    console.log(await sports.nth(i).getAttribute('value'))
    await sports.nth(i).check({force:true});
 }


});

//block2 > check all the checkboxes - check()
//2random number indexex - check those random checkboxes.
