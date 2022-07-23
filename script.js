    window.addEventListener('keydown', function(e){
      const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
      const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
      if (!audio){
        return 
      }
      audio.currentTime = 0 
      audio.play()
      key.classList.add('playing')
    })
    const removeTransition = function(e){
      if (e.propertyName !== 'transform') //skip if not a transform
        return
      this.classList.remove('playing')
    }
    const keys = document.querySelectorAll('.key')
    console.log(keys)
    keys.forEach(function(key){
      key.addEventListener('transitionend', removeTransition)
    })
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}