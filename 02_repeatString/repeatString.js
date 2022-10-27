const repeatString = function(word, times) {
    var repeats =""
    if (times<0){
        repeats = "ERROR"
    }

    for (i=0; i<times;i++){
        repeats = repeats + word;
    }
    return repeats
};

// Do not edit below this line
module.exports = repeatString;
