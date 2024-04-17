const heading = document.getElementById("myHeading");
const toggleColourButton = document.getElementById("toggleColourButton")

toggleColourButton.addEventListener("click", toggleColourClicked);

function toggleColourClicked() {
    let buttonText = toggleColourButton.textContent;

    if (buttonText === "Red") {
        heading.classList.remove("red");
        heading.classList.add("green");
        toggleColourButton.textContent = "Green";
    } else if (buttonText === "Green") {
        heading.classList.remove("green");
        heading.classList.add("blue");
        toggleColourButton.textContent = "Blue";        
    } else if (buttonText === "Blue") {
        heading.classList.remove("blue");
        heading.classList.add("red");
        toggleColourButton.textContent = "Red";     
    }
}

/**
 * Next:
 * 
 * Add a second toggle button that instead of changing colours, 
 * changes fonts.
 */