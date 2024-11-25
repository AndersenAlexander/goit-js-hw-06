class StringBuilder {
  #value; // Private property to store the string

  constructor(initialValue) {
    this.#value = initialValue; // Initialize the private value property
  }

  // Method to get the current value
  getValue() {
    return this.#value;
  }

  // Method to append a string to the end
  padEnd(str) {
    this.#value += str;
  }

  // Method to prepend a string to the beginning
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Method to prepend and append a string
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Test the implementation and display results in the browser
const builder = new StringBuilder(".");
const results = []; // Array to store the results

// Add initial value to results
results.push(`Initial value: ${builder.getValue()}`);

// Call methods and store their results
builder.padStart("^");
results.push(`After padStart("^"): ${builder.getValue()}`);

builder.padEnd("^");
results.push(`After padEnd("^"): ${builder.getValue()}`);

builder.padBoth("=");
results.push(`After padBoth("="): ${builder.getValue()}`);

// Display results dynamically in the browser
const task3ResultsContainer = document.getElementById("task-3-results");
results.forEach(result => {
  const p = document.createElement("p"); // Create a new <p> element
  p.textContent = result; // Set the text content of <p>
  task3ResultsContainer.appendChild(p); // Append the <p> element to the container
});
