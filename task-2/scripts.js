var x1 = 3, y1 = 3;
var x2 = prompt('Enter X value');
var y2 = prompt('Enter Y value')
var distance = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

alert('The distance between points A(' + x1 + ', ' + x2 + ') and B(' + y1 + ', ' + y2 + ') equals '  + distance); 