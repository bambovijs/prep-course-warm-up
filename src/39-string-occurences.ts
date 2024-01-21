export {};

const count = (sentence: string, word: string) => {
    const sentenceToWords: string[] = sentence.split(' ');
    let result = 0;

    for (let i = 0; i < sentenceToWords.length; i++) {
        if(sentenceToWords[i].toLowerCase() === word.toLowerCase()){
            result++;
        }
        //console.log(sentenceToWords[i] + '=' + word);
    }
    
    
    console.log(result);
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
