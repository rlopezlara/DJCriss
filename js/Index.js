
document.querySelectorAll('.music-player').forEach((player) => {
    let song = player.querySelector('.song');
    let progress = player.querySelector('.progress');
    let ctrIcon = player.querySelector('.play-pause i');
    let timeDisplay = player.querySelector('.time-display');
  
    song.onloadedmetadata = function(){
      progress.max = song.duration;
      progress.value = song.currentTime;
      updateTimeDisplay();
    }
  
    function PlayPause(){
      if(ctrIcon.classList.contains("fa-pause")){
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
      }else{
        song.play();
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play");
      }
    }
  
    player.querySelector('.play-pause').addEventListener('click', PlayPause);
  
    if(song.play()){
      setInterval(()=>{
        progress.value = song.currentTime;
        updateTimeDisplay();
      }, 500);
    }
  
    progress.onchange = function(){
      song.play();
      song.currentTime = progress.value;
      ctrIcon.classList.remove("fa-pause");
      ctrIcon.classList.add("fa-play");
    }
  
    function updateTimeDisplay(){
      let minutes = Math.floor(song.currentTime / 60);
      let seconds = Math.floor(song.currentTime % 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      timeDisplay.textContent = `${minutes}:${seconds}`;
    }
  });

// Like setting
document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach((likeButton) => {
        const likeIcon = likeButton.querySelector('i');
        
        likeButton.addEventListener('click', function () {
            // Toggle between regular and solid heart
            if (likeIcon.classList.contains('fa-regular')) {
                likeIcon.classList.remove('fa-regular');
                likeIcon.classList.add('fa-solid');
            } else {
                likeIcon.classList.remove('fa-solid');
                likeIcon.classList.add('fa-regular');
            }
        });
    });
});
// Downdload Notification
document.addEventListener('DOMContentLoaded', function () {
    const toastTriggers = document.querySelectorAll('.liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
  
    toastTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      });
    });
  });