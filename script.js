function toggleCode(chapterId) {
  const chapter = document.getElementById(chapterId);
  chapter.style.display = chapter.style.display === "block" ? "none" : "block";
}

// Obtén todos los elementos con la clase 'hover-color'
const elements = document.querySelectorAll(".hover-color");

// Recorre cada elemento y asigna un color aleatorio a la variable CSS '--hover-color'
elements.forEach((element) => {
  const randomColor = getRandomColor();
  element.style.setProperty("--hover-color", randomColor);
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
