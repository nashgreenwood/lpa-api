const db = require("../model");
const GSP = db.gsp;

exports.GSPgetAll = (req, res) => {
  let queryStr = `
    SELECT * FROM LPA_GSP
    `;

  db.sequelize
    .query(queryStr)
    .then((result) => {
      console.log(result[0]);
      res.send(result[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};
