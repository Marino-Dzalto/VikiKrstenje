document.addEventListener('DOMContentLoaded', function () {
    const doorImageLEFT = document.querySelector('.doorImageLEFT');
    const doorImageRIGHT = document.querySelector('.doorImageRIGHT');
    const splash = document.querySelector('.splash');

    const START_DELAY_MS = 1000;
    const ANIM_DURATION_MS = 2000;

    setTimeout(function () {
        doorImageLEFT.classList.add("doorOpenL");
        doorImageRIGHT.classList.add("doorOpenR");

        setTimeout(function () {
            document.body.classList.add('opened');
            // opcionalno makni splash da ne postoji više u DOM-u
            splash.style.display = 'none';
        }, ANIM_DURATION_MS);

    }, START_DELAY_MS);
});