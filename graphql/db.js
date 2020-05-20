const { DataStore } = require("notarealdb");

const store = new DataStore("./graphql/data");

module.exports = {
  programs: store.collection("programs"),
};
