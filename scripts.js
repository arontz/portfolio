document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0; // Track the current active section
  
    // Add 'active' class to the first section initially
    sections[currentSectionIndex].classList.add('active');
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newIndex = Array.from(sections).indexOf(entry.target);
          if (newIndex !== currentSectionIndex) {
            fadeSections(currentSectionIndex, newIndex);
            currentSectionIndex = newIndex;
          }
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    function fadeSections(currentIndex, newIndex) {
      sections[currentIndex].classList.remove('active');
      sections[newIndex].classList.add('active');
    }
  
    // Initially fade in the first section
    // sections[currentSectionIndex].style.opacity = 1;
  });
  