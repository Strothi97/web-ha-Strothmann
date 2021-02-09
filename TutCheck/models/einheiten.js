function Einheit(id,student,fach,wochentag,zeitVon,zeitBis,stundenlohn,lernziele,weitereInfos) {
    this.id = id;
    this.student = student;
    this.fach = fach;
    this.wochentag = wochentag;
    this.zeitVon = zeitVon;
    this.zeitBis = zeitBis;
    this.stundenlohn = stundenlohn;
    this.lernziele = lernziele;
    this.weitereInfos = weitereInfos;
}
var Einheit1 = new Einheit(1,"Max Mustermann","Mathematik","Montag","08:00","09:30",15.00,"Stochastik",undefined);
var Einheit2 = new Einheit(2,"Sabine Wasser","Erdkunde","Mittwoch","10:00","12:00",14.00,undefined,"nächste Woche Mittwoch entfällt. Sabine kann nicht!");
var Einheit3 = new Einheit(3,"Axel Schweiss","Englisch","Montag","15:00","16:00",13.50,"Present perfect",undefined);
var Einheit4 = new Einheit(4,"Peter Pan","Biologie","Samstag","09:30","12:00",10.50,"Genetik & Evolutionstheorie","Sehr langsamer lerner, aber gibt sich viel Mühe");
var Einheit5 = new Einheit(5,"Rosa von und Zuhause","Chemie","Donnerstag","19:00","21:00",17.50,"Hydrolyse, Batterie (Redoxreaktion) & allgemeine Probleme mit dem Periodensystem",undefined);

//Meine Datenhaltung
einheiten = [Einheit1,Einheit2,Einheit3,Einheit4,Einheit5];

function neueEinheit(student,fach,wochentag,zeitVon,zeitBis,stundenlohn,lernziele,weitereInfos){
    var neueEinheit = new Einheit(einheiten.length+1,student,fach,wochentag,zeitVon,zeitBis,stundenlohn,lernziele,weitereInfos);
    einheiten.push(neueEinheit);
}
function getEinheiten(){
    return einheiten;
}
function getEinheitByID(id){
    var einheit = undefined;
    for(var i =0;i<einheiten.length;i++){
        if(einheiten[i].id == id){
            einheit = einheiten[i];
        }
    }
    return einheit;
}
function hasID(id){
    var bool = false;
    for(var i =0;i<einheiten.length;i++){
        if(einheiten[i].id == id) return true;
    }
    return bool;
}
module.exports ={getEinheiten,neueEinheit,getEinheitByID,hasID};