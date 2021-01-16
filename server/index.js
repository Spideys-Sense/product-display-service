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

/*
GET /api/:id/images
-amount: Number (Default: 10)
 */

/*
POST /api/:id/cart
-amount: Number (Default: 1)
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
