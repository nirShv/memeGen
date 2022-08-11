'use strict'

var gElCanvas
var gCtx

// var gElCanvasKeywords
// var gCtxKeywords

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    // gElCanvasKeywords = document.querySelector('#keywords-canvas')
    // gCtxKeywords = gElCanvas.getContext('2d')

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
    // renderMeme()
    renderGallery()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth - 100
}