// Toggle between skills and education in about section
const skillsNavEl = document.querySelector('.about-nav-link-skills');
const educationNavEl = document.querySelector('.about-nav-link-education');
const skillsListEl = document.querySelector('.about-nav-skills');
const educationListEl = document.querySelector('.about-nav-education');

document.addEventListener('DOMContentLoaded', () => {
  skillsNavEl.classList.add('active');
  skillsListEl.classList.add('open');
});

skillsNavEl.addEventListener('click', () => {
  skillsNavEl.classList.add('active');
  educationNavEl.classList.remove('active');

  skillsListEl.classList.add('open');
  educationListEl.classList.remove('open');
});

educationNavEl.addEventListener('click', () => {
  educationNavEl.classList.add('active');
  skillsNavEl.classList.remove('active');

  educationListEl.classList.add('open');
  skillsListEl.classList.remove('open');
});

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
