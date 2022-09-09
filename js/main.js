//Swiper slider
var swiper = new Swiper('.bg-slider-thumbs', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper('.bg-slider', {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

//Navigation bar effects on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});

// --------------------------------------------------

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = 'AM';

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s + ' ' + session;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
