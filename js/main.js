

// listen for a keypress; if we press the right key, then find the matching sudio file and play it.if tehy key doesn't show up on the keyboard, the script should't do anything


(() => {
  console.log('drumkit file loaded!');
  function removeHighlight(e){
     console.log(e);
     // if this isn't the treansform transition, then quit
     if (e.propertyName !== 'transform'){
       return;
     }else{ // it is the transform transition ! do stuff!!
       e.target.classList.remove('playing');
     }
  }
  // this shoould fire every time a key is pushed; do sth interesting inside this function
  function playSound(e) {
     // debugger
     console.log(e.keyCode);
     const audio =
     document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     key.classList.add('playing');
     // if we press a key that doesn't have a corresonding audio element,  then quit and don't do anything else.

     if (!audio) { return; }
     // rewind any audio files b4 playing it
     audio.currentTime = 0;
     audio.play();
     debugger;
   }
     // tell the browser to listien for a keypress event
   window.addEventListener('keydown', playSound);

   // loop through all the keys and take the hilight back off when the trabsition is done
   const keys = Array.from(document.querySelectorAll('key'))// select all the key divs
   keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
