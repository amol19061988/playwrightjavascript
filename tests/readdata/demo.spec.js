import { test } from '@playwright/test';
import * as CALCULATER from '../utility/calci'
test('Sample Test', async ({ page }) => {

    console.log("Test Message")
    let a = CALCULATER.addition(55, 65);
    console.log(a);
    console.log(CALCULATER.addition(75, 82));
    console.log(CALCULATER.addition(91, 105));
    console.log(CALCULATER.addition(50,70));

    //====

    console.log(CALCULATER.mult(10,100))
});

