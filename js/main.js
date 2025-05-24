// 🌙 Dark mode toggle
const darkToggle = document.getElementById('darkModeToggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// ✅ Offer Form Handler
const offerForm = document.getElementById('offerForm');
if (offerForm) {
  offerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you for offering your skill!');
    offerForm.reset();
  });
}

// ✅ Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('📨 Thanks for contacting us! We’ll reply soon.');
    contactForm.reset();
  });
}

// 🧠 Skill List (for find.html)
const skillsList = document.getElementById('skillsList');
if (skillsList) {
  const skills = [
    { title: "Graphic Design", desc: "Logos, posters, and flyers for your club or event." },
    { title: "Math Tutoring", desc: "Help with algebra, stats, and calculus homework." },
    { title: "Public Speaking", desc: "One-on-one coaching to boost your presentation confidence." },
    { title: "Coding Help", desc: "Basic web dev, JavaScript or Python debugging." },
    { title: "Essay Proofreading", desc: "Grammar and structure edits for assignments." },
  ];

  skills.forEach(skill => {
    skillsList.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${skill.title}</h5>
            <p class="card-text">${skill.desc}</p>
            <a href="chat.html" class="btn btn-sm btn-primary">Connect</a>
          </div>
        </div>
      </div>
    `;
  });
}
