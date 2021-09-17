

 $(document).ready(function() { 
  // countCharacters();
 $('#tweet-text').on('input', function(){
  const count = $(this).val().length;
  const counter = 140 - count;
  //.text -it will show the output--(counter)
  if(counter < 0){
    // $(this).siblings().children('.counter').addClass('counterErr')
    $('output').addClass('counterErr');
    $('output').text(` ${counter}`); // takes negative value and positiveve
  } else {
    // $(this).siblings().children('.counter').removeClass('counterErr')
    $('output').removeClass('counterErr');
     $('output').text(counter);
  }
 })
});