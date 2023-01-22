const container = document.querySelector('.container');

const n = 16;
for (let i = 0; i < n * n; i++) {
  const size = 320 / n;

  const sqr = document.createElement('div');
  sqr.style.cssText = `width:${size}px; height:${size}px`;
  sqr.addEventListener('mouseover', () => {
    sqr.classList.add('hover');
  });

  container.appendChild(sqr);
}
