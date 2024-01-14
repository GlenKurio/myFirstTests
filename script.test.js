const googleSearch = require("./script.js");
dbMock = [
  "dog.com",
  "cheespuff.com",
  "netflix.com",
  "netpet.com",
  "dogspogs.com",
];

describe("googleSearch", () => {
  it("is a search test", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogspogs.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("doesn't return more than 3", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
