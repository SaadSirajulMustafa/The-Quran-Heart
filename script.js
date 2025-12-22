fetch('./heart.svg')
  .then(res => res.text())
  .then(svg => {
    const container = document.getElementById('svg-container');
    container.innerHTML = svg;

    const groups = container.querySelectorAll('.section-group');

    groups.forEach(group => {
      group.addEventListener('click', () => {
        const paths = group.querySelectorAll('.section');
        const isActive = paths[0].classList.contains('active');

        paths.forEach(p => {
          p.classList.toggle('active', !isActive);
        });
      });
    });
  });
