/* ====================================
   Excellence Code - Static Export
   JavaScript
   ==================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // -------- Mobile Menu Toggle --------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = !mobileNav.classList.contains('hidden');
      
      if (isOpen) {
        mobileNav.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      } else {
        mobileNav.classList.remove('hidden');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      });
    });
  }
  
  // -------- Accordion --------
  const accordionItems = document.querySelectorAll('[data-accordion]');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    
    if (trigger) {
      trigger.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        
        // Close all accordions
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          if (otherTrigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Open clicked accordion if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
  
  // -------- Smooth Scroll for Anchor Links --------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // -------- Header Background on Scroll --------
  const header = document.getElementById('header');
  
  if (header) {
    function updateHeaderBackground() {
      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
      }
    }
    
    window.addEventListener('scroll', updateHeaderBackground);
    updateHeaderBackground();
  }
  
  // -------- Contact Form Handling --------
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Simple validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // -------- Intersection Observer for Animations --------
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.stat-card, .feature-card, .accordion-item, .step-card, .step-card-mobile');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  };
  
  animateOnScroll();
  
  // -------- Update Copyright Year --------
  const copyrightYear = document.querySelector('.footer-bottom p');
  if (copyrightYear) {
    const year = new Date().getFullYear();
    copyrightYear.textContent = copyrightYear.textContent.replace('2024', year);
  }
  
});