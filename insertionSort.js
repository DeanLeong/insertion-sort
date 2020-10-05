function insertionSort(array) {
  // loop over the array starting at index 1 incrementing
  for (let i = 1; i < array.length; i++) {
    // set the current value to a temp variable
    let current = array[i];
    // set the the next iterator for upcoming while loop to 1 less than i
    let j = i - 1;
    console.log(`array[i] is ${array[i]}`)
    // nest a while loop 
    // setting a condition if the nested value is greater than the value set the temp variable written above
    // and if iterator is greater than or equals to 0
    while (j >= 0 && array[j] > current) {
      console.log(`current is ${current}`
      )
      console.log(`j = ${j}`)
      console.log(`array[j] is ${array[j]}`)
      console.log(`array before switching values: [${array}]`)
      // inside the nested loop set the nested value + 1 index to the nested value index
      array[j + 1] = array[j];
      console.log(`array after switching values: [${array}]`)
      // decrement nested iterator for the nested loop
      j--;
    }
    // inside the outer loop set the nested loop's value + 1 index to the temp variable written above
    array[j + 1] = current;
    console.log(`array after exiting or bypassing while loop: [${array}]`)
  }
  // return the array
  return array;
}

console.log(insertionSort([2, 3, 6, 1, 7, 4, 5]));
