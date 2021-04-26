console.log('***** Object Practice *****');
console.log("\n");

// Add the required code to complete the tasks below

/* #1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property (DONE)
  - Give it a boolean 'hasSiblings' property (DONE)
  - Give it  a numeric 'shoeCount' property (DONE)
  - Also give it an array 'favThreeFoods' (DONE) */
console.log("--- Question #1. ---");
const me = {
  // TO DO - add properties here
  firstName: "Ryan",
  lastName: "Maas",
  hasSiblings: false,
  shoeCount: 6,
  favThreeFoods: ["Ice Cream", "Penne Rosa", "Mashed Potatoes"],
}; // End object literal "me".
console.log('A little about me:', me);
console.log("\n");


/* 2. Accessing object properties.
  - Create a variable called fullName (DONE)
  - Use the firstName & lastName properties of the object you created above to set its value. (DONE)
  - Console.log fullName (DONE) */
console.log("--- Question #2. ---");
const fullName = `${me.firstName} ${me.lastName};`
console.log(`My full name is (expect 'Ryan Maas'): `, fullName);
console.log("\n");


/* 3. Nested arrays
  - Console.log your first favorite food (DONE)
  - Console.log your last favorite food (DONE) */
console.log("--- Question #3. ---");
console.log(`My first favorite food is (expect 'Ice Cream'): `, me.favThreeFoods[0]);
console.log(`My third favorite food is (expect 'Mashed Potatoes'): `, me.favThreeFoods[me.favThreeFoods.length - 1]); // I realize this could be done with [2] to reference the third element specifically, but wanted to practice being able to always reference the 'last item' in the array. :)
console.log("\n");


/* 4. Change a property of an existing object.
  - Console.log your current shoe count. (DONE)
  - Guess what?! You just got a new pair of shoes!!! (YAY)
  - Set your object's shoeCount to be what it was plus 1 (DONE)
  - Console.log your updated shoe count. (DONE) */
console.log("--- Question #4. ---");
console.log(`My current shoe count is (expect '6'): `, me.shoeCount);
me.shoeCount += 1; // You specifically asked us to add '1', not '1 pair'. =P
console.log(`My new shoe count is (expect '7'): `, me.shoeCount);
console.log("\n");


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object (DONE)
  - Do this the same way you updated the variable above (DONE)
  - Cool huh? It works, even though it wasn't there before (AGREED)
  - Console.log your object (DONE) */
console.log("--- Question #5. ---");
me.favoriteColor = "Red";
console.log(`My newly added favorite color is (expect 'Red'): `, me.favoriteColor);
console.log('A little about me: ', me);
console.log("\n");
