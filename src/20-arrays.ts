export { };

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

function stringToArray(fullNames: string[]): string[] {
    const result: string[] = [];

    for (let i = 0; i < fullNames.length; i++) {
        const seperateNames = fullNames[i].split(' ');

        for (let j = 0; j < seperateNames.length; j++) {
            const element = seperateNames[j].split('');
            result.push(seperateNames[j]);
        }
    }
    return result;
}


console.log(stringToArray(["John Doe", "Ra Ba", "Peteris Janis"])); // Expected output: ['John', 'Doe']
