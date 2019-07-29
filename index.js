exports.arraySum = function(arr) {
    if (toString.call(arr) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue;
        }
        total += Number(arr[i]);
    }
    return total;

}
exports.bubbleSort = function(arr) {
    if (toString.call(arr) !== "[object Array]")
        return false;
    let temp;
    for (i = 0; i < arr.length; i++) {
        // console.log(n);
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;

}
exports.stringReverse = function(str) {
    if (isNaN(str)) {
        return str.split("").reverse().join("");

    }
    return "This is not a string";

}
exports.linearSearch = function(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return [arr[i], i + 1]
        }
    }
    return "Not found";
}
exports.digitSum = function(integer) {
    let sum = 0;
    if (!isNaN(integer)) {
        while (integer != 0) {
            sum = sum + integer % 10;
            integer = integer / 10
        }
        return parseInt(sum);

    } else {
        return "This is not a Number";

    }

}
exports.stringPalindrome = function(str) {
    let rev;
    if (isNaN(str)) {
        rev = str.split("").reverse().join("");

    }
    if (rev == str) {
        return "This is palindrome string and its reverse is" + " " + rev;
    } else {
        return "This is not palindrom string";
    }


}
exports.largerAndsecondlarger = function(arr) {
    if (toString.call(arr) !== "[object Array]")
        return false;
    let i;
    let larger = arr[0];
    let secondlarger = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (larger < arr[i]) {
            secondlarger = larger;
            larger = arr[i];
        } else if (secondlarger < arr[i]) {
            secondlarger = arr[i];
        }
    }
    return [larger, secondlarger];

}
exports.smallerAndsecondsmaller = function(arr) {
    if (toString.call(arr) !== "[object Array]")
        return false;
    let i, smaller = arr[0],
        secondsmaller = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (smaller > arr[i]) {
            secondsmaller = smaller;
            smaller = arr[i];
        } else if (secondsmaller > arr[i]) {
            secondsmaller = arr[i];
        }
    }
    return [smaller, secondsmaller];
}