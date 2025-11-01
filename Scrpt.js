// Buenas prácticas: esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado - script.js funcionando');

  const contenido = document.getElementById('contenido-principal');
  const formLogin = document.getElementById('form-login');
  const formReg = document.getElementById('form-registro');

  // botones del nav
  const btnLogin = document.getElementById('btn-login');
  const btnReg = document.getElementById('btn-reg');

  // botones "volver" dentro de formularios (pueden ser varios)
  document.querySelectorAll('.volver').forEach(b => {
    b.addEventListener('click', () => {
      formLogin.classList.add('oculto');
      formReg.classList.add('oculto');
      contenido.classList.remove('oculto');
    });
  });

  btnLogin.addEventListener('click', () => {
    contenido.classList.add('oculto');
    formReg.classList.add('oculto');
    formLogin.classList.remove('oculto');
  });

  btnReg.addEventListener('click', () => {
    contenido.classList.add('oculto');
    formLogin.classList.add('oculto');
    formReg.classList.remove('oculto');
  });

  // ejemplos de "submit" -> solo vuelven a inicio (sin DB)
  document.getElementById('login-submit').addEventListener('click', () => {
    alert('Simulando inicio de sesión (sin DB)');
    // acá podrías validar campos...
    // luego volver
    formLogin.classList.add('oculto');
    contenido.classList.remove('oculto');
  });

  document.getElementById('reg-submit').addEventListener('click', () => {
    alert('Simulando registro (sin DB)');
    formReg.classList.add('oculto');
    contenido.classList.remove('oculto');
  });
});