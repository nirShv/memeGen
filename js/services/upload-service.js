// *** Upload a picture to the canvas. ***
///"share-container" and "user-msg"   class in HTML
function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        // document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        const elBtn = document.querySelector('.Upload-btn')
        elBtn.hidden = true

        // document.querySelector('.share-container').innerHTML = `
        document.querySelector('.share').innerHTML = `
        <a class="btn file-btn share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onmouseup="hideShareBtn()" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`

        // const elBtn = document.querySelector('.sfile-btn.Upload-btn')
        // console.log('elBtn', elBtn);
        // elBtn.value = 'share'
        // elBtn.innerHTML = `
        // // <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        // //    Share   
        // // </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

//Receives an encoded image and uploads it to a remote server
function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)///send the url after Successful transmission- function on line 7
        })
        .catch((err) => {
            console.error(err)
        })
}