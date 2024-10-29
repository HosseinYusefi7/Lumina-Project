document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add('transparent');
    } else {
      header.classList.remove('transparent');
    }
    if (window.scrollY > 150) {
      header.style.opacity = 0;
    } else {
      header.style.opacity = 1;
    }
  }

  document.addEventListener('scroll', handleScroll);
});
