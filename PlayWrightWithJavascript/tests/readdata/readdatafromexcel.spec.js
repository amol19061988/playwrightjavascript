import { test } from '@playwright/test';
import * as ExcelSheet from 'xlsx';

test('Read excel sheet data', async ({ page }) => {

    const excel = ExcelSheet.readFile(
        'D:/Javascript-Playwright/PlayWriteWithJavascript/tests/testdata/TestData.xlsx'
    );

    const sheet = excel.Sheets['Sheet1'];

    const data = ExcelSheet.utils.sheet_to_json(sheet);

    console.log(data);

    // Read particular row using index
    console.log(data[0].Name);
    console.log(data[0].Rollno);
    console.log(data[0].Address);
    console.log(data[0].Marks);

    console.log(data[0]);


});