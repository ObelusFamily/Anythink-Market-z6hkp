var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/", function (req, res, next) {
  let titlee = req.query.title;
  if (titlee !== undefined) {
    Item.find({ title: { $search: titlee } })
      .then(() => {
        return res.json();
      })
      .catch(next);
  } else {
    Item.find()
      .then(() => {
        return res.json();
      })
      .catch(next);
  }
});

module.exports = router;
