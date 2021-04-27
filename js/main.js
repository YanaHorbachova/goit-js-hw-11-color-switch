const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const body  = document.querySelector("body");
  const startBtnRef = document.querySelector("button[data-action=start]");
  const stopBtnRef = document.querySelector("button[data-action=stop]");
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  startBtnRef.addEventListener('click', changeColor)
  stopBtnRef.addEventListener('click', stopColor)
  let intervalId = null

function changeColor() {
    intervalId = setInterval(function () {  body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length-1)]}`;
    startBtnRef.disabled = true
      }, 1000)
    startBtnRef.disabled = true
}

function stopColor() {
    clearInterval(intervalId)
    startBtnRef.disabled = false
}