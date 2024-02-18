// Добавление скрипта на начало HTML
function loadScript(src,callback){
    let script = document.createElement('script')
    script.src= src
    script.onload = () => callback(script)
    document.head.append(script)
}
// loadScript('promise.js', function (){
//     newFunction()
// })

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script =>{
    alert(`здорово, скрипт ${script.src} загрузился`)
    alert( _ )
})