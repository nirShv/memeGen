'use strict'
renderGallery()
function renderGallery() {
    loadGalleryImage()
}

function loadGalleryImage() {
    const imgs = getImgs()
    imgs.forEach((memeImg, idx) => {
        var img = new Image()
        img.src = memeImg.url
        img.setAttribute(`id`, idx + 1)
        img.classList.add(`img`, `img${idx + 1}`)
        img.setAttribute(`onclick`, "onImgSelect(this)")
        document.querySelector(".grid-container").appendChild(img);
        // img.onload = onImageReady.bind(null, img, txt)
        console.log('img', img);
    })
}

function onImgSelect(img) {
    console.log('img', img.id);
    setImg(+img.id)
    document.querySelector('.gallery').hidden = true
    editorInit()
}

function BackToGallery(){
    document.querySelector('.gallery').hidden = false
}