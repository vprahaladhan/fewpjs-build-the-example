// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
mimicServerCall()
  .then(() => {
    for(const like of document.getElementsByClassName('like-glyph')) {
      like.innerText = FULL_HEART;
      like.classList.add('activated-heart');
    }
  })
  .catch(error => {
    const errorModal = document.getElementById('modal');
    document.getElementById('modal-message').innerText = error;
    errorModal.classList.remove('hidden');
    setTimeout(() => errorModal.classList.add('hidden'), 5000);
  });

for(const like of document.getElementsByClassName('like-glyph')) {
  like.addEventListener('click', () => {
    like.innerText = EMPTY_HEART;
    like.classList.remove('activated-heart');
  });
};

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      isRandomFailure ? reject("Random server error. Try again.") : resolve("Pretend remote server notified of action!");
    }, 300);
  });
}