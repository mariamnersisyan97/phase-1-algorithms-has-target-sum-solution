//hasTargetSum([3, 8, 12, 4, 11, 7], 10);

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement) return true
    }

  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ 
//hasTargetSum([3, 8, 12, 4, 11, 7], 10);
//Iterate through each number in the array
// for the current #, identify a complement that adds to the target (complement = target - currentNum)
//Iterate through the rest of the array and check if any # is our complement
//if so, return true.
//If i reach the end of the array, return false


/*
  Add written explanation of your solution here
*/

// make a function called 'hasTargetSum' that checks if two #s from the array add up to some target. 

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
//returns true, since 3 and 7 add up to 10.

hasTargetSum([1,2,5],4);
//returns false 





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
