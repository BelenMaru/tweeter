

 $(document).ready(function() { 
  // countCharacters();
 $('#tweet-text').on('input', function(){
  const count = $(this).val().length;
  const counter = 140 - count;
  //.text -it will show the output--(counter)
  $('output').text(counter);
  if(counter < 0){
    // $(this).siblings().children('.counter').addClass('counterErr')
    $('output').addClass('counterErr');
  } else {
    // $(this).siblings().children('.counter').removeClass('counterErr')
    $('output').removeClass('counterErr');
  }
 })
});