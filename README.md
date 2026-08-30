# Vedant Pandey - Personal Developer Portfolio 🚀

A modern, fast, and interactive personal portfolio website designed for **Vedant Pandey**, Computer Science and Engineering student at Lovely Professional University. Built with pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

---

## 🌟 Highlights & Features

- ⚡ **Pure Vanilla Stack**: 100% HTML5, CSS3, and JavaScript — no heavyweight frameworks or complex build steps required.
- 🎨 **Modern Dark / Light Theme**: Premium dark theme with glassmorphism, glowing gradient accents, and persistent `localStorage` theme preference toggle.
- 📱 **Fully Responsive**: Optimized for all devices — ultra-wide desktops, laptops, tablets, and smartphones.
- 🎯 **Centralized Configuration System**: Edit your personal information, links, skills, projects, certifications, and achievements from one single JavaScript data object located at the top of `js/script.js`.
- ⌨️ **Dynamic Typing Animation**: Interactive hero typing effect highlighting your core specialties.
- 🔍 **Interactive Filters**: Dynamic category filtering for skills and projects with animated transitions.
- 🖼️ **Project Detail Modal**: Pop-up modal providing in-depth problem descriptions, circuit/system breakdown, tech badges, and direct links.
- 📬 **Interactive Contact System**: Pre-configured with copy-to-clipboard buttons and an email client integration.
- 🌌 **Ambient Canvas Visuals**: Subtle particle network background and glowing cursor follower.

---

## 📁 Project Structure

```text
portfolio/
│
├── index.html              # Main HTML entry point with semantic structure & SEO tags
├── metadata.json           # Application metadata & permissions
│
├── css/
│   └── style.css           # Complete responsive stylesheet (CSS variables, animations, glassmorphism)
│
├── js/
│   └── script.js           # Centralized configuration data + dynamic rendering engine
│
├── assets/                 # Your media assets
│   ├── README.txt          # Guide for adding your photos and PDF resume
│   ├── profile.jpg         # [Replace with your photo]
│   ├── resume.pdf          # [Replace with your resume]
│   └── projects/           # Folder for project screenshots & schematics
│
└── README.md               # Documentation & customization guide
```

---

## 🛠️ How to Customize Your Portfolio

All your data is centrally managed at the very top of `js/script.js` in the `portfolioData` object. You do **not** need to manually search and edit complex HTML tags!

### 1. How to Change Your Name, Bio & Location
Open `js/script.js` and locate the `personal` object:
```javascript
personal: {
  name: "Vedant Pandey",
  role: "Computer Science Engineering Student",
  typingRoles: [
    "Computer Science Engineering Student",
    "Web Developer",
    "Software Developer",
    "Python Developer",
    "Tech Enthusiast"
  ],
  email: "your_real_email@gmail.com",
  phone: "+91 9876543210",
  location: "Lovely Professional University, Punjab, India",
  ...
}
```

### 2. How to Add Your Profile Photo
1. Copy your photo to the `assets/` folder.
2. Name it `profile.jpg` (or update `profileImage: "assets/your-photo.png"` in `js/script.js`).
3. The website will automatically detect and display it. If no image exists, a developer avatar is shown.

### 3. How to Update Social & GitHub Links
In `js/script.js`, replace the placeholders:
```javascript
github: "https://github.com/your-username",
linkedin: "https://linkedin.com/in/your-username",
```

### 4. How to Add or Edit Projects
In `js/script.js`, locate the `projects` array. You can edit existing projects or add new ones:
```javascript
projects: [
  {
    id: "project-unique-id",
    title: "Project Name",
    category: "web", // Options: "web", "electronics", "programming", "other"
    categoryLabel: "Web Development",
    image: "assets/projects/my-screenshot.jpg",
    description: "Brief summary of what the project does.",
    problemSolved: "The specific problem this project addresses.",
    technologies: ["Python", "Flask", "PostgreSQL"],
    github: "https://github.com/your-username/my-project",
    liveDemo: "https://myproject-demo.com",
    featured: true,
    longDetails: "Extended technical explanation shown in the project detail popup modal."
  }
]
```

### 5. How to Change or Add Skills
In `js/script.js`, edit the `skills` array:
```javascript
skills: [
  { 
    name: "Python", 
    category: "programming", // "programming", "web", "database", "tools", "cybersecurity"
    level: 85,               // Percentage (0 to 100)
    levelLabel: "Proficient", // e.g. "Beginner", "Intermediate", "Proficient", "Advanced"
    icon: "fa-brands fa-python" 
  }
]
```

### 6. How to Add or Edit Certifications
In `js/script.js`, update the `certifications` array:
```javascript
certifications: [
  {
    title: "Introduction to AI",
    issuer: "Coursera / DeepLearning.AI",
    date: "July 2025",
    link: "https://credential-verification-link.com",
    icon: "fa-solid fa-brain",
    badge: "Artificial Intelligence",
    description: "Foundations of intelligent agents and search algorithms."
  }
]
```

### 7. How to Replace the Resume File
1. Save your resume as `resume.pdf`.
2. Move it inside the `assets/` folder: `assets/resume.pdf`.
3. The "Download Resume" buttons on the navigation bar and hero section will immediately download your file.

### 8. How to Customize Theme Colors
Open `css/style.css` and modify the CSS variables in the `:root` block:
```css
:root {
  --accent-cyan: #06b6d4;  /* Primary cyan highlight */
  --accent-blue: #3b82f6;  /* Secondary blue highlight */
  --accent-purple: #a855f7;/* Purple glow */
}
```

---

## 💻 How to Run Locally in VS Code

1. **Option A (Live Server)**:
   - Open the portfolio folder in **VS Code**.
   - Install the **Live Server** extension (by Ritwick Dey).
   - Right-click `index.html` and click **"Open with Live Server"**.

2. **Option B (Direct Browser)**:
   - Double-click `index.html` directly in your file explorer to open it in Chrome, Edge, Safari, or Firefox.

---

## 🚀 How to Deploy Your Portfolio Online (Free)

### 1. Deploy to GitHub Pages (Recommended)
1. Initialize Git in the project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub named `portfolio` (or `yourusername.github.io`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/your-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Settings** > **Pages** on your GitHub repository.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Your portfolio will be live at `https://your-username.github.io/portfolio/`!

### 2. Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign in.
2. Drag and drop the portfolio folder directly into the Netlify dashboard.
3. Your website will be live in seconds with a custom `.netlify.app` URL and free SSL!

### 3. Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder and follow the prompts.

---

## 📬 Connecting the Contact Form to Email Services

The contact form currently launches the user's default email client pre-filled with the message details. If you want messages sent directly to your inbox without opening an email client:

### Using Formspree (Free & Simple)
1. Register for free at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Formspree endpoint (e.g. `https://formspree.io/f/xbjwpnxy`).
3. In `index.html`, update the `<form>` tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. In `js/script.js`, you can remove `e.preventDefault()` from the form listener or let Formspree handle it via AJAX.

---

## 👨‍💻 Author

**Vedant Pandey**
- Computer Science and Engineering Student
- Lovely Professional University
- Specializing in Software Development, Web Technologies, Python, C/C++, and Cybersecurity.
