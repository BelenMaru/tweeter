/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // const data = [
  //   {
  //     user: {
  //       name: "Newton",
  //       avatars: "https://i.imgur.com/73hZDYK.png",
  //       handle: "@SirIsaac",
  //     },
  //     content: {
  //       text: "If I have seen further it is by standing on the shoulders of giants",
  //     },
  //     created_at: 1461116232227,
  //   },
  //   {
  //     user: {
  //       name: "Descartes",
  //       avatars: "https://i.imgur.com/nlhLi3I.png",
  //       handle: "@rd",
  //     },
  //     content: {
  //       text: "Je pense , donc je suis",
  //     },
  //     created_at: 1461113959088,
  //   },
  // ];
  const renderTweets = function (tweets) {
    $('#tweets-container').html('');
    // $('#tweet-text').empty()
    $('textarea').val('');
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container 
    for (let tweet of tweets) {  
      const tweetElements =  createTweetElement(tweet)
      //  $("#tweets-container").append(tweetElements);
      $("#tweets-container").prepend(tweetElements);
    }
  };
  function createTweetElement(obj) {
    const $tweet = `
      <article class="tweet-container">
        <header class="tweet-header">  
          <div class="identity"> 
            <div class="identity-img"> 
              <img src="${obj.user.avatars}">
            </div>
            <h5>${obj.user.name}</h5>
          </div>   
          <h5 class="tweet-id">${obj.user.handle}</h5>
        </header>
        <p>${obj.content.text}</p>
        <footer>
          <span>${timeago.format(obj.created_at)}</span>
          <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
        
          </div>
        </footer>
      </article>
    `;
    return $tweet;
  }
 
  // renderTweets(data);

  $('form').submit(function(event) {
    event.preventDefault();
    // if ($('textare#tweet-text').val());
    const tweetText = $('textarea#tweet-text').val();
    // console.log(tweetText);
    //  console.log(tweetText);

    const $errorDiv = $('#error')
    

      if (tweetText.length === 0) {
      // alert('Tweet should be between 1 and 140');
      $errorDiv.text('Tweet should be between 1 and 140 !');
      return;
    }

    if (tweetText.length > 140)  {
      // alert('Tweet should not be more than 140 ' );
      $errorDiv.text('Tweet should not be more than 140 !')
      return;
    }
    
    $.ajax({
      url: '/tweets', // Api url
       method: 'POST',
       data: $(this).serialize() // this ==> form; and serialized fn turn the form data into queryString.
       //Jquery- need data to serialize
     })
     .then(function(response) {
      
       loadTweets();
      // console.log("response from line 95----", response);
    }).catch(function(err) {
      console.log(err)
    });   
  })
    //fetch tweets from server
    const loadTweets = function() {
      $.ajax({
        url: "/tweets",
        method: "GET",
        dataType: "json"
      })
        .then(function(tweets) {
          // console.log("tweets -------",tweets);
          renderTweets(tweets);
        }).catch(function(err) {
          console.log(err)
        });       
    } 
   loadTweets();
    });
