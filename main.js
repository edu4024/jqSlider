
  $('.slideShow-container').jqSlider('init');
  $('.next').click(function(){
    return $(this).jqSlider('nextSlide');
  });
  $('.prev').click(function(){
    return $(this).jqSlider('prevSlide');
  });
  $('.mySlides').click(event, function(){
    return $(this).jqSlider('selectSlide');
  });
