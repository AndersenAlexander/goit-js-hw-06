class Storage {
  #items; // Private property to store items

  constructor(initialItems) {
    this.#items = initialItems; // Initialize the private items property
  }

  // Method to get the current items
  getItems() {
    return this.#items;
  }

  // Method to add a new item
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Method to remove an item
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Test the implementation
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

document.getElementById("task-2-results").innerHTML = `
  <p>Initial items: ${storage.getItems().join(", ")}</p>
`;
storage.addItem("Droid");
document.getElementById("task-2-results").innerHTML += `
  <p>After adding 'Droid': ${storage.getItems().join(", ")}</p>
`;
storage.removeItem("Prolonger");
document.getElementById("task-2-results").innerHTML += `
  <p>After removing 'Prolonger': ${storage.getItems().join(", ")}</p>
`;

