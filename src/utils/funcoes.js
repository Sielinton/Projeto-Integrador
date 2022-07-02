import grafic from '../components/BarChart';


var bancaini;
var bancaatu;


function funcoes(){
    

    //pegar valor banca inicial
    bancaini = (document.getElementById("inputbanca").value);
    
   
    //objetivo

    var obj = document.getElementById("inputobj").value
    

   if (obj === "") { document.getElementById("inputobj").value = '3.0'; }
   

    somalucro();
    metadiaria();
   stoploss();

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
function stoploss(){

//setando stoploss
var stop = (0.15 * bancaatu).toFixed(2);
document.getElementById("inputstop").value = 'R$ ' + stop;

}

function somalucro(){

var d1 = parseFloat(document.getElementById("dia1").value);
var d2 = parseFloat(document.getElementById("dia2").value);
var d3 = parseFloat(document.getElementById("dia3").value);
var d4 = parseFloat(document.getElementById("dia4").value);
var d5 = parseFloat(document.getElementById("dia5").value);
var d6 = parseFloat(document.getElementById("dia6").value);
var d7 = parseFloat(document.getElementById("dia7").value);

var soma = ((parseFloat(d1) || 0)  + (parseFloat(d2) || 0) + (parseFloat(d3) || 0) + (parseFloat(d4) || 0) +
(parseFloat(d5) || 0) + (parseFloat(d6) || 0) + (parseFloat(d7) || 0)); 


bancaatual(soma, d1, d2, d3, d4, d5, d6, d7);

}

function bancaatual(soma, d1, d2, d3, d4, d5, d6, d7){
 
    //banca atual
    bancaatu = parseFloat(bancaini) + (parseFloat(soma) || 0);
   document.getElementById("inputatual").value = 'R$ ' + bancaatu;
   
   
  

if ((isNaN(d1)===false)) { document.getElementById("banca1").value = parseFloat(bancaini) + parseFloat(d1);
var vau = parseFloat(bancaini) + parseFloat(d1);


console.log(vau);
document.getElementById("atingiu1").type = 'image';  
 document.getElementById("atingiu1").src = 'imagens/atingiu.jpg';
 document.getElementById("atingiu1")
 //document.getElementById("atingiu1").margin="0px";
 var div = document.getElementById("atingiu1");
 div.style.backgroundColor = '#399753'; 
 //div.style.textAlign = 'right';

}
if ((isNaN(d2)===false)) { document.getElementById("banca2").value = parseFloat(document.getElementById("banca1").value) + parseFloat(d2);
document.getElementById("atingiu2").type = 'image';  
document.getElementById("atingiu2").src = 'imagens/naoatingiu2.jpg';
document.getElementById("atingiu2")
var div = document.getElementById("atingiu2");
div.style.backgroundColor = 'red'; 

}
if ((isNaN(d3)===false)) { document.getElementById("banca3").value = parseFloat(document.getElementById("banca2").value) + parseFloat(d3);
}
if ((isNaN(d4)===false)) { document.getElementById("banca4").value = parseFloat(document.getElementById("banca3").value) + parseFloat(d4);
}
if ((isNaN(d5)===false)) { document.getElementById("banca5").value = parseFloat(document.getElementById("banca4").value) + parseFloat(d5);
}
if ((isNaN(d6)===false)) { document.getElementById("banca6").value = parseFloat(document.getElementById("banca5").value) + parseFloat(d6);
}
if ((isNaN(d7)===false)) { document.getElementById("banca7").value = parseFloat(document.getElementById("banca6").value) + parseFloat(d7);
}


}

function metadiaria(){
//meta diária

var metadia = parseFloat(document.getElementById("inputobj").value) * parseFloat(bancaatu) / 100;
metadia.toFixed(2);
document.getElementById("inputmeta").value = 'R$ ' + metadia;


//lucro
var lucro = parseFloat(bancaatu) - parseFloat(document.getElementById("inputbanca").value);
var lucr = lucro.toFixed(2);
document.getElementById("inputlucro").value = 'R$ ' + lucr;

//valorização
document.getElementById("inputval").value = parseFloat(lucro) / parseFloat(bancaini) * 100 + '%';

//stake
if ((parseFloat(bancaatu) * 0.02) < 2) {
document.getElementById("inputstake").value = 'R$ ' + 1;
} else {
    var stake = parseFloat(bancaatu) * 0.02;
    stake.toFixed(2);
document.getElementById("inputstake").value = 'R$ ' + stake;
}

}




export default funcoes;