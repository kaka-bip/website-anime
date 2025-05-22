const botao = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

botao.addEventListener('click', () => {
  menu.classList.toggle('active');
});