// ALL ABOUT FOLDERS
const folders = document.querySelectorAll('.folder-items');

// Function to get touch or mouse position
function getEventPosition(event) {
    if (event.touches && event.touches.length) {
        return {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    } else {
        return {
            x: event.clientX,
            y: event.clientY
        };
    }
}

// DRAGGING EVENT FOR FOLDERS
folders.forEach(folder => {
    let offsetX, offsetY;
    let isDragging = false;

    folder.addEventListener('mousedown', startDragging);
    folder.addEventListener('touchstart', startDragging);

    function startDragging(event) {
        event.preventDefault();

        const { x, y } = getEventPosition(event);

        offsetX = x - folder.getBoundingClientRect().left;
        offsetY = y - folder.getBoundingClientRect().top;

        isDragging = true;

        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);

        document.addEventListener('touchmove', dragElement);
        document.addEventListener('touchend', stopDragging);
    }

    function dragElement(event) {
        if (!isDragging) return;

        const { x, y } = getEventPosition(event);

        const maxX = window.innerWidth - folder.offsetWidth;
        const maxY = window.innerHeight - folder.offsetHeight;

        const boundedX = Math.min(Math.max(0, x - offsetX), maxX);
        const boundedY = Math.min(Math.max(0, y - offsetY), maxY);

        folder.style.left = `${boundedX}px`;
        folder.style.top = `${boundedY}px`;
    }

    function stopDragging() {
        isDragging = false;

        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);

        document.removeEventListener('touchmove', dragElement);
        document.removeEventListener('touchend', stopDragging);
    }

    // Double click functionality
    folder.addEventListener('dblclick', () => {
        // Access the link stored in the data-link attribute
        const link = folder.getAttribute('data-link');
        if (link) {
            // Open the specified link
            window.location.href = link;
        }
    });
});

/*************************/
// ALL ABOUT IMAGES
const images = document.querySelectorAll('.images-items');
const expandedImage = document.getElementById('expandedImage');
const expandedImg = document.getElementById('expandedImg');

// EXPANDING IMAGE
images.forEach(image => {
    image.addEventListener('dblclick', () => {
        expandedImg.src = image.src.replace('small', 'large');
        expandedImage.style.display = 'flex';
    });
});

// go out of expanding
expandedImage.addEventListener('click', (event) => {
    if (event.target === expandedImage) {
        expandedImage.style.display = 'none';
    }
});

// DRAGGING EVENT FOR IMAGES
images.forEach(image => {
    let offsetX, offsetY;
    let isDragging = false;

    image.addEventListener('mousedown', startDragging);
    image.addEventListener('touchstart', startDragging);

    function startDragging(event) {
        event.preventDefault();

        const { x, y } = getEventPosition(event);

        offsetX = x - image.getBoundingClientRect().left;
        offsetY = y - image.getBoundingClientRect().top;

        isDragging = true;

        document.addEventListener('mousemove', dragElement);
        document.addEventListener('mouseup', stopDragging);

        document.addEventListener('touchmove', dragElement);
        document.addEventListener('touchend', stopDragging);
    }

    function dragElement(event) {
        if (!isDragging) return;

        const { x, y } = getEventPosition(event);

        const maxX = window.innerWidth - image.offsetWidth;
        const maxY = window.innerHeight - image.offsetHeight;

        const boundedX = Math.min(Math.max(0, x - offsetX), maxX);
        const boundedY = Math.min(Math.max(0, y - offsetY), maxY);

        image.style.left = `${boundedX}px`;
        image.style.top = `${boundedY}px`;
    }

    function stopDragging() {
        isDragging = false;

        document.removeEventListener('mousemove', dragElement);
        document.removeEventListener('mouseup', stopDragging);

        document.removeEventListener('touchmove', dragElement);
        document.removeEventListener('touchend', stopDragging);
    }
});





//ONLY WORK FOR PC:

// //ALL AOUT FOLDERS
// const folders = document.querySelectorAll('.folder-items');
        
// //DRAGGING EVENT FOR FOLDERS
// folders.forEach(folder => {
//     let offsetX, offsetY;
//     let isDragging = false;

    
//     folder.addEventListener('mousedown', (e) => {
//         e.preventDefault();

//         offsetX = e.clientX - folder.getBoundingClientRect().left;
//         offsetY = e.clientY - folder.getBoundingClientRect().top;

//         isDragging = true;

//         document.addEventListener('mousemove', dragElement);
//         document.addEventListener('mouseup', stopDragging);
//     });

//     function dragElement(e) {
//         if (!isDragging) return;

//         const x = e.clientX - offsetX;
//         const y = e.clientY - offsetY;

//         const maxX = window.innerWidth - folder.offsetWidth;
//         const maxY = window.innerHeight - folder.offsetHeight;

//         const boundedX = Math.min(Math.max(0, x), maxX);
//         const boundedY = Math.min(Math.max(0, y), maxY);

//         folder.style.left = `${boundedX}px`;
//         folder.style.top = `${boundedY}px`;
//     }

//     function stopDragging() {
//         isDragging = false;
//         document.removeEventListener('mousemove', dragElement);
//     }

//     // Double click functionality
//     folder.addEventListener('dblclick', () => {
//         // Access the link stored in the data-link attribute
//         const link = folder.getAttribute('data-link');
//         if (link) {
//           // Open the specified link
//           window.location.href = link;
//         }
//     });

// });

// /*************************/
// //ALL AOUT IMAGES
// const images = document.querySelectorAll('.images-items');


// const expandedImage = document.getElementById('expandedImage');
// const expandedImg = document.getElementById('expandedImg');

// //EXPANDING IMAGE
// images.forEach(image => {
//   image.addEventListener('dblclick', () => {
//     expandedImg.src = image.src.replace('small', 'large');
//     expandedImage.style.display = 'flex';
//   });
// });

// //go out of expanding
// expandedImage.addEventListener('click', (event) => {
//     if (event.target === expandedImage) {
//         expandedImage.style.display = 'none';
//     }
// });


// //DRAGGING EVENT FOR IMAGES
// images.forEach(image => {
//     let offsetX, offsetY;
//     let isDragging = false;

    
//     image.addEventListener('mousedown', (e) => {
//         e.preventDefault();

//         offsetX = e.clientX - image.getBoundingClientRect().left;
//         offsetY = e.clientY - image.getBoundingClientRect().top;

//         isDragging = true;

//         document.addEventListener('mousemove', dragElement);
//         document.addEventListener('mouseup', stopDragging);
//     });

//     function dragElement(e) {
//         if (!isDragging) return;

//         const x = e.clientX - offsetX;
//         const y = e.clientY - offsetY;

//         const maxX = window.innerWidth - image.offsetWidth;
//         const maxY = window.innerHeight - image.offsetHeight;

//         const boundedX = Math.min(Math.max(0, x), maxX);
//         const boundedY = Math.min(Math.max(0, y), maxY);

//         image.style.left = `${boundedX}px`;
//         image.style.top = `${boundedY}px`;
//     }

//     function stopDragging() {
//         isDragging = false;
//         document.removeEventListener('mousemove', dragElement);
//     }

// });





//BETA VERSION:
// // Get the draggable element
//         const element = document.getElementById('element'); //const images = document.querySelectorAll('.draggable'); //original

//         // Variables to store the initial offset when dragging starts
//         let offsetX, offsetY;

//         // Variable to track if dragging is currently active
//         let isDragging = false;

//         // When the mouse is pressed down on the element
//         element.addEventListener('mousedown', (e) => {
//             e.preventDefault();

//             // Calculate the offset from the mouse cursor to the top-left corner of the element
//             offsetX = e.clientX - element.getBoundingClientRect().left;
//             offsetY = e.clientY - element.getBoundingClientRect().top;

//             // Set dragging to true
//             isDragging = true;

//             // Add event listeners for mousemove and mouseup events
//             document.addEventListener('mousemove', dragElement);
//             document.addEventListener('mouseup', stopDragging);
//         });

//         // Function to handle dragging the element
//         function dragElement(e) {
//             // Check if dragging is active
//             if (!isDragging) return;

//             // Calculate the new position of the element
//             const x = e.clientX - offsetX;
//             const y = e.clientY - offsetY;

//             // Calculate the maximum x and y positions (window boundaries)
//             const maxX = window.innerWidth - element.offsetWidth;
//             const maxY = window.innerHeight - element.offsetHeight;

//             // Ensure the element stays within the window boundaries
//             const boundedX = Math.min(Math.max(0, x), maxX);
//             const boundedY = Math.min(Math.max(0, y), maxY);

//             // Set the new position of the element
//             element.style.left = `${boundedX}px`;
//             element.style.top = `${boundedY}px`;
//         }

//         // Function to stop dragging the element
//         function stopDragging() {
//             // Set dragging to false
//             isDragging = false;

//             // Remove the event listener for mousemove
//             document.removeEventListener('mousemove', dragElement);
//         }