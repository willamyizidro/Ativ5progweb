const request = require('supertest');
const app = require('../src/app'); // Caminho do arquivo app.js

describe('Testes de Rotas do CRUD de Animes', () => {
  // Teste da rota GET /
  it('Deve retornar a lista de animes (GET /animes)', async () => {
    const response = await request(app).get('/animes');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Teste da rota POST /animes
  it('Deve criar um novo anime (POST /animes)', async () => {
    const newAnime = {
      name: 'One Piece',
      genre: 'Aventura',
      studio: 'Toei Animation',
    };

    const response = await request(app)
      .post('/animes')
      .send(newAnime);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newAnime.name);
  });

  // Teste da rota GET /animes/:id
  it('Deve retornar um anime por ID (GET /animes/:id)', async () => {
    const response = await request(app).get('/animes/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  // Teste da rota PUT /animes/:id
  it('Deve atualizar um anime (PUT /animes/:id)', async () => {
    const updatedAnime = {
      name: 'Naruto Shippuden',
      genre: 'Ação',
      studio: 'Pierrot',
    };

    const response = await request(app)
      .put('/animes/1')
      .send(updatedAnime);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedAnime.name);
  });

  // Teste da rota DELETE /animes/:id
  it('Deve deletar um anime (DELETE /animes/:id)', async () => {
    const response = await request(app).delete('/animes/1');
    expect(response.status).toBe(204); // Sem conteúdo
  });

  // Teste de erro ao buscar anime inexistente
  it('Deve retornar 404 para anime inexistente (GET /animes/:id)', async () => {
    const response = await request(app).get('/animes/999');
    expect(response.status).toBe(404);
  });
});
