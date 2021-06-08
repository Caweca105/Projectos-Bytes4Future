"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function twoSum(nums, target) {
  var list = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        list.push(i, j);
        return list;
      }
    }
  }

  return list;
};

console.log(twoSum([2, 3, 210, 5, 3, 9], 11));
/*



So you should insert the command 'cd' in your terminal until you get to the folder where the file index.js is

If you have doubts of where you are, use the command 'pwd', if you want to see your folders/files use the command 'ls'


*/