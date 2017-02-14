var cardFlip = function(){

      if ( $('.flipped').length > 0 ){
        $('.flipped').removeClass('flipped');
        $('.radicalize.description').css('display','none');
        $('.soundtrak.description').css('display','none');
      }else{
        $('.card').addClass('flipped');
      }

  return false;
}

$(function(){

  $('.flip').hover(cardFlip);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('.description').click(cardFlip);
   $('th').click(cardFlip);
  }

  $('.radicalize').hover(function(){
    if( $('.soundtrak.description').css('display') == 'block' );
      $('.soundtrak.description').css('display','none');
    //check if back showing
    if( $('.flipped').length > 0 )
      $('.radicalize.description').css('display','block');
  });
  $('.soundtrak').hover(function(){
    if( $('.radicalize.description').css('display') == 'block' );
      $('.radicalize.description').css('display','none');
      //check if back showing
    if( $('.flipped').length > 0 )
      $('.soundtrak.description').css('display','block');
  });

});
