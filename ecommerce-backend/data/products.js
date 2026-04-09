class Product {
  id;
  image;
  name;
  priceCents;
  rating;
  gameDev;
  releaseDate;
  constructor(productData) {
    this.id = productData.id;
    this.image = productData.image;
    this.name = productData.name;
    this.priceCents = productData.priceCents;
    this.rating = productData.rating;
    this.gameDev = productData.gameDev;
    this.releaseDate = productData.releaseDate;
  }
}
class PopularProduct extends Product {
  type;
  constructor(productData) {
    super(productData);
    this.type = "popular";
  }
}
const products = [
  {
    id: "8385627dh238",
    image: "/Images/Game-card-images/mario.webp",
    name: "Super Mario World",
    priceCents: 999,
    rating: 4.8,
    releaseDate: "November 21, 1990",
    gameDev: "Nintendo",
  },
  {
    id: "ahd74629da",
    image: "/Images/Game-card-images/bionic-commando.png",
    name: "Bionic Commando: ReArmed",
    priceCents: 1499,
    rating: 5,
    releaseDate: "August 13, 2008",
    gameDev: "GRIN",
  },
  {
    id: "aheh23-5893-ia",
    image: "/Images/Game-card-images/donkey-kong.webp",
    name: "Donkey-Kong country returns 3D",
    priceCents: 499,
    rating: 3,
    releaseDate: "May 24, 2013",
    gameDev: "Monster Games",
  },
  {
    id: "awdhsa-3859-38",
    image: "/Images/Game-card-images/doom.webp",
    name: "DOOM ETERNAL",
    priceCents: 299,
    rating: 4.6,
    releaseDate: "March 20, 2020",
    gameDev: "id Software",
  },
  {
    id: "ahcnth57-284",
    image: "/Images/Game-card-images/final-fantasy-nocopyright.jpg",
    name: "Final Fantasy XVI",
    priceCents: 1099,
    rating: 4.3,
    releaseDate: "July 21, 2011",
    gameDev: "Square Enix",
  },
  {
    id: "572985-27hsbv-3875",
    image: "/Images/Game-card-images/freelancer.png",
    name: "FreeLancer",
    priceCents: 399,
    rating: 3.5,
    releaseDate: "March 4, 2003",
    gameDev: "Digital Anvil",
  },
  {
    id: "28fn10fna-r4jf7",
    image: "/Images/Game-card-images/golden-eye.webp",
    name: "GoldenEye 007",
    priceCents: 1199,
    rating: 4.4,
    releaseDate: "August 25, 1997",
    gameDev: "Rare",
  },
  {
    id: "wnc-wj47f-qjf7",
    image: "/Images/Game-card-images/mario-world-nocopyright.png",
    name: "Super Mario World",
    priceCents: 799,
    rating: 2.3,
    releaseDate: "November 21, 1990",
    gameDev: "Nintendo",
  },
  {
    id: "ac82nfi3917rnbdja",
    image: "/Images/Game-card-images/mario2.webp",
    name: "Super Mario 64",
    priceCents: 899,
    rating: 3.9,
    releaseDate: "June 23, 1996",
    gameDev: "Nintendo",
  },
  {
    id: "amfltp1086u1hf",
    image: "/Images/Game-card-images/megaman7-nocopyright.png",
    name: "Mega Man7: Super Nintendo Edition",
    priceCents: 599,
    rating: 4.5,
    releaseDate: "March 24, 1995",
    gameDev: "Capcom",
  },
  {
    id: "184dncmaske-58",
    image: "/Images/Game-card-images/metalgear-nocopyright.jpg",
    name: "Metal Gear Solid V: the phantom pain",
    priceCents: 749,
    rating: 4,
    releaseDate: "September 1, 2015",
    gameDev: "Kojima Productions",
  },
  {
    id: "shcnam-2947ad",
    image: "/Images/Game-card-images/pacman.avif",
    name: "PacMan",
    priceCents: 99,
    rating: 3.7,
    releaseDate: "May 22, 1980",
    gameDev: "Namco",
  },
  {
    id: "83a837rhd",
    image: "/Images/Game-card-images/sonic-nocopyright.png",
    name: "Sonic The Hedgehog 2 Genesis",
    priceCents: 549,
    rating: 3,
    releaseDate: "November 21, 1992",
    gameDev: "Sega",
  },
  {
    id: "104idkamf--wjfn3",
    image: "/Images/Game-card-images/sonic.webp",
    name: "Sonic The Hedgehog 2",
    priceCents: 899,
    rating: 4.7,
    releaseDate: "November 21, 1992",
    gameDev: "Sega",
  },
  {
    id: "19473hsnsmck",
    image: "/Images/Game-card-images/street-fighters-nocopyright.jpg",
    name: "Street Fighters II: Champion Edition",
    priceCents: 1499,
    rating: 4.4,
    releaseDate: "March 13, 1992",
    gameDev: "Capcom",
  },
  {
    id: "1234567890",
    image: "/Images/Game-card-images/streetfighters-image.jpg",
    name: "Street Fighters II: Special Champion Edition",
    priceCents: 1799,
    rating: 4.1,
    releaseDate: "September 28, 1993",
    gameDev: "Capcom",
  },
  {
    id: "0987654321",
    image: "/Images/Game-card-images/tetris.png",
    name: "Tetris",
    priceCents: 49,
    rating: 4.1,
    releaseDate: "June 6, 1984",
    gameDev: "Alexey Pajitnov",
  },
  {
    id: "thisistheuniqueid",
    image: "/Images/Game-card-images/zelda-ocarina-of-time.webp",
    name: "The Legend Of zelda: ocarina of time 3D",
    priceCents: 2099,
    rating: 4.6,
    releaseDate: "June 16, 2011",
    gameDev: "Nintendo",
  },
  {
    id: "thisidisalsounique",
    image: "/Images/Game-card-images/zelda.webp",
    name: "The Legend Of Zelda: A Link To The Past",
    priceCents: 2499,
    rating: 4.9,
    releaseDate: "November 21, 1991",
    gameDev: "Nintendo",
  },
  {
    id: "brick",
    image: "/Images/Game-card-images/brick.jpg",
    name: "it's just a brick",
    priceCents: 99999999,
    rating: -67,
    releaseDate: "no idea when",
    gameDev: "Bob the builder",
  },
].map((product) => {
  if (product.rating >= 4.7) {
    return new PopularProduct(product);
  } else {
    return new Product(product);
  }
});

module.exports = products;
/*
export function filterProducts(searchValue) {
  let newProducts = [];
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
      newProducts.push(product);
    }
  });
  products = newProducts;
}
  */
