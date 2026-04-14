const skillsNavEl = document.querySelector('.about-nav-link-skills');
const educationNavEl = document.querySelector('.about-nav-link-education');
const skillsListEl = document.querySelector('.about-nav-skills');
const educationListEl = document.querySelector('.about-nav-education');
const skillsMoreBtnEl = document.querySelector('.about-skills-more');

if (skillsNavEl && educationNavEl && skillsListEl && educationListEl) {
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

    skillsListEl.classList.remove('about-nav-skills--expanded');
    educationListEl.classList.add('open');
    skillsListEl.classList.remove('open');
  });

  if (skillsMoreBtnEl) {
    skillsMoreBtnEl.addEventListener('click', () => {
      skillsListEl.classList.add('about-nav-skills--expanded');
    });
  }
}

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

if (btnNavEl && headerEl) {
  btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });
}

// Toggle close when click link on mobile navigation
// Apply smooth scrolling to all browsers, especially Safari
const allLinks = document.querySelectorAll('a[href]');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (!href) return;

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
      sectionEl?.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl?.classList.remove('nav-open');
    }
  });
});

///////////////////////////////////////////////////////////
// Email with prefilled content
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value ?? '';
    const email = document.getElementById('email')?.value ?? '';
    const message = document.getElementById('message')?.value ?? '';

    const subject = 'Portfolio Website Contact Form Submission';
    const body =
      'Name: ' +
      name +
      '\n\n' +
      'Email: ' +
      email +
      '\n\n' +
      'Message: ' +
      message;
    const mailtoLink =
      'mailto:lowjiewei@gmail.com' +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);

    // open default email client with pre-filled email
    window.location.href = mailtoLink;
  });
}

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();
