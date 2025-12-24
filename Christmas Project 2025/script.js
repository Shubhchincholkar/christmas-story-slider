const slide = document.querySelector(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function nextSlide() {
  const items = document.querySelectorAll(".item");
  slide.appendChild(items[0]);
}

function prevSlide() {
  const items = document.querySelectorAll(".item");
  slide.prepend(items[items.length - 1]);
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// Swipe for mobile
let startX = 0;

slide.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slide.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});
