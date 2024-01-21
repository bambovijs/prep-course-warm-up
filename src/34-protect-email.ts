export { };

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(mail: string): string {
    const delimiter = '@';
    const result = mail.split(delimiter); // sadala un ieliek masiivaa [username, domain]
    var tempProtectedUsername = '';

    if (result[0].length >= 5) { //pirmais masiva elements ir username, otrais domains
        const visiblePart = result[0].slice(0, 3); //nogriežam redzamo daļu
        // const hiddenPartLength = result[0].length - 3;
        // console.log('hidenPartLength: ' + hiddenPartLength);
        const hiddenPart = '.'.repeat(3);// izveidojam neredzamo dalo un atkartojam 3 reizes
        tempProtectedUsername = visiblePart + hiddenPart;
    } else {
        tempProtectedUsername = '...';
    }

    return `${tempProtectedUsername}@${result[1]}`; // return username@domain
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com
