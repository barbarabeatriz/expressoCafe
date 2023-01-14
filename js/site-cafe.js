/*QUESTÃO 1*/ //falta o botão de fechar na janelaSaches
 var arraySaches = [
        {
            titulo: "Dolce Gusto",
            subtitulo: ' Caixa 16 cápsulas',
            imagem: '', 
            item1: 'Expresso 96g - R$ 24,00',
            item2: 'Descafeinado 96g - R$ 21,00'
        },

        {
            titulo: 'Senseo',
            subtitulo: '18 sachês',
            imagem: '', 
            item1: 'Clássico 120g - R$ 14,00',
            item2: 'Intenso 120g - R$ 14,00'
        },

        {
            titulo: 'Nespresso',
            subtitulo: '20 cápsulas',
            imagem: '', 
            item1: 'Livanto R$ 35,00',
            item2: 'Ristreto R$ 42,00',
            item3: 'Vanilio - R$ 46,00'
        }
    ]


    function dolceGusto() {
        const novaJanela = window.open("janelaSaches.html", "", "width=280,height=430");
        //novaJanela.document.body.style.background= url("../img/fundo.jpg"); não funcionou
        novaJanela.document.writeln("<body bgcolor='#401A0D'><body/>");
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><h1 align="center">'+ arraySaches[0].titulo + '</h1></font>'); 
        novaJanela.document.write('<font size="2rem" color="#FFEEBB" face="Verdana"><h2 align="center">'+ arraySaches[0].subtitulo + '</h2></font>'); 
        //novaJanela.document.write('<img src="CapsulaDulceGustoDescafeinado.jpg"/>'); não funcionou
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><font/>');
        novaJanela.document.write
        ("<ol><li>" + arraySaches[0].item1 + "</li><li> " + arraySaches[0].item2 +" </li></ol>"); 
        novaJanela.document.write('<div align="center">');
        novaJanela.document.write('<button style="align:center; face=Verdana; background-color:#FFEEBB; color:#401A0D; border:none; border-radius:4px; padding:8px; font-weight:bold" onclick="fecharJanela()">FECHAR</button>');
    }

    function senseo() {
        const novaJanela = window.open("janelaSaches.html", "", "width=280,height=430");
        novaJanela.document.writeln("<body bgcolor='#401A0D'><body/>");
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><h1 align="center">'+ arraySaches[1].titulo + '</h1></font>'); 
        novaJanela.document.write('<font size="2rem" color="#FFEEBB" face="Verdana"><h2 align="center">'+ arraySaches[1].subtitulo + '</h2></font>'); 
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><font/>');
        novaJanela.document.write
        ("<ol><li>" + arraySaches[1].item1 + "</li><li> " + arraySaches[1].item2 +" </li></ol>");
        novaJanela.document.write('<div align="center">');
        novaJanela.document.write('<button style="align:center; face=Verdana; background-color:#FFEEBB; color:#401A0D; border:none; border-radius:4px; padding:8px; font-weight:bold" onclick="fecharJanela()">FECHAR</button>');
    }

    function nespresso() {
        const novaJanela = window.open("janelaSaches.html", "", "width=280,height=430");
        novaJanela.document.writeln("<body bgcolor='#401A0D'><body/>");
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><h1 align="center">'+ arraySaches[2].titulo + '</h1></font>'); 
        novaJanela.document.write('<font size="2rem" color="#FFEEBB" face="Verdana"><h2 align="center">'+ arraySaches[2].subtitulo + '</h2></font>'); 
        novaJanela.document.write('<font size="2.5rem" color="#FFEEBB" face="Verdana"><font/>')
        novaJanela.document.write
        ('<ol><li>' + arraySaches[2].item1 + '</li><li>'+ arraySaches[2].item2 + '</li><li>' + arraySaches[2].item3 + '</li></ol>'); 
        novaJanela.document.write('<div align="center">');
        novaJanela.document.write('<button style="align:center; face=Verdana; background-color:#FFEEBB; color:#401A0D; border:none; border-radius:4px; padding:8px; font-weight:bold" onclick="fecharJanela()">FECHAR</button>');
    }
    
    function fecharJanela(){
        janelaSaches.close() 
    }

/*QUESTÃO 2*/

let maquina = document.getElementById("maquina");
let preco = document.getElementById("preco"); 

function piccolo(){
    maquina.src = "img/Dulce_GustoP.jpg";
    preco.innerHTML = "R$340,00";
}

function inissia(){
    maquina.src = "img/Nespresso_InissiaP.jpg";
    preco.innerHTML = "R$300,00";
}

function uc50(){
    maquina.src = "img/Nespresso_C50P.jpg";
    preco.innerHTML = "R$400,00";
}

function hd78(){
    maquina.src = "img/SenseoP.jpg";
    preco.innerHTML = "R$230,00";
}
/*QUESTÃO 3/*

/*QUESTÃO 4*/
var total = 0;
var textarea = '';
function selectMaquinas(){
    let idMaquinas = document.getElementById('formulario-compras').maquinas.selectedIndex; 
    //pega o índice do elemento selecionado 
    let textoMaquinas = maquinas.options[idMaquinas].text;

    if (idMaquinas = 0){
        total += 340;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoMaquinas +"\n"); 
    } else if (idMaquinas = 1){
        total += 300;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoMaquinas +"\n");
    } else if (idMaquinas = 2){
        total += 400; 
        textarea = (document.getElementById('textarea').value = textarea + "" + textoMaquinas +"\n");
    } else if (idMaquinas = 3){
        total += 230; 
        textarea = (document.getElementById('textarea').value = textarea + "" + textoMaquinas +"\n");
    }

    document.getElementById('valor').value = "R$" + total.toFixed(2);
       
}

function selectSaches(){
    let idSaches = document.getElementById('formulario-compras').saches.selectedIndex;
    let textoSaches = saches.options[idSaches].text; 

    if (idSaches = 0){
        total += 24;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n"); 
    } else if (idSaches = 1){
        total += 21;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n"); 
    } else if (idSaches = 2){
        total += 35;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n"); 
    } else if (idSaches = 3){
        total += 42;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n"); 
    } else if(idSaches = 4){
        total += 46;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n");
    } else if (idSaches = 5){
        total += 14;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n");
    } else if (idSaches = 6){
        total += 14;
        textarea = (document.getElementById('textarea').value = textarea + "" + textoSaches +"\n");
    }    
    document.getElementById('valor').value = "R$" + total.toFixed(2);
       
}

/*QUESTÃO 5*/
function verificarBandeira(){
        var numeroCartao = document.getElementById("numero").value;

        if(numeroCartao.length >= 1){
            if(numeroCartao[0] == "4"){
                document.getElementById("visa").checked = true;
                return true;

            } else if (numeroCartao[0] == "5"){
                if (numeroCartao[1] == "1" || numeroCartao[1] == "2" || numeroCartao[1] == "3" || numeroCartao[1] == "4" || numeroCartao[1] == "5") {
                    document.getElementById("master").checked = true;
                    return true;

                }
            } else if (numeroCartao[0] == "3"){
                if(numeroCartao[1] == "4" || numeroCartao[1] == "7"){
                    document.getElementById("amex").checked = true;
                    return true;

                }
            } else if (numeroCartao[0] != "3" || numeroCartao[0] != "4" || numeroCartao[0] != "5"){
                alert("Verifique o número do cartão informado.");
                return false;

            }
        }

}
  
