function HeaderScroll() {

    let header = document.getElementById('header')
    let lastScrollPosition = window.scrollY
    
    window.addEventListener('scroll', function() {
        
        let currentScrollPosition = window.scrollY
  
        if (currentScrollPosition > lastScrollPosition) {
            header.classList.add('-top-28')
            header.classList.remove('top-0')
        } else if (currentScrollPosition < lastScrollPosition) {
            header.classList.add('top-0')
            header.classList.remove('-top-28')
        }
  
        if (currentScrollPosition === 0) {
            header.classList.remove('-top-28')
        }
  
    lastScrollPosition = currentScrollPosition;
  
    })
  }
  
  document.addEventListener('DOMContentLoaded', HeaderScroll);