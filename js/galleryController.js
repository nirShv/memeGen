'use strict'

var gKeywordSize = 7

function renderGallery() {
    loadGalleryImage()
    renderSearchKeywords()
}

function loadGalleryImage() {
    const imgs = getImgs()

    imgs.forEach((memeImg, idx) => {
        var img = new Image()
        img.src = memeImg.url
        img.setAttribute(`id`, idx + 1)
        img.classList.add(`img`, `img${idx + 1}`)
        img.setAttribute(`onclick`, "onImgSelect(this)")
        document.querySelector(".grid-container").appendChild(img);
        // img.onload = onImageReady.bind(null, img, txt)
    })
}

function renderSearchKeywords() {
    const keywords = getKeywords()
    const fontSizes = Object.values(keywords)
    const elKeywords = document.querySelector('.keywords')

    const strHTMLs = Object.keys(keywords).map((keyword, idx) =>
        `
            <li onclick="onKeyword(event.target.value)" class="keyword" style="font-size:${fontSizes[idx] + 10}px">
                ${keyword}
            </li>
            `
    )
    elKeywords.innerHTML = strHTMLs.join('')

    // console.log('keywords',keywords);
    //     Object.keys(keywords).forEach((keywords,idx)=>{
    //         gKeywordSize+=fontSizes[idx]
    //         drawText1(keywords, 30, 40*(idx+1))
    //         gKeywordSize=7

    //     })
}


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


// test()
// function test(){
//     var can = new canvas()
//     console.log('can',can);
// }

function onImgSelect(img) {
    setImg(+img.id)
    document.querySelector('.gallery').hidden = true
    editorInit()
}

function BackToGallery() {
    document.querySelector('.gallery').hidden = false
}

// function drawText1(txt, x, y) {
//     gCtxKeywords.beginPath()
//     gCtxKeywords.textBaseline = 'middle'
//     gCtxKeywords.textAlign = 'center'
//     gCtxKeywords.lineWidth = 1
//     console.log('gKeywordSize',gKeywordSize);
//     gCtxKeywords.font = `${gKeywordSize}px david`
//     gCtxKeywords.fillStyle = 'yellow'
//     console.log(txt, x, y)
//     gCtxKeywords.fillText(txt, x, y)
//     gCtxKeywords.strokeStyle = 'black'
//     gCtxKeywords.strokeText(txt, x, y)
//     gCtxKeywords.closePath()
// }

function onSavedMemes() {
    savedMemes()
}