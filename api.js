
fetch('https://api.jikan.moe/v4/top/anime')
  .then(res => res.json())
  .then(dados => {
    const container = document.getElementById('anime-container');

    dados.data.forEach(anime => {
      const card = document.createElement('div');
      card.classList.add('anime-card');

      const generos = anime.genres.map(g => g.name).join(', ');

      card.innerHTML = `
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <p><strong>Nota:</strong> ${anime.score || 'N/A'}</p>
        <p><strong>Status:</strong> ${anime.status}</p>
        <p><strong>Episódios:</strong> ${anime.episodes || 'Desconhecido'}</p>
        <p><strong>Gêneros:</strong> ${generos}</p>
        <p class="sinopse">${anime.synopsis}</p>
        <a href="https://www.crunchyroll.com/pt-br/search?q=${encodeURIComponent(anime.title)}" target="_blank">
          <i class="fas fa-play"></i> Assistir Online
        </a>
      `;


      container.appendChild(card);
    });
  })
  .catch(erro => {
    console.error("Erro ao buscar animes:", erro);
  });
