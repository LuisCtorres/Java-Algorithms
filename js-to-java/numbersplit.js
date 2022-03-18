

//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]



function numberSplit(n) {
    //empty array to store the numbers once split.
    let splitArr = []
    //this creates the first half by dividing the number in 2 and using math floor to get a whole number
    let firstHalf = Math.floor(n / 2);
    //we use Math.ceil() to round upwards and get the next whole number.
    let secondHalf = Math.ceil(n / 2);
    //push both halfs to splitARR
    splitArr.push(firstHalf, secondHalf);
    //return result
    return splitArr;	
}