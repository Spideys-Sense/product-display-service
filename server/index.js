const express = require('express');
const path = require('path');
const controller = require('./dbController');

const app = express();
const port = 12345; // "TBD" // Coordinate with team!

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/:id/summary', (req, res) => {
  const { id } = req.params;
  controller.retrieveItem(id)
    .then((result) => {
      res.status(200);
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});
/*
GET /api/:id/summary
no parameters
 */
app.get('/api/:id/images', (req, res) => {
  const { amount } = req.query;
  const { id } = req.params;
  controller.retrieveImage(id, amount)
    .then((result) => {
      res.status(200);
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});
/*
GET /api/:id/images
-amount: Number (Default: 10)
 */
app.post('/api/:id/cart', (req, res) => {
  const { amount } = req.query;
  const { id } = req.params;

  controller.addToCart(id, amount)
    .then((result) => {
      res.status(201);
      res.send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

/*
POST /api/:id/cart
-amount: Number (Default: 1)
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = app;
