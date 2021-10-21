const cards = [
  {
    id: 111,
    info: {
      number: 5555555555554444,
      expiration: "02/23",
      securityCode: 123
    },
    status: "active",
    lastUsed: 11111111,
    creation: 10,
    transactions: [
      { timestamp: 123, id: 1234, amount: 44, to: "amazon.com" },
      { timestamp: 11, id: 1234, amount: 44, to: "www.amazon.co.uk" },
      { timestamp: 456, id: 1234, amount: 44, to: "bestbuy.com" }
    ]
  },
  {
    id: 222,
    info: {
      number: 5555555555553333,
      expiration: "02/19",
      securityCode: 123
    },
    status: "expired",
    lastUsed: 11222,
    creation: 1,
    transactions: [{ timestamp: 456, id: 5678, amount: 45, to: "amazon.com" }]
  },
  {
    id: 333,
    info: {
      number: 5555555555553333,
      expiration: "02/25",
      securityCode: 123
    },
    status: "suspended",
    lastUsed: 22222222222222,
    creation: 2,
    transactions: [{ timestamp: 890, id: 987, amount: 50, to: "bestbuy.com" }]
  }
];

function newCards(cards) {
  let newcard = cards.filter((card) => {
    let res = card.transactions[0].to.includes("amazon");
    //  console.log(card.transactions[0].to)
    // console.log(res)
    return res;
  });
  // return newcard
  console.log(newcard);
}

newCards(cards);
