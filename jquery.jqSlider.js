(function ($){

  var slideIndex =1;
  var slides = $('.mySlides');

  var methods = {

    init: function (){
        var path =slides[0].innerHTML;
        $(".mainSlaid").prepend('<div class="child">'+ path +'</div>')
                          .removeClass('mySlides')
                          .addClass('mainSlaid');

            return methods.showSlides();
    },

    showSlides: function (n){
      var i;

        if(n!==undefined){
          slideIndex=n;
          
            if(n>slides.length){
              slideIndex=1;
            }
            if (n<1){
              slideIndex=slides.length;
            }

              for(i=0; i<slides.length; i++){
                   slides[i].style.border="4px solid rgb(166, 89, 91)";
              }

              slides[slideIndex-1].style.border="4px solid rgb(250, 120, 120)";
        }else{
          for(i=0; i<slides.length; i++){
               slides[i].style.border="4px solid rgb(166, 89, 91)";
          }

          slides[slideIndex-1].style.border="4px solid rgb(250, 120, 120)";
        }

    },

    nextSlide: function (){
      return methods.showSlides(slideIndex +=1);
    },

    prevSlide: function (){
      return methods.showSlides(slideIndex -=1);
    },

    selectSlide: function (){
      $(".child").remove();
      for(i=0; i<slides.length; i++){
           slides[i].style.border="4px solid rgb(166, 89, 91)";
      }

      $(".mainSlaid")
          .prepend('<div class="child"><img src='+ event.path[0].currentSrc +'></div>')
          .addClass('mainSlaid');

        var p =+ event.path[0].id;
            return methods.showSlides(p);
        //slides[p-1].style.border="4px solid rgb(250, 120, 120)";

    }

  }

  $.fn.jqSlider = function(method){
    if ( methods[method] ) {
       return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
     } else if ( typeof method === 'object' || ! method ) {
       return methods.init.apply( this, arguments );
     } else {
       $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
     }
  }


}) (jQuery);
