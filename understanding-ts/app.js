function addNumber(n1, n2, showResult, phrase) {
    console.log('type of n1 ', typeof n1);
    console.log("type of n2: ".concat(typeof n2));
    if (showResult) {
        console.log(resultPhrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.6;
var printResult = true;
var resultPhrase = "Add result is: ";
addNumber(number1, number2, printResult, resultPhrase);
