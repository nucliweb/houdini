const template = document.createElement("template");
template.innerHTML = `
<style>
  :root {
    --size: 400 px;
    --color-dark: #353535;
    --color-medium: # 858585;
    --color-light: #d3d3d3;
  }
  .wrapper {
    /* Presetation properties */
    border: 1px dashed var(--color-medium);
    height: var(--size);
    padding: 1em;
    box-sizing: content-box;
    width: var(--size);

    /* Houdini Magic */
    --circles-offset: 10;
    --circles-count: 5;
    --circles-opacity: 0.6;
    --circles-strokeWeight: 2;
    --circles-fill: 1;

    background: paint(circles);
  }
</style>
<div class="wrapper"></div>
`;

class HoudiniCircles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("houdini-circles", HoudiniCircles);
