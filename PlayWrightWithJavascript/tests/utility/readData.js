import { test } from '@playwright/test';
import * as ExcelSheet from 'xlsx';

export function readexcel() {

    const excel = ExcelSheet.readFile(
        'D:/Javascript-Playwright/PlayWriteWithJavascript/tests/testdata/TestData.xlsx'
    );

    const sheet = excel.Sheets['Sheet1'];

    const data = ExcelSheet.utils.sheet_to_json(sheet);
    
    return data;



};