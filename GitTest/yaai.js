document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('AudioPlayer').play();
    document.removeEventListener('click', musicPlay);
}

