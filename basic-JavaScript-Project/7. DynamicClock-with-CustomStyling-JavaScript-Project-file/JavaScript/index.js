function updateClock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m = m;
  }

  if (s < 10) {
    s = "0" + s;
  } else {
    s = s;
  }

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

setInterval(updateClock, 1000);
updateClock();


//

// function updateClock() {
//   var now = new Date();
//   var h = now.getHours();
//   var m = now.getMinutes();
//   var s = now.getSeconds();
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;
//   document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
// }
// setInterval(updateClock, 1000);
// updateClock();
