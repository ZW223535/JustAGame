document.body.style.overflow = "hidden";

let _startX = 0,
  _startY = 0,
  _scrollTop = 0,
  _scrollLeft = 0;

document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

function OnMouseDown(event) {
  document.onmousemove = OnMouseMove;
  _startX = event.clientX;
  _startY = event.clientY;
  _scrollTop = document.documentElement.scrollTop;
  _scrollLeft = document.documentElement.scrollLeft;
}

function OnMouseMove(event) {
  window.scrollTo({
    left: _scrollLeft + (_startX - event.clientX),
    top: _scrollTop + (_startY - event.clientY),
  });
}

function OnMouseUp() {
  document.onmousemove = null;
}
