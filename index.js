function hasTargetSum(array, target) {
  // Write your algorithm here
  // Problem Description:
  // Write a function `hasTargetSum` that will receive 2 arguments
  // let pairs = []
  // let map = {}
  // // Iterate through array
  // for (let i = 0; i < array.length; i++) {
  //   let currentNum = arr[i];
  //   let complement = target - currentNum;
  //   // check if the complement of the current number exists in the map
  //   if (map[complement] !== undefined) {
  //     pairs.push([complement, currentNum]) 
  //   }
  //    // add the current number to the map
  //    map[currentNum] = i;
  // }
  // return pairs;
  for (let i =0; i < array.length; i++) {
    const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) return true
      }
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  if any pair of numbers in the array adds up to target number
      return true
      then else false
*/

/*
  Add written explanation of your solution here
  if any pair of numbers in the array add up to the target number, it returns true
  Otherwise, returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
