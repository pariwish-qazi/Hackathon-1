// Resume display elements
namespace Resumebuilder{
    const form = document.getElementById('resume-form') as HTMLFormElement  ;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const contactInput = document.getElementById('contact') as HTMLInputElement;
    const degreeInput = document.getElementById('degree') as HTMLInputElement;
    const collegeInput = document.getElementById('college') as HTMLInputElement;
    const jobTitleInput = document.getElementById('job-title') as HTMLInputElement;
    const companyInput = document.getElementById('company') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    // Resume section
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const resumeName = document.getElementById('resume-name') as HTMLElement;
    const resumeEmail = document.getElementById('resume-email') as HTMLElement;
    const resumeContact = document.getElementById('resume-contact') as HTMLElement;
    const resumeEducation = document.getElementById('resume-education') as HTMLElement;
    const resumeWork = document.getElementById('resume-work') as HTMLElement;
    const resumeSkills = document.getElementById('resume-skills') as HTMLElement;
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Personal Information
        const name = nameInput.value;
        const email = emailInput.value;
        const contact = contactInput.value;
        
        // Education
        const degree = degreeInput.value;
        const college = collegeInput.value;
    
        // Work Experience
        const jobTitle = jobTitleInput.value || 'N/A';
        const company = companyInput.value || 'N/A';
        const experience = experienceInput.value || 'N/A';
    
        // Skills (Split comma-separated values)
        const skills = skillsInput.value.split(',');
    
        // Update Resume Section
        // Added span tag to make it editable
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumeContact.textContent = `<span contenteditable="true">${contact}</span>`;
        resumeEducation.textContent = `<span contenteditable="true">${degree}, ${college}</span>`;
        resumeWork.textContent = `<span contenteditable="true">${jobTitle} at ${company} since ${experience}</span>`;
    
        // Clear skills list before updating
        resumeSkills.innerHTML = '';
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill.trim();
            resumeSkills.appendChild(li);
        });
    
        // Show the resume section with animation
        resumeSection.classList.remove('hidden');
    })};