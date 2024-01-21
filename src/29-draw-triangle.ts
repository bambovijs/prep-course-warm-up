export { };

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(input: number): void {
    let star = '*';
    for (let i = 1; i <= input; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += star;

        }
        console.log(row);
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
