const sizeEl = document.getElementById("size");
const decreaseEl = document.getElementById("decrease");
const increaseEl = document.getElementById("increase");
const clearEl = document.getElementById("clear");
const colorEl = document.getElementById("color");
//canvas画布
const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");
let isPressed = false;
let color = "black";
//canvas开始的坐标
let x1, x2, y1, y2;
let size = 10;

//更新size显示
const updateSizeOnScreen=() => {
    sizeEl.innerHTML = size;
};
updateSizeOnScreen();

//点击-
decreaseEl.addEventListener("click", (e) => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

//点击+
increaseEl.addEventListener("click", (e) => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

//canvas画线
const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

//canvas画圆
const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
};

//canvasEl mousedown事件
canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
});
document.addEventListener("mouseup", (e) => {
  isPressed = false;
  x1 = undefined;
  y1 = undefined;
});

canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    // drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
});

//清除画布
clearEl.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
});

//改变颜色
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});
