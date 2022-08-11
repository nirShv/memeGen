'use strict'

const STORAGE_KEY = 'memesDB'

var gLineIdx = 0
// var gLineCoords = [{ x: 200, y: 40 }, { x: 200, y: 350 }]
var gMeme =
{
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 30,
        align: 'center',
        color: 'red',
        x: 200,
        y: 40
    },
    {
        txt: 'But when Im not I eat Shawarma',
        size: 30,
        align: 'center',
        color: 'blue',
        x: 200,
        y: 350
    }
    ]
}

function getMeme() {
    return gMeme
}

function textEdit(newTxt) {
    gMeme.lines[gLineIdx].txt = newTxt
}

function setFontSize(action = 0) {
    gMeme.lines[gLineIdx].size += action
    return gMeme.lines[gLineIdx].size
}

function setColor(userColor) {
    gMeme.lines[gLineIdx].color = userColor
    return gMeme.lines[gLineIdx].color
}

function setTextAlign(textAlign) {
    gMeme.lines[gLineIdx].align = textAlign
    return gMeme.lines[gLineIdx].align
}

function setImg(id) {
    gMeme.selectedImgId = id
    // gMeme.lines[0].txt = ''
}

function setLineToggle() {
    var len = gMeme.lines.length
    if (gLineIdx + 1 === len) gLineIdx = 0
    else gLineIdx += 1

}

function lineDelete() {
    gMeme.lines.splice(gLineIdx, 1)
    gLineIdx = 0
    console.log('gMeme', gMeme);
}

function addLine() {
    const newLine = {
        txt: 'Enter text',
        size: 30,
        align: 'left',
        color: 'black'
    }
    gMeme.lines.push(newLine)
    console.log('gMeme', gMeme);
}

function saveMeme() {
    gMemes.push(gMeme)
    saveMemeToStorage()
}

function saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMemes)
}

function setMemeInfo(meme) {
    gMeme.selectedImgId = meme.selectedImgId
    gMeme.selectedLineIdx = meme.selectedLineIdx
    gMeme.lines[0].txt = meme.lines[0].txt
    gMeme.lines[0].size = meme.lines[0].size
    gMeme.lines[0].align = meme.lines[0].align
    gMeme.lines[0].color = meme.lines[0].color
    gMeme.lines[1].txt = meme.lines[1].txt
    gMeme.lines[1].size = meme.lines[1].size
    gMeme.lines[1].align = meme.lines[1].align
    gMeme.lines[1].color = meme.lines[1].color
}