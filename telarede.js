document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profilePic');
    const music = document.getElementById('backgroundMusic');
    const mainContainer = document.getElementById('mainContainer');
    const socialIcons = document.getElementById('socialIcons');

    profilePic.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            mainContainer.classList.add('hacker-mode');
            socialIcons.classList.add('hacker-mode');
        } else {
            music.pause();
            mainContainer.classList.remove('hacker-mode');
            socialIcons.classList.remove('hacker-mode');
        }
    });
});