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
    return str.split("").reverse().join("");
}
exports.linearSearch = function(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return [arr[i], i + 1]
        }
    }
    return "Not found";
}