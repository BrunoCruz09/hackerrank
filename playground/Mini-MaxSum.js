 let arr = [3, 4, 1, 2, 5];

function miniMaxSum(arr) {
  // Write your code here
  let maxNumber = arr[0];
  let minNumber = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    } else if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  console.log(sum-maxNumber, sum-minNumber);
}

miniMaxSum(arr);