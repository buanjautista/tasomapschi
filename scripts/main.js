function mapChange(idvalue){
    switch (idvalue.value){
        case "Shiokaze Pier":
            document.getElementById("mapImage").src = 'images/shiokazepier.png';
            shiokazeLampNames();
            console.log('Shiokaze Sources');
            break;
        case "Futago Bridge":
            document.getElementById("mapImage").src = 'images/futagobridge.png';
            futagoLampNames();
            console.log('Futago Chosen');
            break;
        case "Gengetsu Lakeside":
            document.getElementById("mapImage").src = 'images/gengetsulakeside.png';
            gengetsuLampNames();
            console.log('Gengetsu Chosen');
            break;
        default:
            break;
    }
}

function getFromMap (sourceNumber, mapName) {
    var response = '';
        $.ajax({ type: "GET",   
         url: "https://raw.githubusercontent.com/bauti777/tasomapschi/main/scripts/mapinfo.json",   
         async: false,
         success : function(text)
         {
             response = text;
         }
        });
    var sourceLamp = JSON.parse(response);
    console.log(sourceLamp[mapName][sourceNumber].name);
    var sourceName = sourceLamp[mapName][sourceNumber].name;
    return sourceName;
}

function shiokazeLampNames(){
    for (n = 1; n < 61; n++) {
        let elementName = "labellamp" + n;
        let elementNumber = "lamp" + n;
        //console.log(n)
        document.getElementById(elementName).innerHTML = getFromMap(elementNumber, "Shiokaze");
       //document.getElementById(elementName).innerHTML = n;

    }
}

function futagoLampNames(){
    for (n = 1; n < 61; n++) {
        let elementName = "labellamp" + n;
        let elementNumber = "lamp" + n;
        //console.log(n)
        document.getElementById(elementName).innerHTML = getFromMap(elementNumber, "Futago");
       //document.getElementById(elementName).innerHTML = n;

    }
}

function gengetsuLampNames(){
    for (n = 1; n < 61; n++) {
        let elementName = "labellamp" + n;
        let elementNumber = "lamp" + n;
        //console.log(n)
        document.getElementById(elementName).innerHTML = getFromMap(elementNumber, "Gengetsu");
       //document.getElementById(elementName).innerHTML = n;

    }
}

