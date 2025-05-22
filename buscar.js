const input = document.getElementById('campo-pesquisar');
const form = document.getElementById('buscar');
const animes = document.querySelectorAll('.anime');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const termo = input.value.toLowerCase();

    animes.forEach(animes => {
        const nome = animes.textContent.toLowerCase();

        if (nome.includes(termo)) {
            animes.style.display = 'block';
        } else {
            animes.style.display = 'none';
        }
    });
});
