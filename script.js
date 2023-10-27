document.getElementById('showScaryImage').addEventListener('click', function () {
    var scaryImageContainer = document.getElementById('scaryImageContainer');
    var scarySound = document.getElementById('scarySound');
    if (scaryImageContainer.classList.contains('hidden')) {
        scaryImageContainer.classList.remove('hidden');
        scarySound.play();
    } else {
        scaryImageContainer.classList.add('hidden');
        scarySound.pause();
    }
});
