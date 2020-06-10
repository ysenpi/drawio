let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let $clear = document.querySelector('.clear')
let $paleteBtn = document.querySelector('.palete-btn')
let $palete = document.querySelector('.palete')
let $range = document.getElementById('volume')


let isMouseDown = false
let isMouseLeave = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineWidth = 10
ctx.lineCap = 'round'
ctx.lineJoin = 'round'

$clear.onclick = () => {
  ctx.fillStyle = 'white'
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

$paleteBtn.onclick = (e) => {
  $palete.classList.toggle('hide')
}

$palete.addEventListener('click', (e) => {
  let color = e.target.className
  $paleteBtn.style.backgroundColor = color
  ctx.strokeStyle = color
})

$range.addEventListener('input', function(e) {
  console.log(e)
  console.log(this.value)
});

// canvas.addEventListener('mouseenter', () => {
//   if (isMouseLeave) {
//     isMouseDown = true
//     isMouseLeave = false
//   }
// })

// canvas.addEventListener('mouseleave', () => {
//   if (isMouseDown) {
//     isMouseDown = false
//     isMouseLeave = true
//     ctx.beginPath()
//   }
// })

canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true
})

canvas.addEventListener('mouseup', (e) => {
  isMouseDown = false
  ctx.beginPath()
})

canvas.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
  }
})