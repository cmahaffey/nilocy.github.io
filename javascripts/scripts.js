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
   $('th').click(cardFlip);
   $('.sociallink .has-description').click(function(e){
     e.preventDefault();
   });
  }

  $('.radicalize').hover(function(){
    if( $('.soundtrak.description').css('display') == 'block' );
      $('.soundtrak.description').css('display','none');
    //check if back showing
    if( $('.flipped').length > 0 ){
      $('.radicalize.description').css('display','block');
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.mobile-link').css('display','inline-block');
        //$('.non-mobile').css('display','none');
      }else{
        //$('.mobile-link').css('display','none');
        $('.non-mobile').css('display','inline-block');
      }
    }
  });
  $('.soundtrak').hover(function(){
    if( $('.radicalize.description').css('display') == 'block' );
      $('.radicalize.description').css('display','none');
      //check if back showing
    if( $('.flipped').length > 0 ){
      $('.soundtrak.description').css('display','block');
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.mobile-link').css('display','inline-block');
        //for when you switch to testing mobile device on computer after viewing, clears the old div
        $('.non-mobile').css('display','none');
      }else{
        $('.non-mobile').css('display','inline-block');
        //for when you switch to testing mobile device on computer after viewing, clears the old div
        $('.mobile-link').css('display','none');
      }
    }
  });

});
