let progress = document.getElementById('progressbar')

let totalHeight = document.body.scrollHeight - 
window.onscroll = fun(){

    let progressHeight =(window.pageYOffset / totalHeight)*100
progress.style.height=progressHeight+"%"
}