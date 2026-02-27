// Track current scene
let sceneNumber = 1;

// Select DOM elements
const image = document.getElementById("forestImage");
const caption = document.getElementById("caption");
const button = document.getElementById("nextButton");
const endMessage = document.getElementById("endMessage");

// Function to advance the scene
function advanceScene() {

    if (sceneNumber === 1) {
        image.src = "images/forest2.jpg";
        caption.textContent = "You walk deeper. The trees grow taller and the light dims.";
        sceneNumber++;

    } else if (sceneNumber === 2) {
        image.src = "images/forest3.jpg";
        caption.textContent = "You reach a quiet clearing surrounded by ancient trees.";
        sceneNumber++;

    } else if (sceneNumber === 3) {
        endMessage.classList.remove("hidden");
        button.disabled = true;
    }
}

// Attach event listener
button.addEventListener("click", advanceScene);

