console.log("Cookie Salmon loaded!"); // sanity test

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties.

// array for hours of operation!
const BIZNESSHOURS = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

//object literal info for locations!
// Seattle	23	65	6.3

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let Seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  cookiesPerHour: [],
  randomCustomersPerHour: [],

  randomCustomers: function (minCustomers, maxCustomers) {
    // minCustomers = Math.ceil(minCustomers);
    // maxCustomers = Math.floor(maxCustomers);
    //     minCustomers = Math.ceil(this.minCustomers);
    //    maxCustomers= Math.floor(this.maxCustomers);
    //generate a whole number!
    TODO: return Math.ceil(
      Math.random() * (this.maxCustomers - this.minCustomers) +
        this.minCustomers
    );
  
         // make sure to add this. to let jade know what you are referring to!
        
  }, // end of randomcustomers function!
  

  //We create a function to calculate cookies for each hour
  getCookiesSoldPerHour: function () {
    /* set a cookies array!*/

    // for loop to look through each hour of operation
    for (i = 0; i < BIZNESSHOURS.length; i++) {
      // for each hour, the variable will calculate the random customers times the avg cookies!
      let oneHour = Math.ceil(this.randomCustomers() * this.avgCookies);

      this.cookiesPerHour.push(oneHour);

      // this.totalDailyCookies += oneHour;
    }
    
   
    //console.log(`Seattle has approx. ${Seattle.randomCustomers()} customers per hour and Cookies each hour are: ${this.cookiesPerHour}`);
  },
};
Seattle.getCookiesSoldPerHour();
Seattle.randomCustomersPerHour.push(Seattle.randomCustomers());
console.log(Seattle.randomCustomersPerHour);



let Tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  cookiesPerHour: [],
  randomCustomersPerHour: [],
  randomCustomers: function (minCustomers, maxCustomers) {
    return Math.ceil(
      Math.random() * (this.maxCustomers - this.minCustomers) +
        this.minCustomers
    ); // make sure to add this. to let jade know what you are referring to!
  },

  getCookiesSoldPerHour: function () {
    /* set a cookies array!*/

    // for loop to look through each hour of operation
    for (i = 0; i < BIZNESSHOURS.length; i++) {
      // for each hour, the variable will calculate the random customers times the avg cookies!
      let oneHour = Math.ceil(this.randomCustomers() * this.avgCookies);

      this.cookiesPerHour.push(oneHour);

      // this.totalDailyCookies += oneHour;
    }

    console.log(`Cookies each hour for Tokyo: ${this.cookiesPerHour} and has approx. ${Tokyo.randomCustomers()} per hour`);
  },
};
Tokyo.getCookiesSoldPerHour();
Tokyo.randomCustomersPerHour.push(Tokyo.randomCustomers());
console.log(Tokyo.randomCustomersPerHour);


let Dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  cookiesPerHour: [],
  randomCustomersPerHour: [],
  randomCustomers: function (minCustomers, maxCustomers) {
    return Math.ceil(
      Math.random() * (this.maxCustomers - this.minCustomers) +
        this.minCustomers
    ); // make sure to add this. to let jade know what you are referring to!
  },
  getCookiesSoldPerHour: function(){
    /* set a cookies array!*/
  
    
  // for loop to look through each hour of operation
  for(i=0; i < BIZNESSHOURS.length; i++)
  {   // for each hour, the variable will calculate the random customers times the avg cookies!
      let oneHour = Math.ceil(this.randomCustomers() * this.avgCookies);
      
      this.cookiesPerHour.push(oneHour);
      
      // this.totalDailyCookies += oneHour;
  }
  
console.log(`Cookies each hour for Dubai: ${this.cookiesPerHour} and has approx. ${Dubai.randomCustomers()} per hour`);
 
},




};
Dubai.getCookiesSoldPerHour();
Dubai.randomCustomersPerHour.push(Seattle.randomCustomers());
console.log(Dubai.randomCustomersPerHour);


let Paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  cookiesPerHour: [],
  randomCustomersPerHour: [],
  randomCustomers: function (minCustomers, maxCustomers) {
    return Math.ceil(
      Math.random() * (this.maxCustomers - this.minCustomers) +
        this.minCustomers
    ); // make sure to add this. to let jade know what you are referring to!
  },


  getCookiesSoldPerHour: function(){
    /* set a cookies array!*/
  
    
  // for loop to look through each hour of operation
  for(i=0; i < BIZNESSHOURS.length; i++)
  {   // for each hour, the variable will calculate the random customers times the avg cookies!
      let oneHour = Math.ceil(this.randomCustomers() * this.avgCookies);
      
      this.cookiesPerHour.push(oneHour);
      
      // this.totalDailyCookies += oneHour;
  }
  
console.log(`Cookies each hour for Paris: ${this.cookiesPerHour} and has approx. ${Paris.randomCustomers()} per hour`);
 
},

};
Paris.getCookiesSoldPerHour();
Paris.randomCustomersPerHour.push(Paris.randomCustomers());
console.log(Paris.randomCustomersPerHour);


let Lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  cookiesPerHour: [],
  randomCustomersPerHour: [],
  randomCustomers: function (minCustomers, maxCustomers) {
    return Math.ceil(
      Math.random() * (this.maxCustomers - this.minCustomers) +
        this.minCustomers
    ); // make sure to add this. to let jade know what you are referring to!
  },

  getCookiesSoldPerHour: function(){
    /* set a cookies array!*/
  
    
  // for loop to look through each hour of operation
  for(i=0; i < BIZNESSHOURS.length; i++)
  {   // for each hour, the variable will calculate the random customers times the avg cookies!
      let oneHour = Math.ceil(this.randomCustomers() * this.avgCookies);
      
      this.cookiesPerHour.push(oneHour);
      
      // this.totalDailyCookies += oneHour;
  }
  
console.log(`Cookies each hour for Lima: ${this.cookiesPerHour} and has approx. ${Lima.randomCustomers()} per hour`);
 
},

};
Lima.getCookiesSoldPerHour();
Lima.randomCustomersPerHour.push(Lima.randomCustomers());
console.log(Lima.randomCustomersPerHour);

// ALL the object literals are created // what shall we do next??

// Uses a method of that object to generate a random number of customers per hour.
// Objects/Math/random DONE!

// Calculate and store the simulated amounts of cookies purchased for each hour at each location
//  using average cookies purchased and the random number of customers generated

// another method/function!
//output: amount of cookies purchased for each hour
// avg cookies and random customers

// avge cookies + random customers = cookies purchased per hour

// Store the results for each location in a separate array…
//  perhaps as a property of the object representing that location.

//====== DOM list ===== //
let unorderlist = document.getElementById('city-location'); // grabbing the element in the HTML by it's ID
let Cityname1 = document.createElement('p');
Cityname1.textContent = ('Seattle');
unorderlist.append(Cityname1);
let listItemSeattle = document.createElement('li'); // created a list item!
listItemSeattle.textContent = (`${BIZNESSHOURS}`);
unorderlist.append(listItemSeattle);

