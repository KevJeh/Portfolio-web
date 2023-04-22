const texto = document.querySelector('#principal');
const textoCompleto = texto.textContent;
const palabras = textoCompleto.split(' ');

texto.textContent = '';

palabras.forEach((palabra, indice) => {
  const span = document.createElement('span');
  span.textContent = palabra + ' ';
  texto.appendChild(span);

  setTimeout(() => {
    span.classList.add('visible');
  }, 100 * indice);
});
