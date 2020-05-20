const db = require("./../db");

const Query = {
    programs: () => db.programs.list()
}

module.exports = {
    Query,
};
