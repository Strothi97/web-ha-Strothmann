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

einheiten = [Einheit1,Einheit2,Einheit3];

function neueEinheit(student,fach,wochentag,zeitVon,zeitBis,stundenlohn,lernziele,weitereInfos){
    var neueEinheit = new Einheit(einheiten.length+1,student,fach,wochentag,zeitVon,zeitBis,stundenlohn,lernziele,weitereInfos);
    console.log(neueEinheit);
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
module.exports ={getEinheiten,neueEinheit,getEinheitByID};