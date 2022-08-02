var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/", function (req, res, next) {
  let titlee = req.query.title;
  if (titlee !== undefined) {
    Item.find({ title: { $search: titlee } })
      .then(function (titles) {
        return res.json({ title: titles });
      })
      .catch(next);
  } else {
    Item.find()
      .then(function (titles) {
        return res.json({ title: titles });
      })
      .catch(next);
  }
});

module.exports = router;
