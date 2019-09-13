document.addEventListener("DOMContentLoaded", function(){
  
  function angleToRadians(angle) {
    return (Math.PI / 180) * angle;
  }
  
  function rotateAboutPoint(centerX, centerY, x, y, angle) {
    let radians = angleToRadians(angle);
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);
    let newX = (cos * (x - centerX)) + (sin * (y - centerY)) + centerX;
    let newY = (cos * (y - centerY)) + (sin * (x - centerX)) + centerY;
    return [newX, newY];
  }
  function constructRings(context, centerX, centerY, ringSize, ringThickness, color) {
    debugger;
    let offset = [centerX, centerY * 0.6];
    let centers = [offset,
      rotateAboutPoint(centerX, centerY, ...offset, 120),
      rotateAboutPoint(centerX, centerY, ...offset, 240)];
    centers.forEach((el, idx) => {
      let gapAngle = (idx * 240);
      context.beginPath();
      context.arc(el[0], el[1], ringSize, angleToRadians(-185 + gapAngle), angleToRadians(95 + gapAngle));
      context.strokeStyle = color;
      context.lineWidth = ringThickness;
      context.stroke();
      context.beginPath();
      context.arc(el[0], el[1], ringSize, angleToRadians(115 + gapAngle), angleToRadians(158 + gapAngle));
      context.stroke();
      console.log("step");
    })
  }
  let canvas = document.getElementById("mycanvas");
  canvas.width = "500";
  canvas.height = "400";
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(30, 50, 40, 40);
  ctx.beginPath();
  ctx.arc(150, 75, 50, 0, 360);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  constructRings(ctx, 300, 100, 50, 5, "purple");
});
