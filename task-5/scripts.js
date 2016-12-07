function a() {
  return 5;
}

function b(x,y) {
  return x + y;
}

function c(x, y) {
  return Math.pow(x, y);
}

function d(x) {
  var obj = {
    a: x
  };
  return obj;
}

function e(x) {
  return function() {
  	return x
  };
}

function f(x, y) {
  var array = [];
  for (var i =0; i < y; i++) {
    array.push(x);
  }
  return array;
}

function g(x) {
  if (x) {
    return x;
  } 
  else 
  {
    return 99;
  }
}

function h(func) {
  return func();
}

function j(array = []) {
  return array[0] + array[1] + array[2];
}

function k(obj = {}) {
  var sum = 0;
  for (var key in obj) {
    sum = sum + obj[key];
  }
  return sum;
}

function m(array1 =[], array2=[]) {
  var sum = [];
  for (var i =0; i < array1.length; i++) {
    sum[i] = array1[i] + array2[i];
  }
  return sum;
}

function n(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
