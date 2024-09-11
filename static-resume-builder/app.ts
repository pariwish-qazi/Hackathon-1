// Get the button and skills section from the DOM
 colorButton = document.getElementById('change-color-btn');
skillsSection = document.getElementById('skills');

// Add an event listener to the button to change the background color
colorButton?.addEventListener('click', () => {
  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  // Change the background color of the skills section
  if (skillsSection) {
    skillsSection.style.backgroundColor = randomColor;
  }
});
