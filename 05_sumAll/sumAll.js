const sumAll = function(num1, num2) {

    let start;
    let end;
    let sum = 0;

    if (num1 > num2) {
        end = num1;
        start = num2;
    } else {
        end = num2;
        start = num1;
    }

    if (start < 0 || typeof(end) != 'number' || typeof(start) != 'number') {
        return 'ERROR';
    }

    while (start <= end) {
        sum += start;
        start++;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
