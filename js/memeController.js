'use strict'

function editorInit(/*place*/) {
    document.querySelector('.editor').hidden = false
    document.querySelector('.editor').classList.add('shown')
    // setEditMode(true)
    renderMeme(/*place*/)
}

function renderMeme(/*place*/) {
    const memeForRender = getMeme(/*place*/)
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

        drawText(line.txt, line.x, line.y, line.size, line.align, line.color)
    })
    drawRect(memeForRender.lines[gLineIdx].x, memeForRender.lines[gLineIdx].y)
    const elLine = document.querySelector('.lin1-input')
    elLine.value = memeForRender.lines[gLineIdx].txt
}

function drawText(txt, x, y, fontSize, align, color) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = align
    gCtx.lineWidth = 1
    gCtx.font = `${fontSize}px fontImpact`//fontImpact
    // gCtx.font = 'fontImpact';
    gCtx.fillStyle = color
    gCtx.fillText(txt, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(txt, x, y)
    gCtx.closePath()
}

function drawRect(x, y) {
    gCtx.beginPath();
    const txt = getText()
    const { left, top, right, bottom, width, height } = getTextBBox(gCtx, txt)
    const half_line = gCtx.lineWidth / 2
    gCtx.rect(left + x - half_line, top + y - half_line, width + gCtx.lineWidth, height + gCtx.lineWidth)
    // gCtx.rect(x-gElCanvas.width/3.5, y-15, 270, 30);
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath();
}

function getTextBBox(gCtx, text) {
    const metrics = gCtx.measureText(text);
    const left = metrics.actualBoundingBoxLeft * -1;
    const top = metrics.actualBoundingBoxAscent * -1;
    const right = metrics.actualBoundingBoxRight;
    const bottom = metrics.actualBoundingBoxDescent;
    // actualBoundinBox... excludes white spaces
    const width = text.trim() === text ? right - left : metrics.width;
    const height = bottom - top;
    return { left, top, right, bottom, width, height };
}

function onTextEdit(newTxt) {
    textEdit(newTxt)
    setEditMode(true)
    // debugger
    renderMeme()
}

function onBackToGallery() {
    document.querySelector('.editor').hidden = true
    document.querySelector('.editor').classList.remove('shown')
    setEditMode(false)
    setLines()
    BackToGallery()
}

function hideShareBtn() {
    document.querySelector('.Upload-btn').hidden = false
    document.querySelector('.share-btn').hidden = true
}

function onSetColor(userColor) {
    // debugger
    setColor(userColor)
    setEditMode(true)
    renderMeme()
}

function onFontSizeChange(action) {
    setFontSize(action)
    setEditMode(true)
    renderMeme()
}

// function onFontChange(action) {
//     console.log('action', action);
//     setFont(action)
//     setEditMode(true)
//     renderMeme()
// }

function onTextAlign(textAlign) {
    setTextAlign(textAlign)
    setEditMode(true)
    renderMeme()
}

function onLineToggle() {
    setLineToggle()
    setEditMode(true)
    renderMeme()
}

function onMoveLine(action) {
    MoveLine(action)
    setEditMode(true)
    renderMeme()
}

function onLineDelete() {
    lineDelete()
    setEditMode(true)
    renderMeme()
    flashMsg('Line deleted')
}

function onAddLine() {
    addLine()
    setEditMode(true)
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