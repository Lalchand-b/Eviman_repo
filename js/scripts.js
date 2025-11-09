/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let lastScrollTop = 0;
  const sticker = document.getElementById('internshipSticker');
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down - slide sticker up and hide
      sticker.classList.add('small');
    } else {
      // Scrolling up - show sticker near center again
      sticker.classList.remove('small');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  
  function redirectToInternship() {
    window.location.href = 'notice.html#notices'; // Update this link accordingly
  }

let slideIndex = 0;
    let timer;

    function showSlide(n) {
      const slides = document.getElementsByClassName("slides");
      const dots = document.getElementsByClassName("dot");

      if (n >= slides.length) {
        slideIndex = 0;
      }
      if (n < 0) {
        slideIndex = slides.length - 1;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.position = "absolute";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex].style.display = "block";
      slides[slideIndex].style.position = "relative";
      dots[slideIndex].className += " active";
    }

    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }

    function changeSlide(n) {
      clearInterval(timer);
      slideIndex += n;
      showSlide(slideIndex);
      timer = setInterval(nextSlide, 4000);
    }

    function currentSlide(n) {
      clearInterval(timer);
      slideIndex = n - 1;
      showSlide(slideIndex);
      timer = setInterval(nextSlide, 4000);
    }

    function startSlider() {
      showSlide(slideIndex);
      timer = setInterval(nextSlide, 4000);
    }

    document.addEventListener('DOMContentLoaded', startSlider);
