document.body.onclick = function () {
  const { target } = event
  if (target.tagName === 'DIV') {
    console.log(target.childNodes[0].nodeValue)
    console.log(target.innerText)
    console.log(target.innerHTML)
  }
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'green'
ctx.lineWidth = 1
let start = false
canvas.onmousedown = () => {
  ctx.beginPath()
  start = true
}
canvas.onmousemove = ({ x, y }) => {
  if (start) {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}
canvas.onmouseup = () => {
  start = false
}