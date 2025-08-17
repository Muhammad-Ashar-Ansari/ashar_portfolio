// type js with animation
var typed = new Typed("#element", {
  strings: ["Web Developer.", "WordPress Expert.", "Full Stack Developer."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
});

const skillBars = document.querySelectorAll('.skill-bar');

function animateSkills() {
  const section = document.querySelector("#skills"); // ID of your skills section
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight - 50 && !section.classList.contains("animated")) {
    section.classList.add("animated");

    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const fill = bar.querySelector('.fill');
        const percentText = bar.parentElement.querySelector('.percent');
        const target = parseInt(bar.dataset.width);

        // Animate bar fill
        fill.style.width = target + "%";

        // Animate percentage count
        let count = 0;
        const interval = setInterval(() => {
          if (count < target) {
            count++;
            percentText.textContent = count + "%";
          } else {
            clearInterval(interval);
          }
        }, 15);
      }, index * 500); // 500ms delay between each skill
    });
  }
}

window.addEventListener('scroll', animateSkills);


const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});



// Show Back-to-Top Button on Scroll
const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });


window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});