if ( $('.hero-slide').length > 0 ) {
      $('.hero-slide').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        smartSpeed: 1000
      });
    }