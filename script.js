const sounds = ['james', 'La Casa', 'money', 'Rocky', 'Sherlock'];
let currentSound = null;

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        if (currentSound) {
            stopSound(currentSound);
        }
        currentSound = sound;
        playSound(sound);
    });

    document.getElementById('buttons').appendChild(btn);
});

function playSound(sound) {
    const audio = document.getElementById(sound);
    audio.play();
}

function stopSound(sound) {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
}
