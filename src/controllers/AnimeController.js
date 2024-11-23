const AnimeService = require('../services/AnimeService');

class AnimeController {
  getAll(req, res) {
    const animes = AnimeService.getAllAnimes();
    res.json(animes);
  }

  getById(req, res) {
    try {
      const anime = AnimeService.getAnimeById(parseInt(req.params.id));
      if (!anime) return res.status(404).send('Anime não encontrado');
      res.json(anime);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  create(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const anime = AnimeService.createAnime(name, genre, studio);
      res.status(201).json(anime);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  update(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const anime = AnimeService.updateAnime(parseInt(req.params.id), name, genre, studio);
      res.json(anime);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  delete(req, res) {
    try {
      AnimeService.deleteAnime(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = new AnimeController();
