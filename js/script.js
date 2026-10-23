// About section tabs
const skillsTab = document.querySelector('.about-nav-link-skills');
const educationTab = document.querySelector('.about-nav-link-education');
const skillsPanel = document.querySelector('.about-nav-skills');
const educationPanel = document.querySelector('.about-nav-education');

if (skillsTab && educationTab && skillsPanel && educationPanel) {
  skillsTab.addEventListener('click', () => {
    skillsTab.classList.add('active');
    educationTab.classList.remove('active');
    skillsPanel.classList.add('open');
    educationPanel.classList.remove('open');
    skillsTab.setAttribute('aria-expanded', 'true');
    educationTab.setAttribute('aria-expanded', 'false');
  });

  educationTab.addEventListener('click', () => {
    educationTab.classList.add('active');
    skillsTab.classList.remove('active');

    educationPanel.classList.add('open');
    skillsPanel.classList.remove('open');
    educationTab.setAttribute('aria-expanded', 'true');
    skillsTab.setAttribute('aria-expanded', 'false');
  });
}

// Header and mobile navigation
const mobileNavButton = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

if (mobileNavButton && header) {
  mobileNavButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    mobileNavButton.setAttribute('aria-expanded', String(isOpen));
  });
}

if (header) {
  const homeSection = document.querySelector('.section-home');

  const syncHeaderScrollState = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 12);
    header.classList.toggle(
      'header--past-home',
      Boolean(homeSection && homeSection.getBoundingClientRect().bottom <= 0),
    );
  };

  syncHeaderScrollState();
  window.addEventListener('scroll', syncHeaderScrollState, { passive: true });
  window.addEventListener('resize', syncHeaderScrollState);
}

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// Hero avatar expressions
const heroAvatar = document.querySelector('[data-avatar]');
const avatarButton = document.querySelector('[data-avatar-button]');
const avatarSpeech = document.querySelector('[data-avatar-speech]');

if (heroAvatar && avatarButton && avatarSpeech) {
  const avatarFrames = {
    neutral: 'img/world/avatar.png',
    blink: 'img/world/avatar-blink.png',
    smile: 'img/world/avatar-smile.png',
  };
  const avatarMessages = {
    neutral: "Hi there, I'm Leon!",
    blink: 'Dreaming up my next adventure…',
    smile: "I'm a software engineer!",
  };
  let expressionTimer;
  let resetTimer;
  let isHovered = false;
  let isClickBlinking = false;
  let isPointerHeld = false;

  Object.values(avatarFrames).slice(1).forEach((source) => {
    const image = new Image();
    image.src = source;
  });

  const showExpression = (expression) => {
    heroAvatar.src = avatarFrames[expression];
    avatarSpeech.textContent = avatarMessages[expression];
  };

  const beginBlink = () => {
    window.clearTimeout(expressionTimer);
    window.clearTimeout(resetTimer);
    isClickBlinking = true;
    showExpression('blink');
  };

  const finishBlink = () => {
    resetTimer = window.setTimeout(() => {
      isClickBlinking = false;
      showExpression(isHovered ? 'smile' : 'neutral');
      scheduleIdleBlink();
    }, 180);
  };

  const idleBlinkFrames = ['blink', 'neutral', 'blink', 'neutral'];
  const idleBlinkDelays = [140, 110, 140];

  const playIdleBlink = (frameIndex = 0) => {
    // Natural blinks change only the sprite, leaving the greeting in place.
    heroAvatar.src = avatarFrames[idleBlinkFrames[frameIndex]];
    if (frameIndex === idleBlinkFrames.length - 1) {
      scheduleIdleBlink();
      return;
    }

    resetTimer = window.setTimeout(() => {
      playIdleBlink(frameIndex + 1);
    }, idleBlinkDelays[frameIndex]);
  };

  const scheduleIdleBlink = () => {
    if (document.hidden || reducedMotionQuery.matches || isHovered || isClickBlinking) return;

    expressionTimer = window.setTimeout(playIdleBlink, 2500 + Math.random() * 1500);
  };

  const restartExpressions = () => {
    window.clearTimeout(expressionTimer);
    window.clearTimeout(resetTimer);
    isClickBlinking = false;
    isPointerHeld = false;
    showExpression(isHovered && !document.hidden ? 'smile' : 'neutral');
    scheduleIdleBlink();
  };

  avatarButton.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    isHovered = true;
    window.clearTimeout(expressionTimer);
    if (!isClickBlinking) window.clearTimeout(resetTimer);
    if (!isClickBlinking) showExpression('smile');
  });

  avatarButton.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'touch') return;
    isHovered = false;
    if (!isClickBlinking) {
      showExpression('neutral');
      scheduleIdleBlink();
    }
  });

  avatarButton.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    isPointerHeld = true;
    avatarButton.setPointerCapture(event.pointerId);
    beginBlink();
  });

  const releasePointer = () => {
    if (!isPointerHeld) return;
    isPointerHeld = false;
    finishBlink();
  };

  avatarButton.addEventListener('pointerup', releasePointer);
  avatarButton.addEventListener('pointercancel', releasePointer);

  avatarButton.addEventListener('click', (event) => {
    if (event.detail !== 0) return;
    beginBlink();
    finishBlink();
  });

  document.addEventListener('visibilitychange', restartExpressions);
  reducedMotionQuery.addEventListener?.('change', restartExpressions);
  scheduleIdleBlink();
}

// In-page navigation
const links = document.querySelectorAll('a[href]');
const desktopLayoutQuery = window.matchMedia('(min-width: 56.3125em)');
const sectionsAlignedToTopOnDesktop = [
  '#about',
  '#experience',
  '#projects',
  '#certifications',
  '#contact',
];

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    const scrollBehavior = reducedMotionQuery.matches ? 'auto' : 'smooth';

    if (!href) return;

    if (href === '#') {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: scrollBehavior,
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      event.preventDefault();
      const targetSection = document.querySelector(href);

      if (!targetSection) return;

      const alignToTop =
        desktopLayoutQuery.matches && sectionsAlignedToTopOnDesktop.includes(href);

      if (alignToTop) {
        const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop,
          behavior: scrollBehavior,
        });
      } else {
        targetSection.scrollIntoView({ behavior: scrollBehavior });
      }
    }

    if (link.classList.contains('main-nav-link')) {
      header?.classList.remove('nav-open');
      mobileNavButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Selected project carousel
const projectsCarousel = document.querySelector('.projects-carousel');

if (projectsCarousel) {
  const projectStage = projectsCarousel.querySelector('.projects-carousel__stage');
  const projectCards = [...projectsCarousel.querySelectorAll('.projects-carousel__stage > .project')];
  const projectStatus = projectsCarousel.querySelector('[data-project-status]');
  const projectPagination = projectsCarousel.querySelector('[data-project-pagination]');
  const mobileCarouselQuery = window.matchMedia('(max-width: 50em)');
  let activeProjectIndex = 1;

  if (projectCards.length >= 3) {
    let projectPills = [];

    const showProject = () => {
      const previousIndex = (activeProjectIndex - 1 + projectCards.length) % projectCards.length;
      const nextIndex = (activeProjectIndex + 1) % projectCards.length;

      projectCards.forEach((card, index) => {
        let position = 'hidden';
        if (index === activeProjectIndex) position = 'active';
        else if (index === previousIndex) position = 'previous';
        else if (index === nextIndex) position = 'next';
        card.dataset.position = position;
        card.inert = position === 'hidden';
        card.setAttribute('aria-hidden', String(position !== 'active'));
        card.querySelectorAll('a').forEach((link) => {
          if (position === 'active') link.removeAttribute('tabindex');
          else link.tabIndex = -1;
        });
      });

      if (projectStatus) {
        const title = projectCards[activeProjectIndex].querySelector('.project-title')?.textContent.trim();
        projectStatus.textContent = `Project ${activeProjectIndex + 1} of ${projectCards.length}: ${title}`;
      }

      projectPills.forEach((pill, index) => {
        if (index === activeProjectIndex) pill.setAttribute('aria-current', 'true');
        else pill.removeAttribute('aria-current');
      });
    };

    if (projectPagination) {
      projectPills = projectCards.map((card, index) => {
        const pill = document.createElement('button');
        const title = card.querySelector('.project-title')?.textContent.trim();
        pill.type = 'button';
        pill.className = 'projects-carousel__pill';
        pill.setAttribute('aria-label', `Show project ${index + 1}: ${title}`);
        pill.addEventListener('click', () => {
          activeProjectIndex = index;
          showProject();
        });
        return pill;
      });
      projectPagination.prepend(...projectPills);
    }

    showProject();
    projectsCarousel.classList.add('is-ready');

    projectsCarousel.querySelectorAll('[data-project-direction]').forEach((button) => {
      button.addEventListener('click', () => {
        const step = button.dataset.projectDirection === 'next' ? 1 : -1;
        activeProjectIndex = (activeProjectIndex + step + projectCards.length) % projectCards.length;
        showProject();
      });
    });

    let touchStart = null;
    let suppressClickUntil = 0;

    projectStage.addEventListener('touchstart', (event) => {
      if (!mobileCarouselQuery.matches || event.touches.length !== 1) return;
      const touch = event.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
    }, { passive: true });

    projectStage.addEventListener('touchend', (event) => {
      if (!touchStart || !mobileCarouselQuery.matches) return;
      const touch = event.changedTouches[0];
      const distanceX = touch.clientX - touchStart.x;
      const distanceY = touch.clientY - touchStart.y;
      touchStart = null;

      if (Math.abs(distanceX) < 45 || Math.abs(distanceX) <= Math.abs(distanceY) * 1.2) return;

      activeProjectIndex = (activeProjectIndex + (distanceX < 0 ? 1 : -1) + projectCards.length) % projectCards.length;
      suppressClickUntil = Date.now() + 400;
      showProject();
    }, { passive: true });

    projectStage.addEventListener('touchcancel', () => {
      touchStart = null;
    }, { passive: true });

    projectStage.addEventListener('click', (event) => {
      if (Date.now() >= suppressClickUntil) return;
      event.preventDefault();
      event.stopPropagation();
    }, true);

    projectCards.forEach((card, index) => {
      card.addEventListener('click', (event) => {
        if (card.dataset.position === 'active') return;
        if (card.dataset.position === 'hidden') return;

        event.preventDefault();
        activeProjectIndex = index;
        showProject();
      });
    });
  }
}

// Contact form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value ?? '';
    const email = document.getElementById('email')?.value ?? '';
    const message = document.getElementById('message')?.value ?? '';

    const subject = 'Portfolio Website Contact Form Submission';
    const emailBody =
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
      encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
  });
}

// Add a fallback class for older browsers without flexbox gap support.
function applyFlexGapFallback() {
  const testContainer = document.createElement('div');
  testContainer.style.display = 'flex';
  testContainer.style.flexDirection = 'column';
  testContainer.style.rowGap = '1px';

  testContainer.appendChild(document.createElement('div'));
  testContainer.appendChild(document.createElement('div'));

  document.body.appendChild(testContainer);
  const hasFlexGap = testContainer.scrollHeight === 1;
  testContainer.parentNode.removeChild(testContainer);

  if (!hasFlexGap) document.body.classList.add('no-flexbox-gap');
}

applyFlexGapFallback();
