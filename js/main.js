'use strict'

var gElCanvas
var gCtx

function init() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
    renderGallery()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth - 100
}