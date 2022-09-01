/* eslint-disable max-lines-per-function */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app.js');
const exp = require('constants');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ] });

describe('1Testando a API Cacao Trybe', () => {
    beforeEach(() => {
        sinon.stub(fs.promises, 'readFile')
        .resolves(mockFile);
    });

    afterEach(() => {
        sinon.restore();
    });
    describe('Usando método GET em /chocolates', () => {
        it('1-Retorna o lista completa de chocolates!', async () => {
            const output = [
                { id: 1, name: 'Mint Intense', brandId: 1 },
                { id: 2, name: 'White Coconut', brandId: 1 },
                { id: 3, name: 'Mon Chéri', brandId: 2 },
                { id: 4, name: 'Mounds', brandId: 3 },
            ];

            const response = await chai
            .request(app)
            .get('/chocolates');
            
            expect(response.status).to.be.equals(200);
            expect(response.body.chocolates).to.deep.equal(output);
        });
    });

    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
        it('2-Retorna o chocolate Mounds', async () => {
            const response = await chai
            .request(app)
            .get('/chocolates/4');

            expect(response.status).to.be.equal(200);
            expect(response.body.chocolate).to.deep.equal([
                {
                id: 4,
                name: 'Mounds',
                brandId: 3,
              }]);
        });
    });

    describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', () => {
        it('3-Retorna os chocolates da marca Lindt & Sprungli', async () => {
            const response = await chai
            .request(app)
            .get('/chocolates/brand/1');

            expect(response.status).to.be.equal(200);
            expect(response.body.chocolates).to.deep.equal([
                {
                    id: 1,
                    name: 'Mint Intense',
                    brandId: 1,
                  },
                  {
                    id: 2,
                    name: 'White Coconut',
                    brandId: 1,
                  },
            ]);
        });
    });

    describe('Usando método GET em /chocolates/total', function () {
      it('4-Retorna a quantidade total de chocolates', async function () {
        const response = await chai
        .request(app)
        .get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 });
      })
    });

    describe('Usando método GET em /chocolates/search', function () {
      it ('5-Retorna os chocolates com o tempo pesquisado', async function() {
        const response = await chai
        .request(app)
        .get('/chocolates/search?q=Mo');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal([
          {
            "id": 3,
            "name": "Mon Chéri",
            "brandId": 2
          },
          {
            "id": 4,
            "name": "Mounds",
            "brandId": 3
          },
        ]);
      });

      it('6-Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
        const response = await chai
        .request(app)
        .get('/chocolates/search?q=ZZZ');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal([]);
      })
    });

    describe('Usando o método PUT em /chocholates/:id', function () {
      it ('7-Atualiza um chocolate existente na base de dados',  async function () {
        const response = await chai
        .request(app)
        .get('/chocolates/1').send({
          name:'Mint Pretty Good',
          brandId: 2,
        });

        expect(response.status).to.be.equal(200);
        expect(response.body.chocolate).to.deep.equal({
          "chocolate": {
            "id": 1,
            "name": "Mint Pretty Good",
            "brandId": 2
          }
        });
      });

      it ('8-Retorna uma mensagem de erro caso o id informado não exista', async function () {
        const response = await chai
        .request(app)
        .get('/chocolates/82').send({
          name:'Mint Pretty Good',
          brandId: 2,
        });

        expect(response.status).to.deep.equal(404);
        expect(response.body.chocolate).to.deep.equal({ message: 'chocolate not found' });
      })
    })
});