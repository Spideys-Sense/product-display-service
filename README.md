# Bitey

The world's leading online pet supply storefront, brought to you by #SpideyGang!

## Related Projects

  - https://github.com/Spideys-Sense/product-display-service (this repo)
  - https://github.com/Spideys-Sense/item-description-service
  - https://github.com/Spideys-Sense/customer-review-service
  - https://github.com/Spideys-Sense/proxy-server-eldred

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This module allows users to:
> * See broad item information (Price/discounts, variants, title, department, in-stock)
> * Select and view image previews for the item from a list
> * Choose variants of an item (E.G. container size)
> * Use a modal zoom view when hovering on main image
>
> Potential later features:
> * Choose item amount, and add that many to the user’s cart
> * Link to reviews component (scroll down on click, display total reviews + average score)

## Requirements


!!!NOTICE!!!
If initializing a fresh install of this module, you will need to create the database "product_displays" from a mysql command line instance!

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- NPM
- MySql 5.7.32
- etc

## Development

### API routes for fetching data:

GET /bundle/
```
response.data: Javascript file that will render module onto an html tag with id="product-display"
```

GET /api/:id/summary
```
response.data: {
	“id”: Number,
	“name”: String,
	"variantName": String,
	“price”: Number,
	“discount”: String,
	“department”: String,
	“stock”: Number, 
	“variants”: [ 
		“item_id”: Number,
		“Item_id”: Number...
	]
}
```

- GET /api/:id/images
```
response.data: {
“imageUrls”: [
		String(URL),
	String(URL)...
]
}
```
- POST /api/:id/cart (no response data currently implemented)

### Installing Dependencies

From within the root directory:

```
npm install --production
```

