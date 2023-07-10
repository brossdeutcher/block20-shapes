const shapes = [
  {
    color: `red`,
    size: `md`
  },
  {
    color: `green`,
    size: `lg`
  }
];

const render = () => {
  const html = shapes.map((shape) => {
    return `<div class='${shape.color} ${shape.size}'></div>`;
  }).join(``);

  document.querySelector(`ul`).innerHTML = html;
}

render();

const interval = setInterval(() => {
  const color = [`red`, `green`][Math.floor(Math.random()  * 2)];
  const size = [`sm`, `md`, `lg`][Math.floor(Math.random() * 3)];

  shapes.push({ color, size });
  render();

  if(shapes.length === 20) {
    clearInterval(interval);
  }
}, 1000);