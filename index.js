function naiveSolution(heights) {
  let totalWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) {
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
}

function efficientSolution(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  return 0;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
const test2 = [1, 3, 2, 1, 0, 4, 2, 5, 5, 4, 1, 3];
console.log("Efficient Solution Array 1:", efficientSolution(testArray));
console.log("Naive Solution Array 1:", naiveSolution(testArray));
console.log("Efficient Solution Array 2:", efficientSolution(test2));
console.log("Naive Solution Array 2:", naiveSolution(test2));
