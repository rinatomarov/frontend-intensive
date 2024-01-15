const button = document.querySelector('#button')
const button2 = document.querySelector('#button2')

arrays = [{image:'https://media.2x2tv.ru/content/images/2022/04/-----------------------3.jpg'},
    {image:'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20210214190655&path-prefix=ru'},
    {image:'https://pm1.aminoapps.com/6676/76e8ae163c4f70ff5fd2104bfbb97a6508ff40fc_hq.jpg'},
    {image:'https://pm1.aminoapps.com/6805/537194fb3c7bd0412458a82b8d0aa9a84b87bc8av2_hq.jpg'},
    {image:'https://cdn.ananasposter.ru/image/cache/catalog/poster/pos23/5/61276-1000x830.jpg'},
    {image:'https://pm1.aminoapps.com/6764/9a05868b48d6eed98c4a2a9fe30b4df872929c4cv2_00.jpg'}
]

let counter = 0
button2.addEventListener('click', function (event){
    if (counter < arrays.length) {
        const images = document.querySelector('img')
        images.setAttribute('src', arrays[counter].image)
        counter++
    } else {
        counter = 0
    }

})


button.addEventListener('click', function (event){
    if (counter>0){
        const images = document.querySelector('img')
        images.setAttribute('src',arrays[counter].image)
        counter--
    }else{
        counter = arrays.length-1
    }

})
// inner HtmL -> arrays[0] -> addEventListener ->

