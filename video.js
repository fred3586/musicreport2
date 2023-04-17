const canvas= document.querySelector('canvas')
const c= canvas.getContext('2d')
var ctx = canvas.getContext("2d")

var vid = document.getElementById("myVideo")

document.addEventListener('click', function() {
    vid.play()
})

function draw(){
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height)
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)
vid.play()