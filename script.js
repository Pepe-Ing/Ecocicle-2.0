// Mostrar información adicional de descuentos
function mostrarMensaje() {
  alert("Puedes traer ropa usada, botellas de plástico, pequeños aparatos electrónicos, etc. ¡Te recompensamos por ayudar al planeta!");
}

// Simular compra
const botonesCompra = document.querySelectorAll('button');
botonesCompra.forEach(boton => {
  if (boton.textContent === 'Comprar') {
    boton.addEventListener('click', () => {
      alert('Producto agregado al carrito. ¡Gracias por tu compra!');
    });
  }
});

// Validar formularios
function validarFormulario(formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado con éxito. ¡Nos pondremos en contacto pronto!');
    formulario.reset();
  });
}

// Registro y contacto
const formularios = document.querySelectorAll('form');
formularios.forEach(validarFormulario);
