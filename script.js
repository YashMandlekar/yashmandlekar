const text = "Computer Engineering Student";
const typingElement = document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    typingElement.textContent = text.slice(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingElement.textContent = text.slice(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 60 : 100);
}

typeLoop();
