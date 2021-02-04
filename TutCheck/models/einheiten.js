function Einheit(id,Schueler,Fach,Start,Dauer,Lohn) {
    this.id = id;
    this.Schueler = Schueler;
    this.Fach = Fach;
    this.Start = Start;
    this.Dauer = Dauer;
    this.Lohn = Lohn;
}
var Einheit1 = new Einheit(1,"Max Mustermann","Mathe",'2021-03-12T09:00:00',"2 Stunden",15.00);
var Einheit2 = new Einheit(2,"Sabine Wasser","Deutsch",'2021-03-15T11:30:00',"1.5 Stunden",14.00);
var Einheit3 = new Einheit(3,"Axel Schweiss","Englisch",'2021-03-14T15:15:00',"4 Stunden",13.50);

einheiten = [Einheit1,Einheit2,Einheit3];

function neueEinheit(Schueler,Fach,Start,Dauer,Lohn){
    var neueEinheit = new Einheit(einheiten.length+1,Schueler,Fach,Start,Dauer,Lohn);
    einheiten.add(neueEinheit);
}
function getEinheiten(){
    return einheiten;
}
module.exports ={getEinheiten,neueEinheit};