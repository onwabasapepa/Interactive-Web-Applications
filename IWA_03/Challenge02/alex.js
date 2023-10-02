// alex.js


// const firstname = "Alex"
// const surname = "Naidoo"
// const role = "Head of Marketing"

// private.display = firstname + " " + surname + " (" + role + ")"
// document.querySelector('#alex').innerText = display

class Employee {
    constructor(firstname, surname) {
      this.firstname = firstname; // Private
      this.surname = surname;     // Private
      this.role = "Head of Marketing"; // Public
      this.displayElement = document.querySelector('#alex'); // Public
      this.updateDisplay(); // Call the updateDisplay method initially
    }
  
    // Method to update the display element
    updateDisplay() {
      const displayText = `${this.firstname} ${this.surname} (${this.role})`;
      this.displayElement.innerText = displayText;
    }
  }
  
  const alex = new Employee("Alex", "Naidoo");
  
