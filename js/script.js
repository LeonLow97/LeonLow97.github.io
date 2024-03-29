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

// Toggle close when click link on mobile navigation
// Apply smooth scrolling to all browsers, especially Safari
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    // scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////////////////////
// Email with prefilled content
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let subject = 'Portfolio Website Contact Form Submission';
  let body =
    'Name: ' +
    name +
    '\n\n' +
    'Email: ' +
    email +
    '\n\n' +
    'Message: ' +
    message;
  let mailtoLink =
    'mailto:lowjiewei@gmail.com' +
    '?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  // open default email client with pre-filled email
  window.location.href = mailtoLink;
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
