// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    // Log a message to confirm the DOM has loaded
    console.log("The DOM has loaded");
  
    // Target the paragraph element with id="text"
    const textElement = document.getElementById("text");
  
    // Replace the text with "This is really cool!"
    if (textElement) {
      textElement.textContent = "This is really cool!";
    }
  });
  