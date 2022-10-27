const sumAll = function(x, y) {
    var sum = 0;

    if (x < y && typeof x == "number" && typeof y == "number" && x > 0 && y > 0){
        for (i = x; i<=y; i++){
            sum = sum + i;
        }
    } else if (x > y && typeof x == "number" && typeof y == "number" && x > 0 && y > 0){
        for (i = x; i>=y; i--){
            sum = sum +i;
        }
    } else {
        sum = "ERROR"
    };

    return sum
}

// Do not edit below this line
module.exports = sumAll;
