'use strict'

var gColor='red';
var gFont=40;

function editorInit() {
    document.querySelector('.editor').hidden = false
    document.querySelector('.editor').classList.add('shown')
    renderMeme()
}

function renderMeme() {
    const memeForRender = getMeme()
    const imgForRender = getImg(memeForRender.selectedImgId)
    loadImage(imgForRender, renderImg, memeForRender)
}

function loadImage(memeImg, onImageReady, memeForRender) {
    var img = new Image()
    img.src = memeImg.url
    img.onload = onImageReady.bind(null, img, memeForRender)
}

function renderImg(img, memeForRender) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(memeForRender.lines[0].txt, 200, 40)
    drawText(memeForRender.lines[1].txt, 200, 350)
    console.log('gElCanvas.width',gElCanvas.width);
    console.log('gElCanvas.height ',gElCanvas.height );
}

function drawText(txt, x, y) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.lineWidth = 1
    gCtx.font = `${gFont}px david`
    gCtx.fillStyle = gColor
    console.log(txt, x, y)
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function onTextEdit(newTxt) {
    textEdit(newTxt)
    renderMeme()
}

function onBackToGallery() {
    document.querySelector('.editor').hidden = true
    document.querySelector('.editor').classList.remove('shown')
    BackToGallery()
}

function onSetColor(userColor) {
    gColor = userColor
}

function onFontSizeChange(action){
    gFont=gFont+action
    renderMeme()
}

function onLineToggle(){
    setLineToggle()
}