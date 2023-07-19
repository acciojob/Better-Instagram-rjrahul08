//your code here
// script.js

document.addEventListener("DOMContentLoaded", () => {
  let draggedItem = null;

  // Event listeners for drag events
  const dragStart = (event) => {
    draggedItem = event.target;
    event.dataTransfer.setData("text/html", draggedItem.outerHTML);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dragDrop = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("image")) {
      // Swap images between the dragged and target elements
      const draggedImage = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = target.style.backgroundImage;
      target.style.backgroundImage = draggedImage;
    }
  };

  const dragEnd = () => {
    draggedItem = null;
  };

  // Add event listeners to all the draggable divs
  const divs = document.querySelectorAll(".image");
  divs.forEach((div) => {
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", dragDrop);
    div.addEventListener("dragend", dragEnd);
  });
});
