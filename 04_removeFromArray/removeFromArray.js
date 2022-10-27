const removeFromArray = function(array,...conditions) {
    const myArray = array;
    const test = conditions;
    var newArray = []; 

    for (i=0; i<myArray.length; i++){
        if (!conditions.includes(myArray[i])){
            newArray.push(myArray[i]);
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
