const googleDb = [
  "cats.com",
  "poop.com",
  "cars.com",
  "animals.com",
  "wiki.com",
  "lipa.com",
  "myfavoritecars.com",
  "luxurycars.com",
  "notluxurycars.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

googleSearch("cars", googleDb);

module.exports = googleSearch;
