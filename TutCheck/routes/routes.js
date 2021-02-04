const express = require("express");
const router = express.Router();;
let pfad = "";

var array = require('../models/einheiten');


router.get(pfad, function(req,res){
    var x = array.getEinheiten();
    res.render("tutoriumsliste",{einheiten:x});
})
router.get(pfad+"/buchungsdetail", function(req,res){
    res.render("Buchungsdetails");
})
router.get(pfad+"/neueBuchung", function(req,res){
    res.render("Raumbuchung");
})
router.use(function (req,res) {
    res.status(404);
    res.render(`error`,{error:`not found`})
})

module.exports = router;

