
function timer()
{
        var d = new Date();
        var dzien = d.getDate();
        var month = d.getMonth()+1;
        var rok = d.getFullYear();

        var godzina = d.getHours();
        if (godzina<10) godzina="0"+minuta;
        var minuta = d.getMinutes();
        if (minuta<10) minuta="0"+minuta;
        var sekunda = d.getSeconds();
        if (sekunda<10) sekunda="0"+sekunda;

        document.getElementById("zegar").innerHTML=
        dzien+"/"+month+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;

        setTimeout("timer()",1000);

}
