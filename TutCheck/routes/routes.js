const express = require("express");
const alert = require("alert");
const router = express.Router();
let pfad = "";

var array = require('../models/einheiten');

//URL-GET
router.get(pfad, function (req, res) {
    var x = array.getEinheiten();
    res.status(200);
    res.render("tutoriumsliste", {einheiten: x});
})
router.get(pfad + "/detailseite", function (req, res) {
    if (array.hasID(req.query.id)) {
        var x = array.getEinheitByID(req.query.id);
        res.status(200);
        res.render("detailseite", {einheit: x});
    } else {
        res.status(404);
        res.render("error", {error: `not found`})
    }
})
router.get(pfad + "/neueEinheit", function (req, res) {
    res.status(200);
    res.render("neueEinheit");
})

//URL-POST
router.post(pfad + "/neueEinheit", function (req, res) {
    array.neueEinheit(req.body.student, req.body.fach, req.body.wochentag, req.body.zeitVon, req.body.zeitBis, req.body.stundenlohn, req.body.lernziele, req.body.weitereInfos);
    res.status(200);
    alert("Eine neue Einheit wurde erstellt!");
    res.redirect("/");
})

//ELSE
router.use(function (req, res) {
    res.status(404);
    res.render("error", {error: `not found`})
})

module.exports = router;

