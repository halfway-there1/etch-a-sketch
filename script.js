const container = document.querySelector('.container');

const grid_size = 320; // px
const n = 16; // no. of sqrs per side of the grid
const sqr_size = grid_size / n;
for (let i = 0; i < n * n; i++) {
  const sqr = document.createElement('div');
  sqr.style.cssText = `width: ${sqr_size}px; height: ${sqr_size}px`;
  sqr.addEventListener('mouseover', () => {
    sqr.classList.add('hover');
  });

  container.appendChild(sqr);
}
