/* eslint-disable no-undef */
const should = require('chai').should();
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server/index');

chai.use(chaiHttp);
// API Endpoint Tests
describe('API', () => {
  describe('GET/api/:id/summary', () => {
    it('it should retrieve an item entry', ((done) => {
      chai.request(server)
        .get('/api/50/summary')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.all.keys('id', 'name', 'price', 'discount', 'Department', 'stock', 'variants');
          done();
        });
    }));
  });

  describe('GET/api/:id/images', () => {
    it('it should retrieve a list of image entries', ((done) => {
      chai.request(server)
        .get('/api/50/images')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('imageUrls').that.is.an('array');
          res.body.imageUrls.forEach((url) => {
            url.should.be.a('string').that.includes('.com');
          });
          done();
        });
    }));
  });

  describe('POST/api/:id/cart', () => {
    it('it should reply with a mock response when trying to add to cart', ((done) => {
      chai.request(server)
        .post('/api/50/cart')
        .end((err, res) => {
          res.should.have.status(201);
          res.text.should.be.a('string').that.includes('cart');
          done();
        });
    }));
  });
});
