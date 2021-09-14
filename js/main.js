const container = document.getElementById("mainContainer");
const bar = document.getElementById("progressBar");

var containerHeight;

window.onscroll = function () {
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = (diff / containerHeight) * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  bar.style.width = cssWidth + "%";
};
