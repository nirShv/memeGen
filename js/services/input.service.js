'use strict'

function onImgInput(ev) {
    loadImageFromInput(ev, _renderImg)
}

function _renderImg(img) {
    document.querySelector('.gallery').hidden = true
    // editorInit(/*img.dataset.place*/)
    document.querySelector('.editor').hidden = false
    document.querySelector('.editor').classList.add('shown')
    gMeme.editMode = false
    memeForRender = getMeme()
    log('memeForRender', memeForRender)
    renderImg(img, memeForRender)
    // gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''

    var reader = new FileReader()

    reader.onload = (event) => {
        var img = new Image()
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
    }
    reader.readAsDataURL(ev.target.files[0])
}