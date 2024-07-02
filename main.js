const burger = document.getElementById("burger");
const openMenu = document.getElementById("open-menu");
burger.addEventListener("click", () => {
  openMenu.classList.toggle("show");

  if (openMenu.classList.contains("show")) {
    burger.innerHTML = `<img src="/img/close_menu.svg" alt="menu" />`;
  } else {
    burger.innerHTML = `<img src="/img/burger.svg" alt="menu" />`;
  }
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}