'use strict'

var gRelevantImgs = []
var gMemes = []
var gPlace=-1
var gKeywordSearchCountMap = { 'funny': 5, 'cat': 16, 'baby': 6, 'political': 1, 'movie': 12 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'political'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dogs', 'love'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'dogs', 'baby', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cute', 'cat', 'sleep'] },
    { id: 5, url: 'img/5.jpg', keywords: ['cute', 'baby', 'Victory'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'aliens'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby', 'surprised'] },
    { id: 8, url: 'img/8.jpg', keywords: ['tell me more', 'movie'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['Laughter', 'political'] },
    { id: 11, url: 'img/11.jpg', keywords: ['love', 'Kissing', 'sport'] },
    { id: 12, url: 'img/12.jpg', keywords: ['what would you do'] },
    { id: 13, url: 'img/13.jpg', keywords: ['Victory', 'Celebrity', 'movie'] },
    { id: 14, url: 'img/14.jpg', keywords: ['Matrix', 'choose', 'movie'] },
    { id: 15, url: 'img/15.jpg', keywords: ['lord of the ring', 'one does not simply', 'movie'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny'] },
    { id: 17, url: 'img/17.jpg', keywords: ['political'] },
    { id: 18, url: 'img/18.jpg', keywords: ['Toy Story', 'everywhere', 'movie'] },
]

function getImgForDisplay() {
    if (!gRelevantImgs || gRelevantImgs.length === 0) {
        return gImgs
    } else {
        return gRelevantImgs
    }
}

function getImg(id) {
    return gImgs.find(img => img.id === id)
}

function setFullGallery() {
    gRelevantImgs = []
}

function getKeywords() {
    return gKeywordSearchCountMap
}

function savedMemes() {
    var memes = loadFromStorage(STORAGE_KEY)

    // memes = JSON.parse(memes)
    console.log('savedMemes-memes', memes);
    // if Nothing in storage
    if (!memes || !memes.length) {
        flashMsg('You have no saved memes yet')
        return false
    }
    gRelevantImgs = []
    gMemes = []
    memes.forEach(meme => {
        // meme = JSON.parse(meme)
        gRelevantImgs.push(getImg(meme.selectedImgId))
        gMemes.push(meme)
    })
}

function KeywordSearch(Keyword) {
    Keyword = Keyword.toLowerCase()
    if (!gKeywordSearchCountMap[Keyword]) gKeywordSearchCountMap[Keyword] = 1
    else ++gKeywordSearchCountMap[Keyword]
    getRelevantImg(Keyword)
}

function getRelevantImg(searchKey) {
    gImgs.forEach(img => {
        img.keywords.forEach(keyword => {
            if (keyword === searchKey) gRelevantImgs.push(img)
        })
    });
    if (gRelevantImgs.length === 0) flashMsg('No images matching your search')
    return gRelevantImgs
}

