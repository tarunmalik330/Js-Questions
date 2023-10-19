// Question1-Write a JavaScript function to find the sum of all the elements in an array?
// method-1
const arr = [0, 1, 2, 3, 5, 6, 68, 9,];
sum = arr.reduce((a, b) => a + b, 0);
sum = arr.reduce(function (a, b) {
    return a + b;
});
console.log(sum)
// method-2
var array = [1, 2, 3, 4];
function myfun() {
    for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
    console.log(sum);
}
myfun();
// Question2- Write a function to reverse a string?
const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.reverse();
console.log(fruits);
// Question3-Write a function that checks if a number is even?
const n = [22]
function evennumber() {
    if (n === 0 || !!n && !(n % 2)) {
        console.log('true')
    } else (
        console.log("false")
    )
}
evennumber();
// Question4-Write a function finds the maximum element in an array?

let c = [2, 10, 28, 12, 4]
function maxnumber() {
    let max = -Infinity;
    let secondmax = -Infinity
    for (i = 0; i < c.length; i++) {
        max = Math.max(max, c[i])
    }
    console.log(max);
    for (let i = 0; i < c.length; i++) {
        if (c[i] < max) {
            secondmax = Math.max(secondmax, c[i])
        }
    }
    console.log(secondmax)
}
maxnumber();
// Question-5 Write a function to calculate the factorial of a number?
let no = 4;
function factorial(no) {
    let ans = 1;
    if (no === 0)
        return 1
    for (let i = 2; i <= no; i++)
        ans = ans * i;
    return ans;
}
console.log(factorial(no));
// Quetion-6 Write a function to check if a given string is a palindrome?
// function to check palindrome
function checkPalindrome(str) {
    // applying split, revere and join
    const reversedString = str.split('').reverse().join('');
    if (str === reversedString)
        return true;
    else
        return false;
}
result = checkPalindrome("abcd dbca")
if (result == true) {
    console.log("The given string is Palindrome");
}
else {
    console.log("The given string is NOT Palindrome");
}

// Question - 7 Write a function to remove duplicates from an array?
let Remove = ["scale", "happy", "strength",
    "peace", "happy", "happy"];

function removeDuplicates(Remove) {
    return Remove.filter((item,
        index) => Remove.indexOf(item) === index);
}
console.log(removeDuplicates(Remove));
// Question - 8  Write a function that finds the second smallest number in an array?
let a = [2, 10, 28, 12, 4]
function minnumber() {
    let min = Infinity;
    let secondmin = Infinity
    for (i = 0; i < a.length; i++) {
        min = Math.min(min, a[i])
    }
    console.log(min);
    for (let i = 0; i < a.length; i++) {
        if (a[i] > min) {
            secondmin = Math.min(secondmin, a[i])
        }
    }
    console.log(secondmin)
}
minnumber();
// Question-9 Write a function to check if a number is prime?
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(49));

// Question - 10 Write a function that returns the reverse of a number?
function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));