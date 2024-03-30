function makeDraggable(element, limitWindow) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let isDragging = false;

  element.addEventListener("mousedown", dragMouseDown);
  element.addEventListener("touchstart", dragTouchStart, { passive: false });

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener("mouseup", closeDragElement);
    document.addEventListener("mousemove", elementDrag);
    isDragging = true;
  }

  function dragTouchStart(e) {
    if (e.targetTouches.length === 1) {
      const touch = e.targetTouches[0];
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      document.addEventListener("touchend", closeDragElement);
      document.addEventListener("touchmove", elementDrag, { passive: false });
      isDragging = true;
    }
  }

  function elementDrag(e) {
    e.preventDefault();
    if (!isDragging) return;
    const clientX = e.clientX || e.targetTouches[0].clientX;
    const clientY = e.clientY || e.targetTouches[0].clientY;
    const elementRect = element.getBoundingClientRect();
    const limitWindowRect = limitWindow.getBoundingClientRect();
    const minX = 0;
    const minY = 0;
    const maxX = limitWindowRect.width - elementRect.width;
    const maxY = limitWindowRect.height - elementRect.height;
    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;
    const newX = element.offsetLeft - pos1;
    const newY = element.offsetTop - pos2;
    const finalX = Math.min(Math.max(newX, minX), maxX);
    const finalY = Math.min(Math.max(newY, minY), maxY);
    element.style.top = finalY + "px";
    element.style.left = finalX + "px";
  }

  function closeDragElement() {
    document.removeEventListener("mouseup", closeDragElement);
    document.removeEventListener("mousemove", elementDrag);
    document.removeEventListener("touchend", closeDragElement);
    document.removeEventListener("touchmove", elementDrag);
    isDragging = false;
  }
}

const desktop = document.getElementById("desktop");

// Define image containers and their corresponding images
const imageContainers = [
  document.getElementById("imageContainer1"),
  document.getElementById("imageContainer2"),
  document.getElementById("imageContainer3"),
];

// Define positions for each set of images
const positions = [
  { top: "20%", left: "20%" },
  { top: "50%", left: "40%" },
  { top: "10%", left: "70%" },
];

// Add event listeners and functionalities for each image container
imageContainers.forEach((container, index) => {
  const smallImage = container.querySelector("img");
  const position = positions[index];

  container.style.top = position.top;
  container.style.left = position.left;

  const imageIndex = index + 1;

  smallImage.addEventListener("dblclick", function () {
    if (imageIndex === 2) {
      window.open("../club/club.html", "_self");
    } else if (imageIndex === 3) {
      window.open("../damn/damn.html", "_self");
    } else {
      const expandedImageContainer = document.createElement("div");
      expandedImageContainer.classList.add("expanded");
      const expandedImage = document.createElement("img");
      expandedImage.src = smallImage.src;
      expandedImage.alt = "Expanded Image " + imageIndex;
      expandedImage.classList.add("expanded-image");
      expandedImageContainer.appendChild(expandedImage);
      document.body.appendChild(expandedImageContainer);

      expandedImageContainer.addEventListener("click", function () {
        document.body.removeChild(expandedImageContainer);
      });
    }
  });

  makeDraggable(container, desktop);
});
