let showed_box = 0;

export function fNext() {
  showed_box -= 500;

  // Ajusta esta cantidad si agregas más imágenes (5 imágenes → -2000)
  if (showed_box < -2000) showed_box = 0;

  document.getElementById("sld").style.transform =
    `translateX(${showed_box}px)`;
}

export function fPrevious() {
  showed_box += 500;

  if (showed_box > 0) showed_box = -2000;

  document.getElementById("sld").style.transform =
    `translateX(${showed_box}px)`;
}
