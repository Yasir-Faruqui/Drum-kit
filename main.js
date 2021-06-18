'use strict'


window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  console.log(audio);
  if (!audio) return; //This is going to stop the function from running all together
  audio.currentTime = 0; //This will rewind the audio to start so you can spam one key endless time
  audio.play(); //This will play the audio when you press the keys
  key.classList.add('playing'); //Created a claa
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //This will skip if its not transform
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
