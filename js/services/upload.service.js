// *** Upload a picture to the canvas. ***
///"share-container" and "user-msg"   class in HTML



// function uploadImg() {
//     const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

//     // A function to be called if request succeeds
//     function onSuccess(uploadedImgUrl) {
//         const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
//         const elBtn = document.querySelector('.Upload-btn')
//         elBtn.hidden = true
//         document.querySelector('.share').innerHTML = `
//         <a class="btn file-btn share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onmouseup="hideShareBtn()" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
//            Share   
//         </a>`
//     }
//     doUploadImg(imgDataUrl, onSuccess)
// }


function ShareMeme() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`);
    }
    doUploadImg(imgDataUrl, onSuccess);
}


// Receives an encoded image and uploads it to a remote server
function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData()
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            onSuccess(url)///send the url after Successful transmission- function on line 7
        })
        .catch((err) => {
            console.error(err)
        })
}

