'use strict'

var gKeywordSize = 7

function renderGallery() {
    loadGalleryImage()
    renderSearchKeywords()
}

function loadGalleryImage() {
    const imgs = getImgForDisplay()
    const strHTMLs = imgs.map((memeImg, idx) =>
        `<img data-place="${idx}" src="${memeImg.url}" id=${memeImg.id} class="img img${memeImg.id}" onclick="onImgSelect(this)">`
    )
    document.querySelector('.grid-container').innerHTML = strHTMLs.join('')
    setFullGallery()
}

function renderSearchKeywords() {
    const keywords = getKeywords()
    const fontSizes = Object.values(keywords)
    const elKeywords = document.querySelector('.keywords')

    const strHTMLs = Object.keys(keywords).map((keyword, idx) =>
        `
            <li onclick="onKeyword(\'${keyword}\')" class="keyword" style="font-size:${fontSizes[idx] + 10}px">
                ${keyword}
            </li>
            `
    )
    elKeywords.innerHTML = strHTMLs.join('')
}

function onImgSelect(img) {
    setImg(+img.id)
    gPlace = img.dataset.place
    document.querySelector('.gallery').hidden = true
    editorInit(img.dataset.saved === 'saved-meme' ? true : false)
}

function BackToGallery() {
    setFullGallery()
    renderGallery()
    document.querySelector('.gallery').hidden = false
}

function onKeyword(Keyword) {
    KeywordSearch(Keyword)
    renderGallery()
}

function onSearch(ev) {
    if (ev.code === "Enter") {
        KeywordSearch(ev.target.value)
        ev.target.value = ''
    }
    renderGallery()
}

function onSavedMemes() {
    document.querySelector('.editor').hidden = true
    document.querySelector('.editor').classList.remove('shown')
    setEditMode(false)
    BackToGallery()
    savedMemes()
    renderSaved()
}

function renderSaved() {
    const strHTMLs = []
    gMemes.forEach((meme, idx) => {
        strHTMLs.push(`
        <img data-place="${idx}" src="img/${meme.selectedImgId}.jpg" id=${meme.selectedImgId} class="img img${meme.selectedImgId}" data-saved="saved-meme" onclick="onImgSelect(this)">`)
    })
    document.querySelector('.grid-container').innerHTML = strHTMLs.join('')
    setFullGallery()
}