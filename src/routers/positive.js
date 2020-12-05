const express = require("express");
const router = new express.Router();
const Pos = require('../models/positive');

router.post("/", async (req, res) => {
  // Put userId from auth to put into body
  const pos = new Pos(req.body);
  // req has body and user, dashboard is body, so owner if of req.body

  try {
    await pos.save();
    res.status(201).send(pos);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  // req has body and user, dashboard is body, so owner if of req.body
  try {
    const all = await Pos.find();
    console.log(all);
    res.status(200).send(all);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
