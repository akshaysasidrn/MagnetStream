var express = require("express");
var router = express.Router();
var request = require("request");

const api = "https://tv-v2.api-fetch.website";

/* GET stream pages. */
router.get("/:type", function(req, res) {
  console.log(req.params.type);

  const streamsPath = `${api}/${req.params.type}`;
  request({
    uri: streamsPath
  }).pipe(res);
});

/* GET stream list within page. */
router.get("/:type/:page", function(req, res) {
  console.log(req.params);
  const streamsPage = `${api}/${req.params.type}/${req.params
    .page}/?sort=trending&order=-1`;
  request({
    uri: streamsPage
  }).pipe(res);
});

module.exports = router;
