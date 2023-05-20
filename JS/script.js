const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counter = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToogle);
document.addEventListener("scroll", scrollPage);

function navToogle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counter.forEach((counters) => {
    counters.innerText = "0";
    // get count target
    const updateCounter = () => {
      const target = +counters.getAttribute("data-target");
      // get current counter value
      const c = +counters.innerText;

      //create an increment
      const increment = target / 100;

      // if counter is less than target, add incremant
      if (c < target) {
        // round up and set counter value
        counters.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counters.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counter.forEach((counters) => (counters.innerHTML = "0"));
}
