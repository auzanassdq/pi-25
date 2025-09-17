// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Landing page animations
    if (document.querySelector('.hero')) {
        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.feature', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });

        gsap.from('.badge', {
            duration: 0.5,
            scale: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });
    }

    // Jobs list page animations
    if (document.querySelector('.jobs-list')) {
        gsap.from('.filters', {
            duration: 0.8,
            y: -20,
            opacity: 0,
            ease: 'power2.out'
        });
    }
});

// Mock API endpoint
const API_URL = 'https://api.example.com/jobs';

// Job data
const mockJobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechCorp',
        location: 'Jakarta, Indonesia',
        experience: 'Entry Level',
        description: 'We are looking for a passionate Frontend Developer to join our team...',
        requirements: [
            "Bachelor\'s degree in Computer Science or related field",
            "Proficiency in HTML, CSS, and JavaScript",
            "Experience with React or Vue.js",
            "Good understanding of responsive design"
        ],
        xpReward: 50
    },
    {
        id: 2,
        title: 'UI/UX Designer',
        company: 'DesignHub',
        location: 'Bandung, Indonesia',
        experience: 'Mid Level',
        description: 'Join our creative team as a UI/UX Designer...',
        requirements: [
            'Minimum 3 years of experience in UI/UX design',
            'Proficiency in Figma and Adobe Creative Suite',
            'Strong portfolio showcasing user-centered design',
            'Experience with design systems'
        ],
        xpReward: 75
    },
    // Add more mock jobs as needed
];

// Load jobs list
async function loadJobs() {
    const jobsList = document.getElementById('jobsList');
    if (!jobsList) return;

    const template = document.getElementById('job-card-template');
    
    mockJobs.forEach(job => {
        const clone = template.content.cloneNode(true);
        
        clone.querySelector('.job-title').textContent = job.title;
        clone.querySelector('.company').textContent = job.company;
        clone.querySelector('.location').textContent = job.location;
        clone.querySelector('.experience').textContent = job.experience;
        clone.querySelector('.view-job').href = `job-detail.html?id=${job.id}`;
        
        // Animate each card as it's added
        gsap.from(clone.querySelector('.job-card'), {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: 'power2.out'
        });
        
        jobsList.appendChild(clone);
    });
}

// Load job details
async function loadJobDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id'));
    
    if (!jobId) return;
    
    const job = mockJobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Update page content
    document.getElementById('jobTitle').textContent = job.title;
    document.getElementById('companyName').textContent = job.company;
    document.getElementById('location').textContent = job.location;
    
    const descriptionEl = document.getElementById('jobDescription');
    descriptionEl.textContent = job.description;
    
    const requirementsList = document.getElementById('requirements');
    job.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requirementsList.appendChild(li);
    });
    
    // Animate content
    gsap.from('.job-header', {
        duration: 0.8,
        y: -30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.job-description, .requirements, .application-sidebar > div', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
}

// Initialize page
if (document.querySelector('.jobs-list')) {
    loadJobs();
} else if (document.querySelector('.job-header')) {
    loadJobDetail();
}
