var mouseLog = new PointText(new Point(10,10));
var angleLog = new PointText(new Point(10,25));

var GRID_ROWS = 9;
var GRID_COLS = 6;
var grid = [];

for (var i = 1; i <= GRID_ROWS; i++) {
  for (var j = 1; j <= GRID_COLS; j++) {
    var path = new Path();
    // Give the stroke a color
    path.strokeColor = '#090909'; //dark gray
    if (i == 6) {
      path.strokeColor = '#00CDD7'; // light blue-green
      path.strokeWidth = 3;
    }
    path.strokeWidth = 2;
    path.strokeCap = 'round';
    var start = new Point(100 * i, 100 * j);
    // Move to start and draw a line from there
    path.moveTo(start);
    path.lineTo(start + [ 0, -60 ]);
    grid.push(path);
  }
}

function onMouseDown (event) {
  for (var i = 0; i < grid.length; i++) {
    var mouseVector = event.point - grid[i].firstSegment.point;
    console.log(calcScaleFactor(mouseVector.length));
  }
}

function onMouseMove (event) {
  for (var i = 0; i < grid.length; i++) {
    // get current angle
    var vector = grid[i].firstSegment.next.point - grid[i].firstSegment.point;
    // get angle between anchor point and mouse pointer
    var mouseVector = event.point - grid[i].firstSegment.point;
    // calc rotation angle
    var rotationAngle = mouseVector.angle - vector.angle;
    // rotate
    grid[i].rotate(rotationAngle, grid[i].firstSegment.point);
    // grid[i].rotate(rotationAngle);
    //recalculate vector
    // vector = grid[i].firstSegment.next.point - grid[i].firstSegment.point;
    // var factor = 1;
    // var p1 = grid[i].firstSegment.point - vector * factor;
    // grid[i].firstSegment.next.point = p1;
  }
  //
  // mouseLog.content = 'mouse position x: '+ event.point.x + 'y: '+event.point.y;
  // angleLog.content = 'segment prev angle: ' + vector.angle + '°';
  // angleLog.content += '\nmouse vector angle: ' + mouseVector.angle + '°';
  // angleLog.content += '\nrotation angle: ' + rotationAngle + '°';
}

function calcScaleFactor (num) {
  return (num - 0) * (1 - 0.2) / (2200 - 0) + 0.2;
}


// function onFrame (event) {
//   for (var i = 0; i < grid.length; i++) {
//     grid[i].rotate(0.4);
//   }
// }
