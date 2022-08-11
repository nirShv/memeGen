'use strict'

var gMemes = []
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'political'] },
    { id: 2, url: 'img/2.jpg', keywords: ['cute', 'dogs', 'love'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'dogs', 'babies', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat', 'sleep'] },
    { id: 5, url: 'img/5.jpg', keywords: ['cute', 'babies', 'Victory'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'aliens'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'babies', 'surprised'] },
    { id: 8, url: 'img/8.jpg', keywords: ['tell me more', 'movie'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'babies'] },
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

function getImg(id) {
    return gImgs.find(img => img.id === id)
}

function getImgs() {
    return gImgs
}

function getKeywords() {
    return gKeywordSearchCountMap
}

// function findKeyWord(KeyWordFromUser){
//     gImgs.find(img=>{
// function findKeyWord(KeyWordFromUser){
//         img.keywords.forEach(keyword=>keyword===KeyWordFromUser)
//     })

// }

function savedMemes() {
    console.log('test');
    var memes = loadFromStorage(STORAGE_KEY)
    console.log('memes', memes);
    // if Nothing in storage
    if (!memes || !memes.length) {
        alert('You have no saved memes yet')
        return false
    }
    gMemes = memes
    console.log('gMemes', gMemes);
    renderSavedMemes(gMemes)
}

