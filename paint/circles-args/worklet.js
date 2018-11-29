class CirclesPainter {

  static get inputArguments() {
    return [
      '<number>',
      '<number>',
      '<percentage>',
      '<number>',
      '<number>'
    ];
  }

  paint(ctx, geom, props, args) {
    const offset = parseInt(args[0].toString(), 10);
    const count = parseInt(args[1].toString(), 10);
    const opacity = parseInt(args[2].toString(), 10) / 100;
    const strokeWeight = parseInt(args[3].toString(), 10);
    const fill = parseInt(args[4].toString(), 10);
    const size = Math.min(geom.width, geom.height);
    const radius = Math.max(Math.round(((size / count) - offset * 2) / 2), 10);
    const point = radius + offset;

    ctx.lineWidth = strokeWeight;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        let color = `rgba(${Math.floor(255 - 42.5 * i)},
                          0,
                          ${Math.floor(255 - 42.5 * j)},
                          ${opacity})`;
        ctx.strokeStyle = color;
        
        ctx.beginPath();
        ctx.arc(
          point + (i * (point * 2)),
          point + (j * (point * 2)),
          radius,
          0,
          2 * Math.PI);
        
        ctx.stroke();
        
        if (fill) {
          ctx.fillStyle = color;
          ctx.fill();
        }
      }
    }
  }
}

registerPaint('circles', CirclesPainter);