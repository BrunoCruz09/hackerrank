/**
 * Example
 * arr = [1,1,0,-1,-1]
 */

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    // Write your code here
    let countPositive = 0;
    let countNegative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPositive+=1;
        } else if (arr[i] < 0) {
            countNegative+=1;
        } else {
            zero+=1;
        }
    }

    let calPositive = countPositive/arr.length.toFixed(6)
    console.log(calPositive)
    let calNegative = countNegative/arr.length.toFixed(6)
    console.log(calNegative)
    let calZero = zero/arr.length.toFixed(6)
    console.log(calZero)
}

plusMinus(arr)