var arrow = document.getElementById('arrow');

function animateArrow() {
  arrow.style.transform = 'translateY(-10px)';
  setTimeout(function() {
    arrow.style.transform = 'translateY(0)';
  }, 500);
}

arrow.addEventListener('click', function() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

setInterval(animateArrow, 1000);

function animateBox1() {
  const box1 = document.querySelector('.box1');
  box1.style.transform = 'translateX(0)';
  box1.style.opacity = '1';
}

function animateBox2() {
  const box2 = document.querySelector('.box2');
  box2.style.transform = 'translateX(0)';
  box2.style.opacity = '1';
}


function animateBoxImg() {
  const boxImg = document.querySelector('.boxImg');
  boxImg.style.transform = 'translateX(0)';
  boxImg.style.opacity = '1';
}

function animateBoxVid() {
  const boxVid = document.querySelector('.boxVid');
  boxVid.style.transform = 'translateX(0)';
  boxVid.style.opacity = '1';
  boxVid.style.marginLeft = '10%';
}

window.addEventListener('scroll', function() {
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const boxImg = document.querySelector('.boxImg');
  const boxVid = document.querySelector('.boxVid');

  const box1Position = box1.getBoundingClientRect().top;
  const box2Position = box2.getBoundingClientRect().top;
  const boxImgPosition = boxImg.getBoundingClientRect().top;
  const boxVidPosition = boxVid.getBoundingClientRect().top;


  const windowHeight = window.innerHeight;

  if (box1Position < windowHeight) {
    animateBox1();
  }

  if (box2Position < windowHeight) {
    animateBox2();
  }

  if (boxImgPosition < windowHeight) {
    animateBoxImg();
  }

  if (boxVidPosition < windowHeight) {
    animateBoxVid();
  }
});

