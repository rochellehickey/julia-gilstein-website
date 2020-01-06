const imageLogo = document.querySelector('.julia-gilstein-logo');

function changeImage() {
  console.log('1');
  if (document.body.clientWidth < 768) {
    console.log('2');
      imageLogo.src = "img/horizontal-logo.png";
  } else if (document.body.clientWidth >= 768) {
      console.log('3');
      imageLogo.src = "img/stacked-logo.png";
  }
};

window.addEventListener("resize", changeImage)
changeImage();