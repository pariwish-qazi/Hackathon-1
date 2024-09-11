// Get the button and skills section from the DOM
var colorButton = document.getElementById('change-color-btn');
var skillsSection = document.getElementById('skills');
// Add an event listener to the button to change the background color
colorButton === null || colorButton === void 0 ? void 0 : colorButton.addEventListener('click', function () {
    // Generate a random color
    var randomColor = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
    // Change the background color of the skills section
    if (skillsSection) {
        skillsSection.style.backgroundColor = randomColor;
    }
});
