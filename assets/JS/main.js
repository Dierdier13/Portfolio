const banner = document.querySelector('#banner');
const logo = document.querySelector('#logo');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    
    // Défilement vers le bas
    banner.style.height = '100px';
    logo.style.maxWidth = '150px';
    logo.style.position = 'absolute';
    logo.style.left = '50%';
    logo.style.top = '50%';
    logo.style.transform = 'translateY(-50%)';
  } else {
    // Défilement vers le haut
    banner.style.height = '100vh';
    logo.style.maxWidth = '80%';
    logo.style.position = 'static';
    logo.style.transform = 'none';
  }
  
  lastScrollTop = scrollTop;
});



// banner.style.height = '125px';
// logo.style.maxWidth = '150px';
// logo.style.position = 'absolute';
//  logo.style.left = '20px';
// logo.style.top = '50%';
// logo.style.transform = 'translateY(-50%)';