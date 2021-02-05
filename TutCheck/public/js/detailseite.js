erstelleFach = function (fach) {
    var text =""
    switch (fach) {
        case Mathe:{
            text +="<img src='../img/Mathe.png'>" +
                "<p>Mathematik</p>";
        }break;
        case Biologie:{
            text +="<img src='../img/Biologie.png'>" +
                "<p>Biologie</p>";
        }break;
        case Chemie:{
            text +="<img src='../img/Chemie.png'>" +
                "<p>Chemie</p>";
        }break;
        case Englisch:{
            text +="<img src='../img/Englisch.png'>" +
                "<p>Englisch</p>";
        }break;
        case Erdkunde:{
            text +="<img src='../img/Erdkunde.png'>" +
                "<p>Erdkunde</p>";
        }break;
    }
    return text;
}