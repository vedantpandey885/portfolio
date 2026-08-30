/******************************************************************************
 * VEDANT PANDEY - PERSONAL PORTFOLIO JAVASCRIPT
 *
 * ============================================================================
 * 📝 EDIT YOUR PORTFOLIO HERE
 * ============================================================================
 * You can easily customize your entire portfolio by modifying the data below.
 * Replace placeholders (e.g., "YOUR_EMAIL", "YOUR_GITHUB_URL") with your real info!
 ******************************************************************************/

const portfolioData = {
  // 1. PERSONAL INFORMATION
  personal: {
    name: "Vedant Pandey",
    role: "Computer Science Engineering Student",
    typingRoles: [
      "Computer Science Engineering Student",
      "Web Developer",
      "Software Developer",
      "Tech Enthusiast",
      "Climate Activist"
    ],
    status: "Available for Internships & Projects",
    email: "vedantpandey885@gmail.com", 
    phone: "9334823176", 
    location: "Jalandhar, Punjab, India",
    
    // Social & Professional Links (Leave as placeholder or update)
    github: "https://github.com/vedantpandey885",  
    linkedin: "https://www.linkedin.com/in/vedant-pandey-a55062253/", 
    
    // Media files located in /assets folder
    profileImage: "assets/profile.jpg",
    resume: "assets/resume.pdf",
    
    shortIntro: "I am a second-year B.Tech CSE student at Lovely Professional University, actively building practical projects across Software Development, Web Technologies, Python, C/C++, and Cybersecurity.",
    
    bioParagraphs: [
      "Hello! I'm Vedant Pandey, a passionate Computer Science and Engineering student at Lovely Professional University. I specialize in building practical software tools, modern interactive web applications, and experimenting with electronics and low-level programming.",
      "My development journey is driven by a deep problem-solving mindset and an eagerness to learn cutting-edge technologies. From designing RF-based hardware detection systems to coding responsive web platforms and database architectures, I focus on writing clean, efficient, and maintainable code.",
      "I am actively seeking software development internships, hackathon collaborations, and tech opportunities where I can contribute my skills, solve challenging real-world problems, and grow as an engineer."
    ]
  },

  // 2. QUICK STATS (Visible in About Section)
  stats: [
    { label: "Practical Projects", value: 3, suffix: "+", icon: "fa-solid fa-laptop-code" },
    { label: "Technologies & Tools", value: 14, suffix: "+", icon: "fa-solid fa-cubes" },
    { label: "Certifications", value: 4, suffix: "", icon: "fa-solid fa-award" },
    { label: "Years of Engineering", value: 2, suffix: "nd Year", icon: "fa-solid fa-graduation-cap" }
  ],

  // 3. KEY HIGHLIGHTS (Visible in About Section)
  highlights: [
    { label: "Education", value: "B.Tech CSE (2025–2029)", icon: "fa-solid fa-university" },
    { label: "Core Focus", value: "Software & Web Development", icon: "fa-solid fa-code" },
    { label: "Key Languages", value: "C, C++, Python, JavaScript", icon: "fa-solid fa-terminal" },
    { label: "Interests", value: "Cybersecurity & Embedded Systems", icon: "fa-solid fa-shield-halved" }
  ],

  // 4. SKILLS & PROFICIENCIES
  skills: [
    // Programming
    { name: "C", category: "programming", level: 80, levelLabel: "Proficient", icon: "fa-solid fa-c" },
    { name: "C++", category: "programming", level: 85, levelLabel: "Intermediate", icon: "fa-solid fa-code" },
    { name: "Python", category: "programming", level: 85, levelLabel: "Proficient", icon: "fa-brands fa-python" },
    { name: "JavaScript (ES6+)", category: "programming", level: 80, levelLabel: "Intermediate", icon: "fa-brands fa-js" },

    // Web Development
    { name: "HTML5", category: "web", level: 90, levelLabel: "Advanced", icon: "fa-brands fa-html5" },
    { name: "CSS3", category: "web", level: 85, levelLabel: "Proficient", icon: "fa-brands fa-css3-alt" },
    { name: "Responsive UI/UX", category: "web", level: 85, levelLabel: "Proficient", icon: "fa-solid fa-palette" },

    // Database
    { name: "PostgreSQL", category: "database", level: 75, levelLabel: "Intermediate", icon: "fa-solid fa-database" },
    { name: "SQL Fundamentals", category: "database", level: 80, levelLabel: "Intermediate", icon: "fa-solid fa-table" },

    // Tools & Hardware
    { name: "Git", category: "tools", level: 85, levelLabel: "Intermediate", icon: "fa-brands fa-git-alt" },
    { name: "GitHub", category: "tools", level: 85, levelLabel: "Proficient", icon: "fa-brands fa-github" },
    { name: "VS Code", category: "tools", level: 90, levelLabel: "Advanced", icon: "fa-solid fa-code-merge" },
    { name: "Arduino UNO", category: "tools", level: 80, levelLabel: "Intermediate", icon: "fa-solid fa-microchip" },
    { name: "Proteus Simulation", category: "tools", level: 75, levelLabel: "Intermediate", icon: "fa-solid fa-wave-square" },

    // Cybersecurity / Other
    { name: "Kali Linux", category: "cybersecurity", level: 70, levelLabel: "Familiar", icon: "fa-brands fa-linux" },
    { name: "Cybersecurity Fundamentals", category: "cybersecurity", level: 75, levelLabel: "Intermediate", icon: "fa-solid fa-shield-halved" }
  ],

  // 5. PROJECTS
  projects: [
    {
      id: "project-rf-detector",
      title: "RF-Based Mobile Phone / Cheating Detection System",
      category: "electronics",
      categoryLabel: "Electronics / IoT",
      image: "assets\projects\image.png", // Replace with screenshot if available
      description: "A low-cost electronics-based hardware prototype designed to detect suspicious RF signals associated with unauthorized mobile phones and wireless transmission in examination halls.",
      problemSolved: "Helps exam invigilators detect hidden active wireless devices and prevent academic dishonesty using RF frequency detection and audio-visual buzzer alerts.",
      technologies: ["Arduino UNO", "RF Sensor Module", "LM358 Op-Amp", "LED & Buzzer", "Proteus Simulation"],
      github: "YOUR_PROJECT_GITHUB_URL", // e.g. "https://github.com/vedant/rf-detection"
      liveDemo: "YOUR_PROJECT_DEMO_URL", // Optional live demo or video link
      featured: true,
      longDetails: "This project incorporates an operational amplifier (LM358) and tuned RF sensor coils connected to an Arduino UNO microcontroller. When an active phone signal (making calls or transmitting data) emits radiation, the circuit amplifies the micro-voltage changes, triggering instant buzzer and LED warnings for invigilators. Fully modeled and simulated in Proteus prior to hardware fabrication."
    },
    {
      id: "project-waste-mgmt",
      title: "Solid Waste Management System",
      category: "web",
      categoryLabel: "Web Development",
      image: "assets/projects/waste-management.jpg",
      description: "An interactive web platform focused on improving awareness, categorization, and efficient tracking of domestic and industrial solid waste through analytics and environmental sustainability concepts.",
      problemSolved: "Solves information asymmetry in municipal waste segregation by providing intuitive classification guides, collection scheduling, and dynamic statistical charts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage"],
      github: "https://github.com/vedantpandey885/eco-waste-india.git",
      liveDemo: "https://vedantpandey885.github.io/eco-waste-india/#statistics",
      featured: true,
      longDetails: "Built using vanilla HTML, CSS, and modern JavaScript, this project features interactive waste tracking graphs with Chart.js, a waste sorting recommendation engine, recycling tips, and local storage data persistence for neighborhood collection logging."
    },
    {
      id: "project-portfolio",
      title: "Personal Developer Portfolio Website",
      category: "web",
      categoryLabel: "Web Development",
      image: "assets\projects\image3.png",
      description: "A fast, fully responsive, and modern personal portfolio website built with pure HTML5, CSS3, and JavaScript showcasing projects, education, certifications, and developer proficiencies.",
      problemSolved: "Provides recruiters and collaborators with an engaging, centralized hub to review my resume, live projects, GitHub repositories, and verified technical credentials.",
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "Font Awesome", "Canvas Particle FX"],
      github: "YOUR_PROJECT_GITHUB_URL",
      liveDemo: "YOUR_PROJECT_DEMO_URL",
      featured: true,
      longDetails: "Designed with an 'easy-configuration' centralized data architecture in JavaScript, this portfolio features smooth scroll spy navigation, dynamic typing effects, theme toggling with localStorage, interactive skill filters, project modal views, and accessible responsive layouts."
    }
  ],

  // 6. EDUCATION
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "2025 – 2029",
      cgpa: "8.11 / 10",
      description: "Currently in 2nd Year, building practical projects, participating in tech workshops, and gaining strong foundations in core computer science disciplines.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++/Python)",
        "Database Management Systems (SQL & PostgreSQL)",
        "Web Technologies (HTML, CSS, JavaScript)",
        "Digital Electronics & Microcontrollers (Arduino)",
        "Operating Systems & Linux Fundamentals"
      ],
      highlights: "Actively involved in software prototyping, competitive coding preparation, and engineering circuit design."
    }
  ],

  // 7. CERTIFICATIONS
  certifications: [
    {
      title: "Programming Fundamentals using Python",
      issuer: "Infosys / Academic Platform",
      date: "August / 2026",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0125409616243425281061_shared/cedfed16-e3df-4579-8ea7-738567875f56.pdf",
      // link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012734003600908288382_shared/ad7a9728-d0d3-43fa-8a66-cf6e8cd3b746.pdf",
      icon: "fa-solid fa-brain",
      badge: "Artificial Intelligence",
      description: "Foundations of AI concepts, search algorithms, knowledge representation, and intelligent systems."
    },
    {
      title: "Elements of AI",
      issuer: "University of Helsinki / MinnaLearn",
      date: "January / 2026",
      link: "https://certificates.mooc.fi/validate/wucxi0xwre",
      icon: "fa-solid fa-network-wired",
      badge: "AI & Machine Learning",
      description: "Comprehensive introduction to machine learning techniques, neural networks, and societal implications of AI."
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Infosys / Industry Platform",
      date: "March  / 2026",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_3388902307073574000_shared/0d7d7f9c-cac3-483c-86b5-cbb1c52c963b.pdf",
      icon: "fa-solid fa-user-shield",
      badge: "Security",
      description: "Fundamental principles of cybersecurity, network vulnerability identification, encryption, and safe digital practices."
    },
    {
      title: "Computer Programming",
      issuer: "Neo Colab",
      date: "May / 2026",
      link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX19qvyONkjlj87SR7eps422vRXwj8Q4pIGY%3D",
      icon: "fa-solid fa-brain",
      badge: "Web Development",
      description: "Certified in C Programming with hands-on knowledge of programming fundamentals, problem-solving, functions, pointers, and memory management."
    }
  ],

  // 8. ACHIEVEMENTS & MILESTONES
  achievements: [
    {
      title: "Hardware & IoT Project Prototyping",
      category: "Project Achievement",
      organization: "Lovely Professional University",
      date: "2025 - Present",
      icon: "fa-solid fa-microchip",
      description: "Successfully designed and simulated the RF-based mobile phone detection system with Arduino and Proteus, demonstrating practical application of hardware-software integration."
    },
    {
      title: "Academic & Programming Excellence",
      category: "Academic",
      organization: "B.Tech CSE Program",
      date: "2025 - Present",
      icon: "fa-solid fa-medal",
      description: "Consistently learning and implementing core engineering concepts in C++, Python, Data Structures, and Relational Databases."
    },
    {
      title: "Hackathons & Technical Competitions",
      category: "Competitions",
      organization: "SIH 2026",
      date: " 2026",
      icon: "fa-solid fa-trophy",
      description: "Participating in collegiate coding challenges, technical exhibitions, and team-based development sprints. "
    },
    {
      title: "Continuous Open Learning & Certifications",
      category: "Certifications",
      organization: "AI & Security Programs",
      date: "2025 - Present",
      icon: "fa-solid fa-award",
      description: "Completed 4+ recognized foundational certifications in Artificial Intelligence, Cybersecurity, and Large Language Models."
    }
  ],

  // 9. EXPERIENCE & LEARNING JOURNEY
  experience: [
    {
      role: "Python & Programming Mentorship / Training",
      organization: "Self-Initiated / YouTube / Training",
      location: "Punjab, India",
      period: "2026 – Present",
      type: "Training / Mentorship",
      description: "Assisting peers with Python programming basics, algorithmic problem solving, and software setup. Conducting study sessions covering data structures, object-oriented concepts, and project troubleshooting.",
      skillsApplied: ["Python", "Problem Solving", "Mentorship"]
    },
    {
      role: "Practical Engineering Projects & Hardware Prototyping",
      organization: "Academic Lab & Independent Research",
      location: "LPU Campus",
      period: "2025 – Present",
      type: "Hands-on Development",
      description: "Designed a low-cost RF-based examination monitoring system to detect suspicious wireless activity and alert invigilators using LED and buzzer indicators. Built with Arduino UNO, LM358, RF sensing components, and Proteus, combining electronics, signal detection, and microcontroller-based control.",
      skillsApplied: ["Arduino UNO", "Circuit Simulation", "HTML/CSS/JS", "Git"]
    }
  ]
};

/******************************************************************************
 * APPLICATION LOGIC & DYNAMIC RENDERING ENGINE
 * (No need to modify below unless customizing behavior)
 ******************************************************************************/

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderExperience();
  renderContact();
  initTypingEffect();
  initNavbar();
  initParticleCanvas();
  initProjectModal();
  initScrollAnimations();
  initStatsCounter();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE (Dark / Light) with LocalStorage
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem("vp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("vp_theme", newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, "info");
    });
  });
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll(".theme-toggle-btn i");
  icons.forEach((icon) => {
    if (theme === "light") {
      icon.className = "fa-solid fa-moon";
    } else {
      icon.className = "fa-solid fa-sun";
    }
  });
}

/* --------------------------------------------------------------------------
   HERO SECTION RENDERING
   -------------------------------------------------------------------------- */
function renderHero() {
  const p = portfolioData.personal;

  // Name & Role
  const heroNameEl = document.getElementById("hero-name");
  if (heroNameEl) heroNameEl.textContent = p.name;

  const heroBioEl = document.getElementById("hero-bio");
  if (heroBioEl) heroBioEl.textContent = p.shortIntro;

  // Status indicator
  const statusEl = document.getElementById("hero-status-text");
  if (statusEl) statusEl.textContent = p.status;

  // Profile photo with fallback
  const profileImgEl = document.getElementById("hero-profile-img");
  const placeholderIconEl = document.getElementById("hero-profile-placeholder");
  
  if (profileImgEl && placeholderIconEl) {
    if (p.profileImage) {
      profileImgEl.src = p.profileImage;
      profileImgEl.alt = `${p.name} - Profile Photo`;
      profileImgEl.style.display = "block";
      placeholderIconEl.style.display = "none";
      
      // If image file doesn't exist or fails to load, gracefully show fallback placeholder
      profileImgEl.onerror = () => {
        profileImgEl.style.display = "none";
        placeholderIconEl.style.display = "flex";
      };
    } else {
      profileImgEl.style.display = "none";
      placeholderIconEl.style.display = "flex";
    }
  }

  // Resume links
  const resumeBtns = document.querySelectorAll(".resume-link-btn");
  resumeBtns.forEach((btn) => {
    btn.href = p.resume;
    btn.setAttribute("download", `${p.name.replace(/\s+/g, '_')}_Resume.pdf`);
    btn.addEventListener("click", (e) => {
      // If it's the placeholder, give helpful guidance
      if (p.resume === "assets/resume.pdf") {
        // Let it attempt download or inform
        console.log("Resume path:", p.resume);
      }
    });
  });

  // Social Links
  updateSocialLink("hero-github-link", p.github, "GitHub");
  updateSocialLink("hero-linkedin-link", p.linkedin, "LinkedIn");
  updateSocialLink("hero-email-link", p.email.includes("@") ? `mailto:${p.email}` : "#contact", "Email");
  
  // Terminal card details
  const termNameEl = document.getElementById("terminal-name");
  if (termNameEl) termNameEl.textContent = p.name;
}

function updateSocialLink(elementId, url, platformName) {
  const el = document.getElementById(elementId);
  if (!el) return;

  if (url && !url.includes("YOUR_")) {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  } else {
    el.href = "#contact";
    el.addEventListener("click", (e) => {
      if (url.includes("YOUR_")) {
        e.preventDefault();
        showToast(`Please update your ${platformName} URL in js/script.js`, "info");
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/* --------------------------------------------------------------------------
   DYNAMIC TYPING ANIMATION
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const roles = portfolioData.personal.typingRoles;
  if (!roles || roles.length === 0) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at full text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 600);
}

/* --------------------------------------------------------------------------
   ABOUT SECTION & STATS RENDERING
   -------------------------------------------------------------------------- */
function renderAbout() {
  const p = portfolioData.personal;
  const container = document.getElementById("about-paragraphs");
  if (container) {
    container.innerHTML = p.bioParagraphs.map((para) => `<p>${para}</p>`).join("");
  }

  // Highlights
  const highlightsContainer = document.getElementById("about-highlights");
  if (highlightsContainer) {
    highlightsContainer.innerHTML = portfolioData.highlights.map((h) => `
      <div class="highlight-item">
        <div class="highlight-icon">
          <i class="${h.icon}"></i>
        </div>
        <div>
          <div class="highlight-label">${h.label}</div>
          <div class="highlight-value">${h.value}</div>
        </div>
      </div>
    `).join("");
  }

  // Stats Grid
  const statsContainer = document.getElementById("stats-grid");
  if (statsContainer) {
    statsContainer.innerHTML = portfolioData.stats.map((s, idx) => `
      <div class="glass-card stat-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
        <div class="stat-icon">
          <i class="${s.icon}"></i>
        </div>
        <div class="stat-number" data-target="${s.value}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join("");
  }
}

/* --------------------------------------------------------------------------
   ANIMATED STATS COUNTER
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10) || 0;
        const statObj = portfolioData.stats.find(s => s.value === target);
        const suffix = statObj ? statObj.suffix : "";
        
        let count = 0;
        const duration = 1200;
        const increment = Math.max(1, Math.ceil(target / (duration / 25)));
        
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${count}${suffix}`;
          }
        }, 25);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   SKILLS SECTION RENDERING & FILTERING
   -------------------------------------------------------------------------- */
function renderSkills(activeCategory = "all") {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const filtered = activeCategory === "all"
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  container.innerHTML = filtered.map((skill, index) => `
    <div class="glass-card skill-card" data-category="${skill.category}">
      <div class="skill-card-top">
        <div class="skill-info">
          <div class="skill-icon-wrapper">
            <i class="${skill.icon}"></i>
          </div>
          <div>
            <h4 class="skill-name">${skill.name}</h4>
            <span class="skill-category-tag">${formatCategory(skill.category)}</span>
          </div>
        </div>
        <span class="skill-level-badge">${skill.levelLabel}</span>
      </div>
      <div class="skill-progress-bar" title="${skill.name}: ${skill.level}%">
        <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
      </div>
    </div>
  `).join("");

  // Skill category tab event listeners
  const filterBtns = document.querySelectorAll(".skill-filter-btn");
  filterBtns.forEach((btn) => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderSkills(cat);
    };
  });
}

function formatCategory(cat) {
  const map = {
    programming: "Programming",
    web: "Web Dev",
    database: "Database",
    tools: "Tools & Hardware",
    cybersecurity: "Cybersecurity"
  };
  return map[cat] || cat;
}

/* --------------------------------------------------------------------------
   PROJECTS SECTION RENDERING & FILTERING
   -------------------------------------------------------------------------- */
function renderProjects(activeCategory = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = activeCategory === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  container.innerHTML = filtered.map((p) => {
    const hasGithub = p.github && !p.github.includes("YOUR_");
    const hasLive = p.liveDemo && !p.liveDemo.includes("YOUR_");

    return `
      <div class="glass-card project-card" data-project-id="${p.id}">
        <div class="project-thumbnail">
          <div class="project-category-overlay">
            <span class="badge badge-cyan">${p.categoryLabel || formatProjectCategory(p.category)}</span>
          </div>
          <div class="project-placeholder-art">
            <div class="project-placeholder-icon">
              <i class="${getProjectIcon(p.category)}"></i>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">${p.title}</span>
          </div>
        </div>

        <div class="project-card-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          
          <div class="problem-solved-box">
            <span class="problem-solved-label"><i class="fa-solid fa-lightbulb"></i> Problem Solved</span>
            ${p.problemSolved}
          </div>

          <div class="project-tech-stack">
            ${p.technologies.map(t => `<span class="badge badge-blue">${t}</span>`).join("")}
          </div>

          <div class="project-card-footer">
            <div class="project-links">
              ${hasGithub ? `
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source Code">
                  <i class="fa-brands fa-github"></i> Code
                </a>
              ` : `
                <button class="project-link-btn placeholder-link" data-type="GitHub repo" title="Add GitHub link in script.js">
                  <i class="fa-brands fa-github"></i> Code
                </button>
              `}
              
              ${hasLive ? `
                <a href="${p.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                </a>
              ` : `
                <button class="project-link-btn placeholder-link" data-type="Live Demo" title="Add live demo link in script.js">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                </button>
              `}
            </div>

            <button class="project-details-btn open-modal-btn" data-id="${p.id}">
              Details <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Setup click listeners for placeholder links
  container.querySelectorAll(".placeholder-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");
      showToast(`To connect your ${type}, edit the 'projects' array in js/script.js`, "info");
    });
  });

  // Setup click listeners for modal open
  container.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projId = btn.getAttribute("data-id");
      openProjectModal(projId);
    });
  });

  // Project category tab event listeners
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  filterBtns.forEach((btn) => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderProjects(cat);
    };
  });
}

function getProjectIcon(cat) {
  const map = {
    electronics: "fa-solid fa-microchip",
    web: "fa-solid fa-globe",
    programming: "fa-solid fa-code",
    other: "fa-solid fa-folder-open"
  };
  return map[cat] || "fa-solid fa-laptop-code";
}

function formatProjectCategory(cat) {
  const map = {
    electronics: "Electronics & IoT",
    web: "Web Development",
    programming: "Software Dev",
    other: "Other Projects"
  };
  return map[cat] || "Project";
}

/* --------------------------------------------------------------------------
   PROJECT DETAIL MODAL
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const overlay = document.getElementById("project-modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      overlay.classList.remove("open");
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById("project-modal-overlay");
  const modalContent = document.getElementById("modal-project-content");
  if (!overlay || !modalContent) return;

  const hasGithub = project.github && !project.github.includes("YOUR_");
  const hasLive = project.liveDemo && !project.liveDemo.includes("YOUR_");

  modalContent.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
      <span class="badge badge-cyan">${project.categoryLabel || formatProjectCategory(project.category)}</span>
      <span class="badge badge-purple">Featured Project</span>
    </div>
    
    <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 16px; line-height: 1.3;">
      ${project.title}
    </h2>

    <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 24px; line-height: 1.7;">
      ${project.longDetails || project.description}
    </p>

    <div style="background: rgba(6, 182, 212, 0.08); border-left: 4px solid var(--accent-cyan); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.05em;">
        <i class="fa-solid fa-shield-halved"></i> Problem Addressed
      </h4>
      <p style="font-size: 0.95rem; color: var(--text-primary); margin: 0;">
        ${project.problemSolved}
      </p>
    </div>

    <div style="margin-bottom: 28px;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.05em;">
        Technologies & Hardware Modules
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${project.technologies.map(t => `<span class="badge badge-blue" style="padding: 6px 14px; font-size: 0.85rem;">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 14px; padding-top: 20px; border-top: 1px solid var(--border-color);">
      ${hasGithub ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 22px;">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
      ` : `
        <button class="btn btn-primary" onclick="showToast('Edit project github link in js/script.js', 'info')" style="padding: 10px 22px;">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </button>
      `}

      ${hasLive ? `
        <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 10px 22px;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Open Live Demo
        </a>
      ` : `
        <button class="btn btn-secondary" onclick="showToast('Edit project live demo link in js/script.js', 'info')" style="padding: 10px 22px;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo (Placeholder)
        </button>
      `}
    </div>
  `;

  overlay.classList.add("open");
}

/* --------------------------------------------------------------------------
   EDUCATION SECTION RENDERING
   -------------------------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.education.map((edu) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${edu.degree}</h3>
            <div class="timeline-subtitle">${edu.institution}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${edu.location}</div>
          </div>
          <span class="timeline-period">${edu.period}</span>
        </div>

        <div class="timeline-content">
          <p>${edu.description}</p>
          
          <div class="timeline-meta-list">
            <div class="timeline-meta-item">
              <span class="meta-label">CGPA / Grade:</span>
              <span class="meta-val" style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 600;">${edu.cgpa}</span>
            </div>
            
            <div class="timeline-meta-item">
              <span class="meta-label">Core Coursework:</span>
              <span class="meta-val">${edu.coursework.join(", ")}</span>
            </div>

            <div class="timeline-meta-item">
              <span class="meta-label">Academic Highlights:</span>
              <span class="meta-val">${edu.highlights}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   CERTIFICATIONS SECTION RENDERING
   -------------------------------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById("certifications-grid");
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map((cert) => {
    const hasLink = cert.link && !cert.link.includes("YOUR_");

    return `
      <div class="glass-card cert-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="cert-icon-top">
            <i class="${cert.icon}"></i>
          </div>
          <span class="badge badge-purple">${cert.badge}</span>
        </div>

        <div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-issuer">${cert.issuer}</div>
          <div class="cert-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</div>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${cert.description}
        </p>

        <div class="cert-link-btn">
          ${hasLink ? `
            <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Verify Credential
            </a>
          ` : `
            <button class="btn btn-outline placeholder-link" data-type="Certification link" style="padding: 6px 14px; font-size: 0.82rem;">
              <i class="fa-solid fa-link"></i> Add Certificate Link
            </button>
          `}
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".placeholder-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast("To add your certificate URL, edit the 'certifications' array in js/script.js", "info");
    });
  });
}

/* --------------------------------------------------------------------------
   ACHIEVEMENTS SECTION RENDERING
   -------------------------------------------------------------------------- */
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = portfolioData.achievements.map((ach) => `
    <div class="glass-card achieve-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="achieve-icon-badge">
          <i class="${ach.icon}"></i>
        </div>
        <span class="badge badge-emerald">${ach.category}</span>
      </div>

      <h3 class="achieve-title">${ach.title}</h3>
      <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600; font-family: var(--font-mono);">
        ${ach.organization} • ${ach.date}
      </div>

      <p class="achieve-desc">${ach.description}</p>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   EXPERIENCE / LEARNING JOURNEY RENDERING
   -------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.experience.map((exp) => `
    <div class="timeline-item">
      <div class="timeline-dot" style="background: var(--accent-purple); box-shadow: 0 0 10px var(--accent-purple);"></div>
      <div class="glass-card timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${exp.role}</h3>
            <div class="timeline-subtitle" style="color: var(--accent-purple);">${exp.organization}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${exp.location}</div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
            <span class="timeline-period">${exp.period}</span>
            <span class="badge badge-purple">${exp.type}</span>
          </div>
        </div>

        <div class="timeline-content">
          <p>${exp.description}</p>
          
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px;">
            ${exp.skillsApplied.map(s => `<span class="badge badge-cyan">${s}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   CONTACT SECTION RENDERING & FORM HANDLING
   -------------------------------------------------------------------------- */
function renderContact() {
  const p = portfolioData.personal;

  const emailValEl = document.getElementById("contact-email-val");
  if (emailValEl) emailValEl.textContent = p.email;

  const phoneValEl = document.getElementById("contact-phone-val");
  if (phoneValEl) phoneValEl.textContent = p.phone;

  const locValEl = document.getElementById("contact-location-val");
  if (locValEl) locValEl.textContent = p.location;

  // Copy Buttons
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const text = targetEl.textContent;
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied to clipboard: "${text}"`, "success");
        }).catch(() => {
          showToast("Failed to copy text", "info");
        });
      }
    });
  });

  // Contact Form Submission (Mailto fallback / Developer integration friendly)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name")?.value.trim();
      const email = document.getElementById("form-email")?.value.trim();
      const subject = document.getElementById("form-subject")?.value.trim() || `Portfolio Inquiry from ${name}`;
      const message = document.getElementById("form-message")?.value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields", "info");
        return;
      }

      // Check if user has real email configured
      const recipientEmail = p.email.includes("@") ? p.email : "vedantpandey885@gmail.com";
      
      // Construct mailto link
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      showToast("Opening default email client to send message...", "success");
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      // Reset form
      contactForm.reset();
    });
  }

  // Footer year & name
  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = p.name;
}

/* --------------------------------------------------------------------------
   NAVBAR & SCROLL SPY
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("main-navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll appearance
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    // Scroll spy active links
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    mobileNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Hamburger toggle
  function toggleMobileMenu() {
    hamburger?.classList.toggle("active");
    mobileDrawer?.classList.toggle("open");
    backdrop?.classList.toggle("open");
    document.body.style.overflow = mobileDrawer?.classList.contains("open") ? "hidden" : "";
  }

  hamburger?.addEventListener("click", toggleMobileMenu);
  backdrop?.addEventListener("click", toggleMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
    });
  });
}

/* --------------------------------------------------------------------------
   PARTICLE CANVAS BACKGROUND
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  const particleCount = Math.min(45, Math.floor(window.innerWidth / 30));

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.6 + 0.6;
      this.alpha = Math.random() * 0.5 + 0.1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight
        ? `rgba(59, 130, 246, ${this.alpha * 0.6})`
        : `rgba(6, 182, 212, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const lineColor = isLight ? "rgba(59, 130, 246, 0.04)" : "rgba(6, 182, 212, 0.05)";

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Mouse Glow Follower
  const cursorGlow = document.getElementById("cursor-glow");
  if (cursorGlow) {
    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL (Lightweight fallback & AOS integration)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50
    });
  }
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION HELPER
   -------------------------------------------------------------------------- */
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  const iconClass = type === "success" ? "fa-circle-check" : "fa-circle-info";
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
