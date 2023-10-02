// johannes.js

// const firstname = "Johannes"
// const surname = "Potgieter"
// const role = "Intern"

// private.display = firstname + " " + surname + " (" + role + ")"
// document.querySelector('#johannes').innerText = display

class Employee {
    constructor(firstname, surname) {
      this._firstname = firstname; // Private
      this._surname = surname;     // Private
      this.role = "Intern";        // Public
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
  }
  
  const johannes = new Employee("Johannes", "Potgieter");
  //johannes.fullName = "Intern"; // Using the setter
  
  const displayElement = document.querySelector('#johannes');
  displayElement.innerText = johannes.fullName; // Display the full name
  