/*
=========================================
OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT
=========================================

*/

// CLASSES AND OBJECTS

class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    drive() {
      console.log(`Driving the ${this.make} ${this.model}`);
    }
  }

  let myCar = new Car('Toyota', 'Camry');
    myCar.drive(); 


    // ENCAPSULATION (HIDING)

    function Person(name) {
        let _name = name; // private variable
        
        this.getName = function() {
          return _name;
        }
        
        this.setName = function(name) {
          _name = name;
        }
      }

let person = new Person('Beloved');
console.log(person.getName()); 
person.setName('Williams');
console.log(person.getName()); 


//INHERITANCE (EXTENDS METHODS AND PROPERTIES)

class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog = new Dog('Prince');
  dog.speak(); 
  

// POLYMORPHISM (Multiple methods)

function makeSound(animal) {
    animal.speak();
  }
  
  let dog = {
    speak() {
      console.log('Woof!');
    }
  };
  
  let cat = {
    speak() {
      console.log('Meow!');
    }
  };
  
  makeSound(dog);
  makeSound(cat); 
  



  