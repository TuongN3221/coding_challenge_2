let fishTypes = ["Salmon", "Tuna", "Mackerel", "Bass", "Sardine", "Herring"];
fishTypes.push("Cod");
console.log(fishTypes); // Output: Original array that includes "Cod"

fishTypes.pop();// Removes "Cod"

console.log(fishTypes);// Output: Original array that removes "Cod"

// Task 2 - Accessing & Modifying Arrays
let scores = [85, 95, 78, 92, 88, 55];

scores[1] = 78; // Updates score in 1
console.log(scores[1]); // outputs new score in 1

let totalScore = scores.reduce((sum, scores) => sum + scores, 0); //Sums scores
console.log(totalScore); //Output of scores
let average = totalScore / scores.length;
console.log("Average:", average);