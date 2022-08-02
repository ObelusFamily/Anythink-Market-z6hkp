var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/", function (req, res, next) {
  Item.findOne({ title: req.query.title })
    .then(() => {
      return res.json();
    })
    .catch(next);
});

module.exports = router;
