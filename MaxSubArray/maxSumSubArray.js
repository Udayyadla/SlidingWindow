//Maximum Sum of a Subarray of Fixed Length k
function MaxSumSubArray(arr, k) {
  let currentSum = 0;
  let maxSum = 0;
  //sum the first k elements in array
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  //slide the window over array
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
let arr = [1, 9, 6, 2, 7, 8],
  k = 3;
console.log(MaxSumSubArray(arr, k));
