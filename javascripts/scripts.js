$(function(){
  $('.flip').mouseenter(function(){

        if ( $('.flipped').length > 0 )
          $('.flipped').removeClass('flipped');
        else
          $('.card').addClass('flipped')

    return false;
  });

});
