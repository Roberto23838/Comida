const cuerpo = document.getElementById('cuerpo');
const icono = document.getElementById('iconTheme');
const raiz = document.documentElement;

cuerpo.addEventListener('command', (e) => {
  if (e.command === '--toggle-theme') {
    raiz.classList.toggle('dark-mode');
  } 
});