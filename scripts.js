document.querySelectorAll('.photo-section').forEach(section => {
    section.addEventListener('click', () => {
      section.classList.toggle('expanded');
    });
  });
  