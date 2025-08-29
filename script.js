const btnLayout = document.getElementById('btn-layout');
const partesLibro = document.getElementById('partes-libro');

btnLayout.addEventListener('click', function () {

  if (partesLibro.classList.contains('vertical')) {
    partesLibro.classList.remove('vertical');   
  } else {
    partesLibro.classList.add('vertical');      
  }
});


const btnCambiarTitulo = document.getElementById('btn-cambiar-titulo');
const tituloPrincipal = document.getElementById('titulo-principal');

btnCambiarTitulo.addEventListener('click', function () {
  if (tituloPrincipal.innerText === 'HTML & CSS: Curso práctico avanzado') {
    tituloPrincipal.innerText = 'Título cambiado';
  } else {
    tituloPrincipal.innerText = 'HTML & CSS: Curso práctico avanzado';
  }
});


const btnColorDescripcion = document.getElementById('btn-color-descripcion');
const bloqueDescripcion = document.getElementById('descripcion-libro');
const subtituloDescripcion = bloqueDescripcion.querySelector('h2');

btnColorDescripcion.addEventListener('click', function () {

  if (subtituloDescripcion.style.color === 'red') {
    subtituloDescripcion.style.color = '';              
    bloqueDescripcion.style.fontFamily = '';            
  } else {
    subtituloDescripcion.style.color = 'red';         
    bloqueDescripcion.style.fontFamily = 'cursive'; 
  }
});


const btnAgregarImagen = document.getElementById('btn-agregar-imagen');
const datosLibro = document.getElementById('datos-libro');

btnAgregarImagen.addEventListener('click', function () {
  
  const existente = datosLibro.querySelector('img[data-inyectada="1"]');
  if (existente) return;

  const img = document.createElement('img');
  img.setAttribute('data-inyectada', '1');

  img.src = 'https://img.freepik.com/foto-gratis/estructura-casa-hecha-libros-antiguos-contra-pared-madera_23-2148038707.jpg';
  img.style.width = '100%';
  img.style.marginTop = '1em';
  img.style.borderRadius = '6px';

  datosLibro.appendChild(img);
});
