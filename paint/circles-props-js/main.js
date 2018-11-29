/*
  --circles-offset: 10;
  --circles-count: 5;
  --circles-opacity: 0.6;
  --circles-strokeWeight: 2;
  --circles-fill: 1;
*/
const Houdini = function () {
  this.offset = 10;
  this.count = 5;
  this.opacity = 0.6;
  this.strokeWeight = 2;
  this.fill = false;
};

document.addEventListener('DOMContentLoaded', (event) => {

  const magic = new Houdini();
  const element = document.getElementById('app');
  


  const gui = new dat.GUI({ closed: true});
  const offsetController = gui.add(magic, 'offset', 0, 40);
  const countController = gui.add(magic, 'count', 2, 10, 1);
  const opacityController = gui.add(magic, 'opacity', 0, 1);
  const strokeWeightController = gui.add(magic, 'strokeWeight', 0, 20);
  const fillController = gui.add(magic, 'fill');

  offsetController.onChange(() => {
    element.style.setProperty('--circles-offset', magic.offset);
  })

  countController.onChange(() => {
    element.style.setProperty('--circles-count', magic.count);
  })

  opacityController.onChange(() => {
    element.style.setProperty('--circles-opacity', magic.opacity);
  })

  strokeWeightController.onChange(() => {
    element.style.setProperty('--circles-strokeWeight', magic.strokeWeight);
  })

  fillController.onChange(() => {    
    element.style.setProperty('--circles-fill', magic.fill ? 1 : 0);
  })


});
