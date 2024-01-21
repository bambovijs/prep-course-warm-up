export { };

function onlyTheAces(arr: string[]): string[] {
    let masivs: string[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Ace') {
            masivs.push(arr[i]);
        }


    }
    return masivs;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
