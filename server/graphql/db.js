const {
  DataStore
} = require("notarealdb");

const store = new DataStore("./server/mockdata");

module.exports = {
  programs: store.collection("programs"),
  users: store.collection("users"),
};
