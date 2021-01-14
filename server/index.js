const express = require('express');
const path = require('path');

const app = express();
const port = 12345; // "TBD" // Coordinate with team!

app.use(express.static(path.join(__dirname, '../public')));

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
