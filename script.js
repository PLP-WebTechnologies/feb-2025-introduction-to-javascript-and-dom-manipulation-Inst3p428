// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("dynamic-text").textContent = "The text has been changed!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("toggle-style-btn").addEventListener("click", function () {
    document.body.classList.toggle("highlight");
  });
  
  // Add an element when button is clicked
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph.";
    newElement.className = "dynamic-paragraph";
    document.getElementById("element-container").appendChild(newElement);
  });
  
  // Remove the last element added
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    const container = document.getElementById("element-container");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  });
  