// Filter Functionality
$(document).ready(function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  
    // Portfolio Lightbox
    $(document).ready(function () {
      $('.portfolio-lightbox').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
      });
    });
  
    // Portfolio Details Lightbox
    $(document).ready(function () {
      $('.portfolio-details-lightbox').magnificPopup({ type: 'iframe' });
    });
  });
  