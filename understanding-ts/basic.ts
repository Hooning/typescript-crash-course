function addNumber(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log('type of n1 ', typeof n1);
    console.log(`type of n2: ${typeof n2}`);
    const result = n1 + n2;

    if (showResult) {
        console.log(phrase, result);
    } else {
        return n1 + n2;
    }
    
}

const number1 = 5;
const number2 = 2.6;
const printResult = true;
const resultPhrase = "Add result is: ";

addNumber(number1, number2, printResult, resultPhrase);