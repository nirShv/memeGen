'use strict'

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
    memeForRender.lines.map((line, idx) => {
        const { txt } = line
        drawText(txt, line.x, line.y, line.size, line.align, line.color)
    })
    drawE(memeForRender.lines[gLineIdx].x, memeForRender.lines[gLineIdx].y)
    const elLine = document.querySelector('.lin1-input')
    elLine.value = memeForRender.lines[gLineIdx].txt
}

function drawText(txt, x, y, fontSize, align, color) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 1
    gCtx.font = `${fontSize}px impact`
    gCtx.fillStyle = color
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    // console.log('gCtx.textBaseline', gCtx.textBaseline);
    // console.log('gCtx.lineWidth', gCtx.lineWidth);
    // console.log('gCtx.font', gCtx.font);
    // console.log('gCtx.fillStyle', gCtx.fillStyle);
    // console.log('txt, x, y', txt, x, y);
    // console.log('gCtx.strokeStyle', gCtx.strokeStyle);
    // console.log('txt, x, y', txt, x, y);

    gCtx.closePath()
}

function drawE(x, y) {
    gCtx.beginPath();
    gCtx.lineWidth = 2;
    gCtx.ellipse(x, y, 180, 30, Math.PI / 1, 0, 2 * Math.PI);
    // gCtx.fillStyle = 'blue';
    // gCtx.fill();
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
    gCtx.stroke();
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
    setColor(userColor)
    renderMeme()
}

function onFontSizeChange(action) {
    // gFont=gFont+action
    setFontSize(action)
    renderMeme()
}

function onTextAlign(textAlign) {
    setTextAlign(textAlign)
    renderMeme()
}

function onLineToggle() {
    setLineToggle()
    renderMeme()
}

function onMoveLine(action) {
    console.log('action', action);
    MoveLine(action)
    renderMeme()
}

function onLineDelete() {
    lineDelete()
    renderMeme()
    flashMsg('Line deleted')
}

function onAddLine() {
    addLine()
    renderMeme()
    flashMsg('Line added')
}

function onSave() {
    saveMeme()
    flashMsg('saved')
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme';
}

function flashMsg(msg) {
    const el = document.querySelector('.update-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}
// canvasSize()
// function canvasSize() {
//     gElCanvas = document.querySelector('#my-canvas')
//     console.log('gElCanvas', gElCanvas);
//     const canSize = {
//         y: gElCanvas.height,
//         x: gElCanvas.width
//     }
//     console.log('canSize', canSize);
//     return canSize
// }