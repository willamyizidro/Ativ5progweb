const Anime = require('../models/Anime');

class AnimeRepository {
  constructor() {
    this.animes = [
      new Anime(1, 'Naruto', 'Ação', 'Pierrot'),
    ];
  }

  findAll() {
    return this.animes;
  }

  findById(id) {
    return this.animes.find(anime => anime.id === id);
  }

  save(anime) {
    this.animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = this.animes.findIndex(anime => anime.id === id);
    if (index === -1) return null;
    this.animes[index] = updatedAnime;
    return updatedAnime;
  }

  delete(id) {
    const index = this.animes.findIndex(anime => anime.id === id);
    if (index === -1) return null;
    this.animes.splice(index, 1);
    return true;
  }
}

module.exports = new AnimeRepository();
