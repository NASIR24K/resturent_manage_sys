$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
  });
  $(document).ready(function() {
    $('.counter').each(function() {
      var $this = $(this);
      var target = parseInt($this.attr('data-target'));
      var count = 0;
  
      $({ count: 0 }).animate({ count: target }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
          var roundedCount = Math.ceil(this.count);
          $this.text(roundedCount);
        }
      });
    });
  });
  