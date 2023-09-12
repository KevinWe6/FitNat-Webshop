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

function animateBox5() {
  const box5 = document.querySelector('.box5');
  box5.style.transform = 'translateX(0)';
  box5.style.opacity = '1';
}

function animateBox7() {
    const box7 = document.querySelector('.box7');
    box7.style.transform = 'translateX(0)';
    box7.style.opacity = '1';
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
}

function animateBoxImg3() {
  const boxImg3 = document.querySelector('.boxImg3');
  boxImg3.style.transform = 'translateX(0)';
  boxImg3.style.opacity = '1';
}

function animateBoxImg4() {
    const boxImg4 = document.querySelector('.boxImg4');
    boxImg4.style.transform = 'translateX(0)';
    boxImg4.style.opacity = '1';
  }

window.addEventListener('scroll', function() {
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const boxImg = document.querySelector('.boxImg');
  const boxVid = document.querySelector('.boxVid');
  const boxImg3 = document.querySelector('.boxImg3');
  const boxImg4 = document.querySelector('.boxImg4');
  const box5 = document.querySelector('.box5');
  const box7 = document.querySelector('.box7');

  const box1Position = box1.getBoundingClientRect().top;
  const box2Position = box2.getBoundingClientRect().top;
  const boxImgPosition = boxImg.getBoundingClientRect().top;
  const boxVidPosition = boxVid.getBoundingClientRect().top;
  const boxImg3Position = boxImg3.getBoundingClientRect().top;
  const boxImg4Position = boxImg4.getBoundingClientRect().top;
  const box5Position = box5.getBoundingClientRect().top;
  const box7Position = box7.getBoundingClientRect().top;

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

  if (boxImg3Position < windowHeight) {
    animateBoxImg3();
  }

  if (boxImg4Position < windowHeight) {
    animateBoxImg4();
  }

  if (box5Position < windowHeight) {
    animateBox5();
  }

  if (box7Position < windowHeight) {
    animateBox7();
  }
});

