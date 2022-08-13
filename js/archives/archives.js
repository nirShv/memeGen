// from galleryController.js
function loadGalleryImage() {
    const imgs = getImgForDisplay()
    // imgs.forEach((memeImg, idx) => {
    //     var img = new Image()
    //     img.src = memeImg.url
    //     img.setAttribute(`id`, idx + 1)
    //     img.classList.add(`img`, `img${idx + 1}`)
    //     img.setAttribute(`onclick`, "onImgSelect(this)")
    //     document.querySelector(".grid-container").appendChild(img);
    //     // img.onload = onImageReady.bind(null, img, txt)
    // })


    const strHTMLs = imgs.map((memeImg, idx) =>
        `<img src="${memeImg.url}" id=${idx + 1} class="img img${idx + 1}" onclick="onImgSelect(this)">`
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

    // console.log('keywords',keywords);
    //     Object.keys(keywords).forEach((keywords,idx)=>{
    //         gKeywordSize+=fontSizes[idx]
    //         drawText1(keywords, 30, 40*(idx+1))
    //         gKeywordSize=7

    //     })
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

// from galleryService.js

// function findKeyWord(KeyWordFromUser){
//     gImgs.find(img=>{
// function findKeyWord(KeyWordFromUser){
//         img.keywords.forEach(keyword=>keyword===KeyWordFromUser)
//     })

// }

// from memeController.js

// function drawE(x, y) {
//     gCtx.beginPath();
//     gCtx.lineWidth = 2;
//     gCtx.ellipse(x, y, 180, 30, Math.PI / 1, 0, 2 * Math.PI);
//     // gCtx.fillStyle = 'blue';
//     // gCtx.fill();
//     gCtx.strokeStyle = 'black';
//     gCtx.stroke();
//     gCtx.stroke();
// }

// function drawRect(x, y,left,half_line,top,width,height) {
//     gCtx.beginPath();
//     gCtx.strokeStyle = 'red';
//     gCtx.strokeRect(left + x - half_line, top + y - half_line, width + gCtx.lineWidth, height + gCtx.lineWidth);
//     gCtx.closePath();
// }

function test() {
    const x = 200, y = 100;
    const str = "Hello yyyqqqppp";
    gCtx.strokeStyle = "red";
    const previous_text = str

    const previous_text_width = gCtx.measureText(previous_text).width;
    const text_bbox = getTextBBox(gCtx, previous_text);
    const left = previous_text_width + text_bbox.left * 3;
    const { top, width, height } = text_bbox;
    const half_line = gCtx.lineWidth / 2;
    // draw the rect
    gCtx.strokeRect(left + x - half_line, top + y - half_line, width + gCtx.lineWidth, height + gCtx.lineWidth);
    // }
    // draw our text
    gCtx.fillText(str, x, y);
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