'use strict'

const STORAGE_KEY = 'memesDB'
const TXT_Auto = ['I sometimes eat Falafel', 'But when Im not I eat Shawarma']
const TXT_DEFAULT = ['Enter your text here...', 'Enter your text here...']

var gLineIdx = 0
const elCanvas = document.querySelector('#my-canvas')
var gMeme =
{
    selectedImgId: 1,
    selectedLineIdx: 0,
    fromSaved: false,
    editMode: false,
    lines: [{
        txt: 'Enter your text here...',
        size: 30,
        // font:fontImpact,
        align: 'center',
        color: 'red',
        x: elCanvas.width / 2,//200
        y: elCanvas.height - 400//40
    },
    {
        txt: 'Enter your text here...',
        size: 30,
        // font:fontImpact,
        align: 'center',
        color: 'blue',
        x: elCanvas.width / 2,
        y: elCanvas.height - 80//350
    }
    ]
}

function getMeme(isSaved) {
    setLines(isSaved)
    return gMeme
}

function getText() {
    return gMeme.lines[gLineIdx].txt
}

function textEdit(newTxt) {
    gMeme.lines[gLineIdx].txt = newTxt
}

function setFontSize(action = 0) {
    gMeme.lines[gLineIdx].size += action
    return gMeme.lines[gLineIdx].size
}

// function setFont(action){
//     gMeme.lines[gLineIdx].size += action
// }

function MoveLine(action = 0) {
    gMeme.lines[gLineIdx].y += action
    return gMeme.lines[gLineIdx].y
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
}

function setLineToggle() {
    var len = gMeme.lines.length
    if (gLineIdx + 1 === len) gLineIdx = 0
    else gLineIdx += 1
}

function setLines(isSaved) {
    if (isSaved) {
        gMeme.fromSaved = false
        gMeme.lines = []
        gMemes[gPlace].lines.forEach(line => {
            const newLine = {
                txt: line.txt,
                size: line.size,
                align: line.align,
                color: line.color,
                x: line.x,
                y: line.y
            }
            gMeme.lines.push(newLine)
        })

    } else if (!gMeme.editMode) {
        gMeme.lines.splice(2)
        gLineIdx = 0

        if (gMeme.lines.length>=1) {
            gMeme.lines[0].txt = TXT_DEFAULT[0]
            gMeme.lines[0].size = 20
            gMeme.lines[0].align = 'center'
            gMeme.lines[0].color = 'red'
            gMeme.lines[0].x = elCanvas.width / 2
            gMeme.lines[0].y = elCanvas.height - 400//40
        }
        if (gMeme.lines.length>=2) {
            gMeme.lines[1].txt = TXT_DEFAULT[1]
            gMeme.lines[1].size = 20
            gMeme.lines[1].align = 'center'
            gMeme.lines[1].color = 'blue'
            gMeme.lines[1].x = elCanvas.width / 2
            gMeme.lines[1].y = elCanvas.height - 80
        }
    }
}

function setEditMode(val) {
    gMeme.editMode = val
}

function lineDelete() {
    gMeme.lines.splice(gLineIdx, 1)
    gLineIdx = 0
}

function addLine() {
    const newLine = {
        txt: 'Enter your text here...',
        size: 20,
        align: 'center',
        color: 'black',
        y: elCanvas.height / 2,
        x: elCanvas.width / 2
    }
    gMeme.lines.push(newLine)
    gLineIdx = gMeme.lines.length - 1
}

function saveMeme() {
    gMeme.fromSaved = true
    const meme = createMeme(gMeme)
    gMemes.push(meme)
    saveMemeToStorage()
}

function saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMemes)
}

function createMeme(meme) {
    const newMeme = {
        selectedImgId: meme.selectedImgId,
        selectedLineIdx: 0,
        fromSaved: meme.fromSaved,
        editMode: meme.editMode,
        lines: []
    }
    meme.lines.forEach(line => {
        newMeme.lines.push(
            {
                txt: line.txt,
                size: line.size,
                align: line.align,
                color: line.color,
                x: line.x,
                y: line.y
            })
    })

    return newMeme
}