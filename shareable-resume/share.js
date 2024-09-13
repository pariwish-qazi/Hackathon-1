// Resume display elements
{
    var form = document.getElementById('resume-form');
    var nameInput_1 = document.getElementById('name');
    var emailInput_1 = document.getElementById('email');
    var contactInput_1 = document.getElementById('contact');
    var degreeInput_1 = document.getElementById('degree');
    var collegeInput_1 = document.getElementById('college');
    var jobTitleInput_1 = document.getElementById('job-title');
    var companyInput_1 = document.getElementById('company');
    var experienceInput_1 = document.getElementById('experience');
    var skillsInput_1 = document.getElementById('skills');
    // Resume section
    var resumeSection_1 = document.getElementById('resume-section');
    var resumeName_1 = document.getElementById('resume-name');
    var resumeEmail_1 = document.getElementById('resume-email');
    var resumeContact_1 = document.getElementById('resume-contact');
    var resumeEducation_1 = document.getElementById('resume-education');
    var resumeWork_1 = document.getElementById('resume-work');
    var resumeSkills_1 = document.getElementById('resume-skills');
    // Additions for shareable link and PDF download
    var resumeLink_1 = document.getElementById('resume-link');
    var copyLinkButton = document.getElementById('copy-link-btn');
    var downloadButton = document.getElementById('download-btn');
    var resumeActions_1 = document.getElementById('resume-actions');
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Personal Information
        var name = nameInput_1.value;
        var email = emailInput_1.value;
        var contact = contactInput_1.value;
        // Education
        var degree = degreeInput_1.value;
        var college = collegeInput_1.value;
        // Work Experience
        var jobTitle = jobTitleInput_1.value || 'N/A';
        var company = companyInput_1.value || 'N/A';
        var experience = experienceInput_1.value || 'N/A';
        // Skills (Split comma-separated values)
        var skills = skillsInput_1.value.split(',');
        // Update Resume Section
        // Added span tag to make it editable
        resumeName_1.textContent = name;
        resumeEmail_1.textContent = email;
        resumeContact_1.textContent = "".concat(contact);
        resumeEducation_1.textContent = "".concat(degree, " from ").concat(college);
        resumeWork_1.textContent = "".concat(jobTitle, " at ").concat(company, " since ").concat(experience);
        // Clear skills list before updating
        resumeSkills_1.innerHTML = '';
        skills.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            resumeSkills_1.appendChild(li);
        });
        // Show the resume section with animation
        resumeSection_1.classList.remove('hidden');
        // Generate the shareable URL
        var baseUrl = window.location.href.split('?')[0]; // Get base URL
        var shareableUrl = "".concat(baseUrl, "?user=").concat(encodeURIComponent(name));
        resumeLink_1.href = shareableUrl;
        resumeLink_1.textContent = shareableUrl;
        resumeActions_1.classList.remove('hidden');
    });
    // Copy Link Button Handler
    copyLinkButton.addEventListener('click', function () {
        var url = resumeLink_1.href;
        navigator.clipboard.writeText(url).then(function () {
            alert('Link copied to clipboard');
        });
    });
    // Download PDF Button Handler
    downloadButton.addEventListener('click', function () {
        window.print(); // Use the browser's print dialog for PDF download
    });
}
