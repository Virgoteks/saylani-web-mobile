var img_paths = [];
for (var i = 1; i < 16; i++) {
    img_paths.push(`./images/${i}.jpg`);
}


var imgContainer = document.getElementById('img-thumbnails');
for (path in img_paths) {
    imgContainer.innerHTML += `<img src='${img_paths[path]}' onclick='displayImage(this)'/>`;
}


var modal = document.getElementById('modal');
var modal_image = document.getElementById('modal-img');

function displayImage(e) {
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = 'block';
    modal_image.src = e.src;
}


function onClosedImagModal() {
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(() => {
        modal.style.display = "none";
    }, 550)
}
