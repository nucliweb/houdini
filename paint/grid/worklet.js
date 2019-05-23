(async () => {
  if (typeof CSS === 'undefined' || !('paintWorklet' in CSS)) {
    document.querySelector('.no-dice').hidden = false;
    return;
  }

  const paintModule = URL.createObjectURL(new Blob(
    [ document.querySelector('[type="houdini/paint-worklet"]').textContent ],
    { type: "text/javascript" }
  ));
  await CSS.paintWorklet.addModule(paintModule);
})();