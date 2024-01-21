export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */
const USD_FEE = 0.01;
const BRL_FEE = 0.02;
const EUR_TO_USD = 1.34;
const EUR_TO_BRL = 5.8;

function transactions(price: number, fee: number): number {
    return price * fee;
}

function convertCurrency(price: number, rate: number): number {
    return price * rate;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = transactions(convertCurrency(price, EUR_TO_USD), USD_FEE);
const priceInBRL = transactions(convertCurrency(price, EUR_TO_BRL), BRL_FEE);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
