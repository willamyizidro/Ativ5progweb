const AnimeRepository = require('../repositories/AnimeRepository');
const Anime = require('../models/Anime');

class AnimeService {
  getAllAnimes() {
    return AnimeRepository.findAll();
  }

  getAnimeById(id) {
    return AnimeRepository.findById(id);
  }

  createAnime(name, genre, studio) {
    if (!name || !genre || !studio) {
      throw new Error('Todos os campos são obrigatórios');
    }

    const id = AnimeRepository.findAll().length + 1;
    const newAnime = new Anime(id, name, genre, studio);
    return AnimeRepository.save(newAnime);
  }

  updateAnime(id, name, genre, studio) {
    if (!name || !genre || !studio) {
      throw new Error('Todos os campos são obrigatórios');
    }

    const anime = AnimeRepository.findById(id);
    if (!anime) throw new Error('Anime não encontrado');

    const updatedAnime = new Anime(id, name, genre, studio);
    return AnimeRepository.update(id, updatedAnime);
  }

  deleteAnime(id) {
    const result = AnimeRepository.delete(id);
    if (!result) throw new Error('Anime não encontrado');
    return result;
  }
}

module.exports = new AnimeService();
