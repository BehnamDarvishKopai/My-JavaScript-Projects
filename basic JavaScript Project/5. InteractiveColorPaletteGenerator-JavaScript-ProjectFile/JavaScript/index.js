function randomHex() {
  var chars = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette() {
  var container = document.getElementById("palette");
  container.innerHTML = "";
  var colors = [];
  for (var i = 0; i < 5; i++) {
    colors.push(randomHex());
  }
  colors.forEach(function (hex) {
    var box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = hex;
    box.textContent = hex;
    box.onclick = function () {
      copyToClipboard(hex);
    };
    container.appendChild(box);
  });
}

function copyToClipboard(text) {
  var input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  document.getElementById("msg").textContent = "✅ Copied: " + text;
  setTimeout(function () {
    document.getElementById("msg").textContent = "";
  }, 2000);
}

generatePalette();
