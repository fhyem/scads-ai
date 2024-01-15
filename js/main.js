let myCarousel = document.querySelector("#carouselExampleIndicators");
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: false,
  // wrap: false,
});

  // Add the 'navbar-scrolled' class to the navbar when scrolling
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('home_navbar');
    if (window.scrollY > 120) {
      navbar.classList.add('add_shadow');
    } else {
      navbar.classList.remove('add_shadow');
    }
  });