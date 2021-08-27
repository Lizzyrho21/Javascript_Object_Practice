console.log("Heyo!");

//Two ways to create objects:

/* let user = new Object();  "object constructor" syntax
 let user = {};   "object literal" syntax*/


// below is a cool example of a small object
// it really only has a boolean value and an array,
// but objects can have an infinite amount of values inside them.

// let day1 = {
// squirrel: false, // a boolean value
// events: ['work', 'touched tree', 'pizza', 'running']}; // an array of values


// console.log(day1.squirrel); //returns false
// console.log(day1.wolf) // returns undefined because it is not listen inside of the object




// // delete day1.squirrel; // to remove a property, we can use the delete operator.

// console.log(day1);

// Here, the variable key may be calculated
//  at run-time or depend on the user input.
//   And then we use it to access the property.
//    That gives us a great deal of flexibility

// let user = {
//     name:"John",
//     age:30
// };

// let key = prompt("What do you want to know about the user?", "name");

// //access by variable 
// alert(user[key] ); //John (if eneter "name")

// console.log(user);



// let fruit = prompt("Which fruit to buy?", ); //"apple"

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.fruit ); // 5 if fruit="apple"


// Create a list of People using Object Literal notation.
// Each 'person' object in the 'people' collection should have the following information: First Name Last Name Age Zip Code
// Add the following 4 People to your list:
// Jimmy Page, 62, 00821

// Rick Nielsen, 57, 61016

// Joe Walsh, 58, 90001

// Lemmy Kilmister, 57, 21120

// object literals for all 4 people



//  2. Use javascript to create and populate an array of People objects


let allpeople = []; //Create an empty array

let person1 = {
    First: "Jimmy",
    Last: "Page",
    Age:62,
    Zip_Code:00821,
}
allpeople.push(person1);

let person2 = {
    First: "Rick",
    Last: "Nielsen",
    Age: 57,
    Zip_Code:61016,
};
allpeople.push(person2);

let person3 = {
    First: "Joe",
    Last: "Walsh",
    Age: 58,
    Zip_Code:90001,
};
allpeople.push(person3);
let person4 = {
    First: "Lemmy",
    Last: "Kilmister",
    Age: 57,
    Zip_Code:21120,
};
allpeople.push(4);
console.log(allpeople);



console.log(person1, person2, person3, person4); // Print each person in the console using a template literal.


let peopleDiv = document.getElementById("people-list"); // grabbed the div for DOM

let peopleUl = document.getElementById("people-ul"); // grabbed the ul for DOM

// next, we need to create an element for a list item.
let listItem = document.createElement('li');
let person1List = listItem.append(`${person1.First } ${person1.Last}`);





// listItem.append(person1.First); // I managed to add the first name.. I wonder how we can add all the first and last names and zip codes and such without repeating code?

peopleUl.append(listItem);

peopleDiv.append(peopleUl);

