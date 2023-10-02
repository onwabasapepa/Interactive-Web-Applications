// nwabisa.js

// const firstname = "Nwabisa"
// const surname = "Gabe"
// const role = "CEO"

// private.display= firstname + " " + surname + " (" + role + ")"
// document.querySelector('#nwabisa').innerText = display

class Employee {
    constructor(firstname, surname) {
      this._firstname = firstname; // Private
      this._surname = surname;     // Private
      this.role = "CEO";           // Public
      this.displayElement = document.querySelector('#nwabisa'); // Public
    }
  
    // Getter for the full name
    get fullName() {
      return `${this._firstname} ${this._surname} (${this.role})`;
    }
  
    // Setter for the full name
    set fullName(fullName) {
      const parts = fullName.split(' ');
      if (parts.length === 3) {
        this._firstname = parts[0];
        this._surname = parts[1];
        this.role = parts[2];
      }
    }
  
    // Display the full name in the specified HTML element
    displayFullName() {
      this.displayElement.innerText = this.fullName;
    }
  }
  
  const nwabisa = new Employee("Nwabisa", "Gabe");
  //nwabisa.fullName = "CEO"; // Using the setter
  nwabisa.displayFullName(); // Display the full name
  
