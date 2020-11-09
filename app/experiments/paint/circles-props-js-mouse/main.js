/*
  --circles-offset: 10;
  --circles-count: 5;
  --circles-opacity: 0.6;
  --circles-strokeWeight: 2;
  --circles-fill: 1;
*/
const element = document.getElementById("app");
const rect = element.getBoundingClientRect();

//var x = e.clientX - rect.left; //x position within the element.
//var y = e.clientY - rect.top;  //y position within the element.
element.addEventListener("mousemove", e => {
  element.style.setProperty(
    "--pos-y",
    (e.clientY -rect.left) / 40 + "px"
  );
  element.style.setProperty(
    "--circles-strokeWeight",
    (e.clientY - rect.top) / 10 + "px"
  );
});
