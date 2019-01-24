/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - default binding to the window object in the browser if no other binding is used. 
* 2. New binding - Keyword new is used when building out constructor functions
* 3. Implicit binding - Dot notation to invoke a function, whatever is to the left of the dot becomes the context for 'this'.
* 4. Explicit binding - When .call(), .apply(), and .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = 'Poly';

// Principle 2

// code example for Implicit Binding
const animal = {
    type: 'frog',
    name: 'Ted',
    age: 2,
    speak: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

animal.speak();

// Principle 3

// code example for New Binding
function Car (attribute) {
    this.make = attribute.make;
    this.year = attribute.year
}

const honda = new Car({
    make: 'Honda',
    year: 2006
})

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Poly',
    age: 26
}

function intro (){
    console.log(`Hi, my name is ${this.name}`)
}

intro.call(person);