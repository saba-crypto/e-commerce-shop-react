const products = require("../data/products");
const getProducts = (req, res) => {
  try {
    if (products) {
      res.status(200).json({ success: true, data: products });
    } else {
      throw new Error("error occurred, please make sure that products exist");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error });
  }
};
const getProduct = (req, res) => {
  const { id } = req.params;
  try {
    if (!id && typeof id !== "string") {
      return res.status(400).json({
        success: false,
        error: "looks like id doesn't exist or it's not string",
      });
    }

    const matchingProduct = products.find((product) => {
      return product.id === id;
    });

    if (!matchingProduct) {
      return res
        .status(404)
        .json({ success: false, error: "couldn't find that product" });
    }
    res.status(200).json({ success: true, data: matchingProduct });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};
const postProduct = (req, res) => {
  const newProduct = req.body;
  const repeatedProduct = products.find((product) => {
    return newProduct.id === product.id;
  });

  try {
    //checks if product even exists and if its object
    if (!newProduct && typeof newProduct !== "object") {
      return res.status(400).json({
        success: false,
        error:
          "error occurred! make sure that newProduct exists and its object",
      });
    }

    //checks if product is valid to push
    if (!newProduct.name || !newProduct.id || !newProduct.priceCents) {
      return res.status(400).json({
        success: false,
        error:
          "please make sure that product has at least name, id and priceCents and check if they are valid",
      });
    }

    //self explanatory
    if (repeatedProduct) {
      return res.status(401).json({
        success: false,
        error:
          "it looks like this product already exists, you cannot add same product twice!",
      });
    }

    products.push(newProduct);
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
const updateProduct = (req, res) => {
  const { id } = req.params;
  const newProductData = req.body;
  try {
    if (!newProductData || (!newProductData.name && !newProductData.id)) {
      return res.status(401).json({
        success: false,
        error: "make sure that new product has at least priceCents and name!",
      });
    }
    let matchingProduct = products.find((product) => {
      return product.id === id;
    });

    if (!id || !matchingProduct) {
      return res.status(404).json({
        success: false,
        error: "either id or product that you want to modify is unknown!",
      });
    }

    const index = products.findIndex((product) => {
      return product.id === matchingProduct.id;
    });
    products[index] = newProductData;

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
const deleteProduct = (req, res) => {
  const productId = req.params.id;
  try {
    if (!productId && typeof productId !== "string") {
      return res.status(404).json({
        success: false,
        error: "productId that is provided is invalid",
      });
    }

    const matchingProductIndex = products.findIndex((product) => {
      return product.id === productId;
    });
    console.log(matchingProductIndex);

    if (typeof matchingProductIndex !== "number" || matchingProductIndex < 0) {
      return res.status(400).json({
        success: false,
        error:
          "error occurred, please make sure that product's index is correct",
      });
    }
    products.splice(matchingProductIndex, 1);
    return res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
