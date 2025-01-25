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

// Task 3 - Working with Objects
let employee = {
    name: "Good Fish",
    age: 100,
    department: "Coral Management",
    isActive: true
};// sets up employee

employee.department = "Cannibalism Supervision"; // Updates from Coral Management to Cannibalism Supervision
employee.position = "Taste Tester";// Adds new position to object

console.log(employee);

// Task 4 - Array of Objects
let customers = [
    {
        name: "Spongebob",
        email: "spongepants@krustykrab.com",
        purchaseAmount: 0.62
    },
    {
        name: "Eugene Krabs",
        email: "mrkrabs@krustykrab.com",
        purchaseAmount: 99.00
    },
    {
        name: "Squidward Tentacles",
        email: "tentacles@krustykrab.com",
        purchaseAmount: 200.00
    }
];// Decalre array of customers

customers.push({
    name: "Plankton",
    email: "karen@chumbucket.com",
    purchaseAmount: 132.32
});// Adds new Customer object to array
console.log(customers);