this backend contains 4 routes

1. products
2. cart
3. delivery options
4. orders

# products

there are 5 APIs in total for products to get all products, to get specific product, upload, update or delete a product(s)

- GET localhost:5000/api/products---returns an array of products each representing objects.

- GET localhost:5000/api/products/:id---gets Specific product base on product id provided in URL.

- POST localhost:5000/api/products---adds a product provided in req.body at the end of products array. newProduct should at least contain name, id and priceCents.

- PUT localhost:5000/api/products/:id---updates Specific product using productId provided in URL to a new product provided in req.body. new product should contain name, id, and priceCents.

- DELETE localhost:5000/api/products/:id---removes Specific product from products array based on product id provided in URL

to see the source code or to see how all of them work in details, go to ./controllers/products.js

# cart

there are 4 APIs in total for cart to get all cartItems, get specific cartItem based on productId provided in req.body, create or delete specific cartItem

- GET localhost:5000/api/cart--- returns an array of cartItems each of them representing an objects.

- GET localhost:5000/api/cart/:productId --> returns an object of specific cartItem based on productId provided in URL.

## responses represent an object like this:

- successful response:
  {
  success: true,
  data: [data of something...]
  }

- unsuccessful response:
  {
  success: false,
  error: "error message that tells what went wrong"
  }

they all have their unique status codes of course...

I'm lazy writing all of this so I will stop here :/
