const images = document.querySelectorAll('#content img');

for (const img of images) {
    img.addEventListener('click', (e) => {
        const pictureControl = document.querySelector('#picture-control img');
        pictureControl.src = e.target.src;
        pictureControl.alt = e.target.alt;
        e.target.setAttribute('currentSelected', true);

        checkNextAndPreviousButtons(e.target);

        const galleryPicker = document.getElementById('gallery-picker');
        galleryPicker.style.display = "block";
    });
}

document.getElementById('gallery-picker').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.querySelector('#gallery img[currentSelected="true"]').removeAttribute('currentSelected');
        e.target.style.display = "none";
    }
});

document.getElementById('close-gallery-picker').addEventListener('click', (e) => {
    document.querySelector('#gallery img[currentSelected="true"]').removeAttribute('currentSelected');
    document.getElementById('gallery-picker').style.display = "none";
});

document.getElementById('move-to-left-picture').addEventListener('click', (e) => {
    const selectedPicture = document.querySelector('#gallery img[currentSelected="true"]');
    selectedPicture.removeAttribute('currentSelected');

    const previousImg = selectedPicture
        .parentElement
        .previousElementSibling
        .getElementsByTagName("img")[0];

    checkNextAndPreviousButtons(previousImg);

    const pictureControl = document.querySelector('#picture-control img');
    pictureControl.src = previousImg.src;
    pictureControl.alt = previousImg.alt;
    previousImg.setAttribute('currentSelected', true);
});

document.getElementById('move-to-right-picture').addEventListener('click', (e) => {
    const selectedPicture = document.querySelector('#gallery img[currentSelected="true"]');
    selectedPicture.removeAttribute('currentSelected');

    const nextImg = selectedPicture
        .parentElement
        .nextElementSibling
        .getElementsByTagName("img")[0];

    checkNextAndPreviousButtons(nextImg);

    const pictureControl = document.querySelector('#picture-control img');
    pictureControl.src = nextImg.src;
    pictureControl.alt = nextImg.alt;
    nextImg.setAttribute('currentSelected', true);
});

function checkNextAndPreviousButtons(element) {
    if (!element.parentElement.previousElementSibling) {
        document.getElementById('move-to-left-picture').style.display = "none";
    } else {
        document.getElementById('move-to-left-picture').style.display = "block";
    }

    if (!element.parentElement.nextElementSibling) {
        document.getElementById('move-to-right-picture').style.display = "none";
    } else {
        document.getElementById('move-to-right-picture').style.display = "block";
    }
}