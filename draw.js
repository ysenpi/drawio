let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let $clear = document.querySelector('.clear')

let isMouseDown = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineWidth = 10

// ctx.fillStyle = 'magenta'
// ctx.fillRect(0, 0, canvas.width, canvas.height)

$clear.onclick = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}

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