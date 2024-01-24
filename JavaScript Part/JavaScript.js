function findTwoNumbersIndices(nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndices.hasOwnProperty(complement)) {
      return {
        indices: [numIndices[complement], i],
        explanation: `Because nums[${numIndices[complement]}] + nums[${i}] == ${target}, we return [${numIndices[complement]}, ${i}].`
      };
    }
    numIndices[nums[i]] = i;
  }
  return { indices: [], explanation: "No solution found." };
}
function findTwoNumbers() {
  const numsString = prompt("Enter an array of integers (comma , separated)(e.g.: 2,7,11,15):");
  const nums = numsString.split(",").map(Number);
  const target = prompt("Enter the target sum:");
  const targetNumber = Number(target);
  const result = findTwoNumbersIndices(nums, targetNumber);
  if (result.indices.length === 2) {
    console.log(`Indices of the two numbers: ${result.indices}`);
    console.log(`Explanation: ${result.explanation}`);
  } else {
    console.log(result.explanation);
  }
}
findTwoNumbers();
