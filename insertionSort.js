function insertionSort(arr) {
  // loop over the array starting at index 1 incrementing
  for (var i = 1; i < arr.length; i++) {
    // set the current value to a temp variable
    let currentVal = arr[i];
    // nest a loop starting at index 0 but dynmaicly decrementing 
    // setting a condition if the nested value is greater than the value set the temp variable written above
    for (var k = i - 1; k >= 0 && arr[k] > currentVal; k--) {
      // inside the nested loop set the nested value + 1 index to the nested value
      arr[k + 1] = arr[k];
    }
    // inside the outer loop set the nested loop's value + 1 index to the temp variable written above
    arr[k + 1] = currentVal;
  }
}

let arr = [2, 1, 5, 3];
insertionSort(arr);

console.log(arr);
