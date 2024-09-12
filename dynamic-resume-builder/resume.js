// Resume display elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var contactInput = document.getElementById('contact');
var degreeInput = document.getElementById('degree');
var collegeInput = document.getElementById('college');
var jobTitleInput = document.getElementById('job-title');
var companyInput = document.getElementById('company');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
// Resume section
var resumeSection = document.getElementById('resume-section');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeContact = document.getElementById('resume-contact');
var resumeEducation = document.getElementById('resume-education');
var resumeWork = document.getElementById('resume-work');
var resumeSkills = document.getElementById('resume-skills');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Personal Information
    var name = nameInput.value;
    var email = emailInput.value;
    var contact = contactInput.value;
    // Education
    var degree = degreeInput.value;
    var college = collegeInput.value;
    // Work Experience
    var jobTitle = jobTitleInput.value || 'N/A';
    var company = companyInput.value || 'N/A';
    var experience = experienceInput.value || 'N/A';
    // Skills (Split comma-separated values)
    var skills = skillsInput.value.split(',');
    // Update Resume Section
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumeContact.textContent = "".concat(contact);
    resumeEducation.textContent = "".concat(degree, ", ").concat(college);
    resumeWork.textContent = "".concat(jobTitle, " at ").concat(company, " since ").concat(experience);
    // Clear skills list before updating
    resumeSkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        resumeSkills.appendChild(li);
    });
    // Show the resume section with animation
    resumeSection.classList.remove('hidden');
});
