var router = require("express").Router();
var mongoose = require("mongoose");
var Item = mongoose.model("Item");

// return a list of titles
router.get("/", function (req, res, next) {
  Item.findOne({ title: req.query.title })
    .then((titles) => {
      console.log(titles);
      return res.json({ title: titles });
    })
    .catch(next);
});

module.exports = router;
