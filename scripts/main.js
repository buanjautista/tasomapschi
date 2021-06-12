var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': my_url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

function mapChange(idvalue){
    switch (idvalue.value){
        case "Shiokaze Pier":
             document.getElementById("mapImage").src =  'images/shiokazepier.png';
            shiokazeLampNames();
            console.log('Shiokaze');
            break;
        case "Futago Bridge":
            document.getElementById("mapImage").src = 'images/futagobridge.png';
            console.log('Futago Chosen');
            break;
        case "Gengetsu Lakeside":
             document.getElementById("mapImage").src = 'images/gengetsulakeside.png';
            console.log('Gengetsu Chosen');
            break;
        default:
            break;
    }
}

function getFromMap (info, mapName) {

    var jsonObj = require(['./mapinfo.json']);
    var sourceLamp = jsonObj.mapname[info];
    var sourceName = sourceLamp.name
    return sourceName
}

function shiokazeLampNames(){
    for (n = 1; n < 61; n++) {
        let elementName = "labellamp" + n;
        let arrayName = "lamp" + n;
        //console.log(n)
        document.getElementById(elementName).text = getFromMap(arrayName, "Shiokaze");
      // document.getElementById(elementName).innerHTML = n;

    }
}



