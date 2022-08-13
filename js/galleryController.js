'use strict'

var gKeywordSize = 7

function renderGallery() {
    loadGalleryImage()
    renderSearchKeywords()
}

function loadGalleryImage() {
    const imgs = getImgForDisplay()
    const strHTMLs = imgs.map((memeImg, idx) =>
        // `<img src="${memeImg.url}" id=${idx + 1} class="img img${idx + 1}" onclick="onImgSelect(this)">`
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

// memes = JSON.parse(memes)
//אחרי ההפסקה: לבדוק למה הפונקציה הזאת הורסת את עריכת הממים 
// function renderSavedMemes(memes,onImageReady=renderImg) {
//     // debugger
//     memes.forEach((meme, idx) => {
//         var img = new Image()
//         img.src = `img/${meme.selectedImgId}.jpg`
//         img.classList.add(`meme`)
//         console.log('img.classList',img.classList);
//         img.setAttribute(`onclick`, "onImgSelect(this)")
//         setMemeInfo(meme)
//         img.onload = onImageReady.bind(null, img, meme)
//         document.querySelector(".grid-container").appendChild(img);
//         console.log('grid',document.querySelector(".grid-container"));
//     })
// }


function onImgSelect(img) {
    console.log('onImgSelect', img);
    setImg(+img.id)
    console.log('onImgSelect-place',img.dataset.place);
    gPlace=img.dataset.place
    document.querySelector('.gallery').hidden = true
    editorInit(/*img.dataset.place*/)
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
    // BackToGallery()
    onBackToGallery()
    savedMemes()
    renderGallery()
}