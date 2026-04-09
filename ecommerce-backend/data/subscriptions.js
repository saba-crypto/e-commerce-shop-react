const subscriptions = [
  {
    id: "1",
    priceCents: 299,
    description: "First Month Free",
    properties: [
      {
        includes: true,
        description: "10% Discount On Every Game",
        id: "awdsawsa8hswdwad",
      },
      {
        includes: true,
        description: "AD Free Experience",
        id: "awdsaw23wdwad",
      },
      {
        includes: true,
        description: "More Special Game List",
        id: "awdsawssawdwad",
      },
      {
        includes: false,
        description: "20% Discount On Every Game",
        id: "awdsssawdwad",
      },
      { includes: false, description: "Premium Token", id: "awdsawssawdad" },
    ],
  },
  {
    id: "2",
    priceCents: 499,
    description: "Most Popular",
    properties: [
      { includes: true, description: "10% Discount On Every Game" },
      { includes: true, description: "AD Free Experience" },
      { includes: true, description: "More Special Game List" },
      {
        includes: true,
        description: "20% Discount On Every Game",
      },
      { includes: false, description: "Premium Token" },
    ],
  },
  {
    id: "3",
    priceCents: 699,
    description: "Best Deal",
    properties: [
      { includes: true, description: "10% Discount On Every Game" },
      { includes: true, description: "AD Free Experience" },
      { includes: true, description: "More Special Game List" },
      {
        includes: true,
        description: "20% Discount On Every Game",
      },
      { includes: true, description: "Premium Token" },
    ],
  },
];

module.exports = subscriptions;
