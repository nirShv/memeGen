'use strict'
var gLineIdx = 0
var gMeme =
{
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    },
    {
        txt: 'But when Im not I eat Shawarma',
        size: 20,
        align: 'left',
        color: 'blue'
    }
    ]
}

function getMeme() {
    return gMeme
}

function textEdit(newTxt) {
    gMeme.lines[gLineIdx].txt = newTxt
    console.log('gLineIdx', gLineIdx);
    console.log('gMeme.lines', gMeme.lines);
}

function setImg(id) {
    gMeme.selectedImgId = id
    // gMeme.lines[0].txt = ''
    console.log('gMeme', gMeme);
}

function setLineToggle() {
    console.log('gLineIdx', gLineIdx);
    gLineIdx = gLineIdx ? 0 : 1
    console.log('gLineIdx', gLineIdx);

}