/**
 * UMAMA MAYA — PERSONAL PORTFOLIO JAVASCRIPT
 * Theme: Full Deep Burgundy Background with Soft Peach Typography & Gradient Palette
 * Features:
 *  - Code-Based Image Handling: Managed via HTML <img> elements pointing to images/
 *  - Floating Google Translate Language Switcher with native translation triggers
 *  - Sticky navigation with scroll detection
 *  - Active section navigation observer (IntersectionObserver)
 *  - Mobile navigation drawer with ARIA accessibility & keyboard traps
 *  - Filterable project gallery with smooth transitions
 *  - Interactive demonstration modal for local projects
 *  - One-click copy email to clipboard with animated tooltip
 *  - Production-grade contact form with validation, mailto dispatch & fallback feedback
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. STICKY HEADER & SCROLL STATE
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('siteHeader');
  
  const handleScroll = () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* ------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileClose = document.getElementById('mobileMenuClose');
  const mobileNav = document.getElementById('mobileNav');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileNav = () => {
    mobileNav.classList.add('open');
    mobileBackdrop.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNav && mobileNav.classList.contains('open')) closeMobileNav();
      closeDemoModal();
      closeTranslateMenu();
    }
  });

  /* ------------------------------------------------------------------------
     3. ACTIVE SECTION HIGHLIGHTING (IntersectionObserver)
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}` || (currentId === 'home' && href === '#top')) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ------------------------------------------------------------------------
     4. PROJECT GALLERY FILTERING
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Update active state on buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Filter project cards
      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     5. ONE-CLICK EMAIL COPY TO CLIPBOARD
     ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyTooltip = document.getElementById('copyTooltip');
  const targetEmail = 'mayaumama12@gmail.com';

  if (copyEmailBtn && copyTooltip) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(targetEmail);
        copyTooltip.textContent = 'Copied!';
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
          setTimeout(() => {
            copyTooltip.textContent = 'Copy';
          }, 200);
        }, 2200);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = targetEmail;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyTooltip.textContent = 'Copied!';
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
          setTimeout(() => {
            copyTooltip.textContent = 'Copy';
          }, 200);
        }, 2200);
      }
    });
  }

  /* ------------------------------------------------------------------------
     6. CONTACT FORM VALIDATION & SUBMISSION
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('portfolioContactForm');
  const submitBtn = document.getElementById('submitBtn');
  const feedbackBanner = document.getElementById('formFeedback');

  if (contactForm) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const clearErrors = () => {
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';
      [nameInput, emailInput, subjectInput, messageInput].forEach(inp => inp.classList.remove('error'));
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      let isValid = true;

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      // Validate Name
      if (!nameVal) {
        nameError.textContent = 'Please provide your full name.';
        nameInput.classList.add('error');
        isValid = false;
      }

      // Validate Email
      if (!emailVal) {
        emailError.textContent = 'Please provide your email address.';
        emailInput.classList.add('error');
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        emailError.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
        emailInput.classList.add('error');
        isValid = false;
      }

      // Validate Subject
      if (!subjectVal) {
        subjectError.textContent = 'Please provide a subject for your inquiry.';
        subjectInput.classList.add('error');
        isValid = false;
      }

      // Validate Message
      if (!messageVal) {
        messageError.textContent = 'Please describe your project or inquiry.';
        messageInput.classList.add('error');
        isValid = false;
      } else if (messageVal.length < 10) {
        messageError.textContent = 'Please write a message with at least 10 characters.';
        messageInput.classList.add('error');
        isValid = false;
      }

      if (!isValid) return;

      // Processing state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Construct formatted mailto URI
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectVal}`);
      const mailtoBody = encodeURIComponent(
        `Dear Umama Maya,\n\n` +
        `Name: ${nameVal}\n` +
        `Email: ${emailVal}\n` +
        `Subject: ${subjectVal}\n\n` +
        `Project Details / Message:\n${messageVal}\n\n` +
        `---\nSent via Umama Maya's Web Developer Portfolio`
      );

      const mailtoLink = `mailto:mayaumama12@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        // Display success banner
        feedbackBanner.className = 'form-feedback-banner success';
        feedbackBanner.innerHTML = `
          <strong>Message Prepared Successfully!</strong><br>
          We are launching your email client with your message addressed directly to <strong>mayaumama12@gmail.com</strong>.<br>
          <span style="font-size: 0.82rem; margin-top: 4px; display: inline-block;">
            If your mail app didn't open automatically, you can also click here: 
            <a href="${mailtoLink}" style="text-decoration: underline; font-weight: 600; color: inherit;">Open Email Directly</a>
          </span>
        `;
        feedbackBanner.style.display = 'block';

        // Trigger the mail client
        window.location.href = mailtoLink;

        // Reset form inputs
        contactForm.reset();
      }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     7. FLOATING GOOGLE TRANSLATE FUNCTIONALITY
     ------------------------------------------------------------------------ */
  const floatingTranslate = document.getElementById('floatingTranslate');
  const translateToggleBtn = document.getElementById('translateToggleBtn');
  const translateCloseBtn = document.getElementById('translateCloseBtn');
  const langButtons = document.querySelectorAll('.lang-opt');

  const toggleTranslateMenu = () => {
    if (!floatingTranslate) return;
    const isOpen = floatingTranslate.classList.toggle('open');
    if (translateToggleBtn) {
      translateToggleBtn.setAttribute('aria-expanded', String(isOpen));
    }
  };

  const closeTranslateMenu = () => {
    if (floatingTranslate && floatingTranslate.classList.contains('open')) {
      floatingTranslate.classList.remove('open');
      if (translateToggleBtn) {
        translateToggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  };

  if (translateToggleBtn) {
    translateToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTranslateMenu();
    });
  }

  if (translateCloseBtn) {
    translateCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTranslateMenu();
    });
  }

  // Close translate menu when clicking outside
  document.addEventListener('click', (e) => {
    if (floatingTranslate && !floatingTranslate.contains(e.target)) {
      closeTranslateMenu();
    }
  });

  // Switch language via Google Translate
  const switchGoogleLanguage = (langCode) => {
    // 1. Try selecting in the native Google Translate combo box if present
    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event('change'));
    } else {
      // 2. Set the official Google Translate cookie
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      // Reload page to trigger Google Translate with new cookie
      window.location.reload();
    }
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      closeTranslateMenu();
      // Trigger translation
      switchGoogleLanguage(targetLang);
    });
  });

});

/* ------------------------------------------------------------------------
   8. GLOBAL DEMONSTRATION MODAL CONTROLS
   ------------------------------------------------------------------------ */
function openDemoModal(title, description) {
  const modal = document.getElementById('demoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  if (modal && modalTitle && modalDesc) {
    modalTitle.textContent = title;
    modalDesc.innerHTML = description;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Close demo modal on click outside box
window.addEventListener('click', (e) => {
  const modal = document.getElementById('demoModal');
  if (modal && e.target === modal) {
    closeDemoModal();
  }
});
