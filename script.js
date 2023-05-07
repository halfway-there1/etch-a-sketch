const container = document.querySelector('.container');
let style = window.getComputedStyle(container);
const grid_size = Number(style.getPropertyValue('width').slice(0, -2));
console.log(grid_size);

let root = document.querySelector(':root');
/* make grid of size n */
function makeGrid(n) {
  const sqr_size = grid_size / n;
  root.style.setProperty('--dimension', `${sqr_size}px`);

  // console.log(sqr_size);
  for (let i = 0; i < n * n; i++) {
    let sqr = document.createElement('div');
    container.appendChild(sqr);

    sqr.setAttribute('draggable', 'false');
    sqr.addEventListener('mouseover', () => {
      if (mousedown) sqr.classList.add('bg-purple');
    });
  }
}

let prev_n = 16;
const inpBtn = document.querySelector('.inpBtn');
inpBtn.addEventListener('click', () => {
  let n = prompt('Enter grid size between 16 & 100', 16);
  console.log(n);
  if (isNaN(n) || n > 100 || n < 16) {
    n = prev_n;
  }

  container.replaceChildren();
  makeGrid(n);
  prev_n = n;
});

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
  let divs = container.querySelectorAll('.container div');
  divs = [...divs];
  divs.forEach((div) => {
    div.classList.remove('bg-purple');
  });
});

(function () {
  makeGrid(16);
})();

let mousedown = false;
window.addEventListener('mousedown', () => {
  mousedown = true;
  console.log('mouse is pressed');
});

window.addEventListener('mouseup', () => {
  mousedown = false;
  console.log('mouse is not pressed');
});
