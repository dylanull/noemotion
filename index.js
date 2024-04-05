const playSong = document.getElementById('maintext');
const audioPlayer = document.getElementById('noemotion');
const heroColor = document.getElementById('hero');

playSong.addEventListener('mouseenter', () => {
    audioPlayer.play();
    heroColor.style.backgroundColor="rgb(57,57,57)";
});

playSong.addEventListener('mouseleave', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to start
    heroColor.style.backgroundColor="#e1e1e1";
})

