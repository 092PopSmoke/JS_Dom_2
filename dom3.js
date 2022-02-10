function sjekkPalindromet(str) {

    const arrayValues = string.split('');


    const reverseArrayValues = arrayValues.reverse();


    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        document.write('Det er en palindrome');
    }
    else {
        document.write('Det er ikke en palindrome');
    }
}

const string = prompt('Enter a string: ');

sjekkPalindromet(string);