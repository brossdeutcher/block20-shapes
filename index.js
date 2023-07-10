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
  const htmlSquares = shapes.map((shape) => {
    return `<div class='${shape.color} ${shape.size}'></div>`;
  }).join(``);

  document.querySelector(`ul`).innerHTML = htmlSquares;

  // add code that fills the new unordered list with circles
  const circlesHTML = shapes.map((shape) => {
    return `<div class='${shape.color} ${shape.size} circles'></div>`
  }).join(``);

  document.querySelector(`.circles`).innerHTML = circlesHTML;
}

render();

const interval = setInterval(() => {
  // modify the application to support yellow shapes
  const color = [`red`, `green`, `yellow`][Math.floor(Math.random()  * 3)];
  // modify the application to support a new size with a class of xl which will be 100px
  const size = [`sm`, `md`, `lg`, `xl`][Math.floor(Math.random() * 4)];

  shapes.push({ color, size });
  render();

  // modify the application so that it will generate up to 50 of each shape
  if(shapes.length === 50) {//           SHOULD BE 50
    clearInterval(interval);
  }
}, 1000);
