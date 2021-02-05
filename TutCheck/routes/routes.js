const express = require("express");
const router = express.Router();;
let pfad = "";

var array = require('../models/einheiten');

//URL-GET
router.get(pfad, function(req,res){
    var x = array.getEinheiten();
    res.render("tutoriumsliste",{einheiten:x});
})
router.get(pfad+"/detailseite", function(req,res){
    var x = array.getEinheitByID(req.query.id);
    console.log(x);
    res.render("detailseite",{einheit:x});
})
router.get(pfad+"/neueEinheit", function(req,res){
    res.render("neueEinheit");
})

//URL-POST
router.post(pfad+"/neueEinheit", function(req,res){
    array.neueEinheit(req.body.student,req.body.fach,req.body.wochentag,req.body.zeitVon,req.body.zeitBis,req.body.stundenlohn,req.body.lernziele,req.body.weitereInfos);
    var x = array.getEinheiten();
    res.render("neueEinheit");
})

//ELSE
router.use(function (req,res) {
    res.status(404);
    res.render("error",{error:`not found`})
})

module.exports = router;

