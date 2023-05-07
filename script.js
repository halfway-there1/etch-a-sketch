const container = document.querySelector('.container');
let style = window.getComputedStyle(container);
const grid_size = Number(style.getPropertyValue('width').slice(0, -2));
console.log(grid_size);

/* make grid of size n */
function makeGrid(n) {
  const sqr_size = grid_size / n;
  // console.log(sqr_size);
  for (let i = 0; i < n * n; i++) {
    let sqr = document.createElement('div');
    sqr.classList.add('sqr');

    sqr.style.cssText = `width: ${sqr_size}px; height: ${sqr_size}px`;
    sqr.addEventListener('mouseover', () => {
      sqr.classList.add('bg-purple');
    });

    container.appendChild(sqr);
  }
}
makeGrid(16);

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
  let divs = container.querySelectorAll('.sqr');
  divs = [...divs];
  divs.forEach((div) => {
    div.classList.remove('bg-purple');
  });
});
