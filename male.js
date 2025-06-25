const banner = document.getElementById("bonanza-banner");

let visible = true;
setInterval(() => {
  if (visible) {
    banner.style.opacity = '0';
  } else {
    banner.style.opacity = '1';
  }
  visible = !visible;
}, 1000);
