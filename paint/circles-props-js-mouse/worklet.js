function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class CirclesPainter {
  static get inputProperties() {
    return [
      "--circles-offset",
      "--circles-count",
      "--circles-opacity",
      "--circles-strokeWeight",
      "--circles-fill",
      "--pos-x",
      "--pos-y"
    ];
  }

  paint(ctx, geom, props) {
    const offset = parseInt(props.get("--circles-offset").toString(), 10) || 0;
    const count = parseInt(props.get("--circles-count").toString(), 10) || 2;
    const opacity = parseFloat(props.get("--circles-opacity").toString()) || 1;
    const strokeWeight =
      parseInt(props.get("--circles-strokeWeight").toString(), 10) || 1;
    const fill = parseInt(props.get("--circles-fill").toString(), 10) || 0;
    const size = Math.min(geom.width, geom.height);
    const radius = Math.max(Math.round((size / count - offset * 2) / 2), 10);
    const posX = parseInt(props.get("--pos-x").toString(), 10) || 0;
    const posY = parseInt(props.get("--pos-y").toString(), 10) || 0;
    const point = radius + offset + posX + posY;

    ctx.lineWidth = strokeWeight;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        let color = `rgba(${Math.floor(255 - 42.5 * i)},
                          0,
                          ${Math.floor(255 - 42.5 * j)},
                          ${opacity})`;
        ctx.strokeStyle = color;

        let shiftX = getRandomArbitrary(-posX, posX) * 1.4 ;
        let shiftY = getRandomArbitrary(-posY, posY) * 1.4;
        
        ctx.beginPath();
        ctx.arc(
          point + shiftX + i * (point * 2),
          point + shiftY + j * (point * 2),
          radius,
          0,
          2 * Math.PI
        );

        ctx.stroke();

        if (fill) {
          ctx.fillStyle = color;
          ctx.fill();
        }
      }
    }
  }
}

registerPaint("circles", CirclesPainter);
