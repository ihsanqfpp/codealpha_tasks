let audio = document.getElementById("audio");
let progress = document.getElementById("progress");
let timeDisplay = document.getElementById("time-display");
let isMuted = false;

function playAudio() { audio.play(); }
function pauseAudio() { audio.pause(); }
function stopAudio() { audio.pause(); audio.currentTime = 0; }
function seekForward() { audio.currentTime += 5; }
function seekBackward() { audio.currentTime -= 5; }
function changeVolume() { audio.volume = document.getElementById("volume").value; }
function toggleMute() { isMuted = !isMuted; audio.muted = isMuted; }

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;
    let duration = audio.duration || 0;
    progress.value = (currentTime / duration) * 100;
    let min = Math.floor(currentTime / 60);
    let sec = Math.floor(currentTime % 60);
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    timeDisplay.innerText = `${min}:${sec < 10 ? "0" : ""}${sec} / ${totalMin}:${totalSec < 10 ? "0" : ""}${totalSec}`;
});

progress.addEventListener("input", () => {
    let duration = audio.duration || 0;
    audio.currentTime = (progress.value / 100) * duration;
});