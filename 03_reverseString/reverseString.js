const reverseString = function(word) {
    const myArray = Array.from(word);
    const arrayLength = myArray.length();
    var reverse = "";

    for (i=arrayLength; i>0; i--){
        reverse = reverse + myArray[i];
    }

    return reverse;

};
// Do not edit below this line
module.exports = reverseString;
