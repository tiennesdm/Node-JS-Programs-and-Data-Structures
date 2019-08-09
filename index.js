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
exports.findFactorial = function(num) {
    let fact = 1;
    if (num == 0) {
        return 1;
    } else if (!isNaN(num)) {
        if (num > 1) {
            for (i = 1; i <= num; i++) {
                fact = fact * i;
            }
        } else {
            return false;
        }
    }
    return sum;
}

exports.stringReverse = function(str) {
    rev = '';
    letter = [];
    count = 0;
    /* if (isNaN(str)) {
         return str.split("").reverse().join("");

     }*/
    for (i = 0; i < str.length; i++) {
        letter[count] = str[i];
        count++;
    }
    for (j = 0; j < str.length; j++) {
        count--;
        rev = rev + letter[count];

    }
    return rev;
    // return "This is not a string";

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
exports.linearSearch = function(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return [arr[i], i + 1]
        }
    }
    return "Not found";
}
exports.binarySearch = function(arr, element) {
    first = 0;
    last = arr.length;
    while (first <= last) {
        mid = parseInt((first + last) / 2);
        if (arr[mid] == element) {
            return mid + 1;
        } else if (arr[mid] > element) {
            last = mid - 1;
        } else if (arr[mid] < element) {
            first = mid + 1;
        }
    }
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
exports.insertionSort = function(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let i, j;
    for (i = 0; i < arr.length; i++) {
        j = i - 1;
        key = arr[i];
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        //   console.log(arr);
        arr[j + 1] = key;
    }
    return arr;
}

exports.selectionSort = function(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let i, j, min, temp;
    for (i = 0; i < arr.length; i++) {
        min = i;
        for (j = i; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
exports.aramStrong = function(num) {
    sum = 0
    while (num > 0) {
        rem = parseInt(num % 10);
        sum = sum + rem * rem * rem;
        num = parseInt(num / 10);

    }
    return sum;
}
exports.removeDuplicateinArray = function(arr) {
    arr2 = []
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                //  delete arr[i];
                arr.splice(i, 1);
                // console.log(arr[i]);
            }
        }
    }
    return arr;
}
exports.removeElmentsinArray = function(arr, element) {
    temparray = new Array();
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != element) {
            temparray[count] = arr[i];
            count++;
        }
    }
    //console.log(count);
    return temparray;
}
exports.removeByindexinArray = function(arr, index) {
    temparray = new Array();
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (i != index) {
            temparray[count] = arr[i];
            count++
        }
    }
    return temparray;
}
exports.addElementinArray = function(arr, element) {
    arr[arr.length] = element;
    return arr;
}
exports.getElementByUsingFirstAndSecondIndex = function(arr, first, second) {
    temparray = new Array();
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (i == first && first <= second) {
            temparray[count] = arr[i];
            first++;
            count++;
        }
    }
    return temparray;
}
exports.removeElementByUsingFirstAndSecodIndex = function(arr, first, second) {
    temparray = new Array();
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (i == first && first <= second) {
            first++;
        } else {
            temparray[count] = arr[i];
            count++;
        }
    }
    return temparray;
}
exports.interChangeDigit = function(number) {
    arr = [];
    count = 0;
    let interchange = '';
    if (!isNaN(number)) {
        while (number > 0) {
            z = parseInt(number % 10);
            arr[count] = z;
            number = parseInt(number / 10);
            count++;
        }

    }
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        interchange += parseInt('' + arr[i]);
    }
    return interchange;

}
exports.sumofNseries = function(n, first, last) {
    return parseInt((n * parseInt(first + last) / 2));

}
exports.findTermofAP = function(n, a1, d) {
    return parseInt(a1 + (n - 1) * d);
}
exports.SquareofArrayNumber = function(arr) {
    newarr = [];
    count = 0;
    for (i = 0; i < arr.length; i++) {
        newarr[count] = arr[i] * arr[i];
        count++;
    }
    return newarr;

}
exports.cubeofArrayNumber = function(arr) {
    newarr = [];
    count = 0;
    for (i = 0; i < arr.length; i++) {
        newarr[count] = arr[i] * arr[i] * arr[i];
        count++;
    }
    return newarr;
}
exports.SquareNumber = function(number) {
    return number * number;
}
exports.cubeNumber = function(number) {
    return number * number * number;
}
exports.frequencyCounter = function(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    frequencyCounter1 = {};
    frequencyCounter2 = {};
    for (let val in arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val in arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
exports.stringCharacter = function(str) {
    lookup = {};
    for (i = 0; i < str.length; i++) {
        lookup[str[i]] ? lookup[str[i]] += 1 : lookup[str[i]] = 1;
    }
    return lookup;
}
exports.anagram = function(str1, str2) {
    lookup = {};
    if (str1.length != str2.length) {
        return false;
    }
    for (i = 0; i < str1.length; i++) {
        lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;
    }
    for (j = 0; j < str2.length; j++) {
        if (!lookup[str2[j]]) {
            return false;
        } else {
            lookup[str2[j]] -= 1;
        }
    }
    return true;
}
exports.mergeTwoArray = function(arr1, arr2) {
    l = arr1.length;
    for (i = 0; i < arr2.length; i++) {
        arr1[l] = arr2[i];
        l++;
    }
    return arr1;
}
exports.countUniqueValues = function(arr) {
    if (arr.length == 0) {
        return false;
    }
    i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i;
}
exports.sumZeroNaive = function(arr) {
    newarr = [];
    count = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                newarr[count] = [arr[i], arr[j]];
                count++;
            } else {
                return false;
            }
        }
    }
    return newarr;
}
exports.mergeSort = function(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length / 2));
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2) {
    count = 0;
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result[count] = arr1[i];
            count++;
            i++;
        } else {
            result[count] = arr2[j];
            j++;
            count++;
        }
    }
    while (i < arr1.length) {
        result[count] = arr1[i];
        i++;
        count++;
    }
    while (j < arr2.length) {
        result[count] = arr2[j];
        j++;
        count++;
    }
    return result;
}