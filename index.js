// Given an array of distinct integers "nums"
// and a target integer "target",
// return the number of possible combinations
// that add up to "target".

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7

// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};
