var biblioteca = ["implicito","abduzir","enxergar","majestoso","dirigir","lasanha","ansioso","consistente","advogado","cabeleireiro","propriedade","bicarbonato","mortadela"];
var qtde=biblioteca.length-1;
var pos=Math.round(Math.random()*qtde);
var palavra=biblioteca[pos];
var tam=palavra.length;
var cxLetras=[];
var acertos;
var errosMax=7;
var erros=0;
var acertou=false;
var jogando=false;

function defineLetras(l){
	var obj;
	for(var i=0;i<20;i++){
		obj=document.getElementById("letra"+i).value="";
		obj=document.getElementById("letra"+i).style.display="none";
	}
	for (var i=0;i<l;i++){
		obj=document.getElementById("letra"+i).style.display="inline-block";
	}
}

function executarFuncao(e) {
    if (e.keyCode == 13) {
        jogar();
        return false;   }}


function jogar(){
	jog=document.getElementById("letraJ");
	jog.focus();
	if (jog.value==""){
		alert("Digite uma letra");
	}

	else{
		if (jogando){
			var letra = jog.value.toLowerCase();
			if(cxLetras.includes(letra)) {
				alert("Essa Letra Já Foi Jogada!!");
				document.getElementById("letraJ").value= "";
			}
			else {
				var obj,letraTmp,pesq;
				cxLetras.push(letra);
				jog.value="";
				acertou=false;
				pesq=palavra.match(letra);

				while (pesq!=null){
					letraTmp=palavra.search(letra);
					obj=document.getElementById("letra"+letraTmp).value=letra;
					palavra=palavra.replace(letra,'0');
					acertos++;
					acertou=true;
					pesq=palavra.match(letra);}
					if(acertou){
					document.getElementById("alert2").style.display='block';
					document.getElementById("alert1").style.display='none';}
					else{
					document.getElementById("alert1").style.display='block';
					document.getElementById("alert2").style.display='none';}

					if(!acertou){
					document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase() + ", ";
					erros++;
						}
					if (erros<7) {
						var tentavivasa = errosMax - erros;
						document.getElementById("tentativas").innerHTML="Tentativas Restantes: "+tentavivasa;
					}else{
						alert("Você Perdeu! \nA Palavra Era: "+ biblioteca[pos].toUpperCase());
						document.getElementById("tentativas").innerHTML="Tentativas Restantes: 0";
						document.getElementById("dvletrasdigitadas").innerHTML="Letras Erradas: ";
						jogando=false;
					}
			}
				}
				if (acertos==tam) {
					alert("Parabéns! \nVocê Ganhou.");
					jogando=false;
				}
			}

			}



function inicia(){
	document.getElementById("alert2").style.display='none';
	document.getElementById("alert1").style.display='none';
	cxLetras=[];
	jogando=true;
	jog=document.getElementById("letraJ");
	jog.value="";
	jog.focus();
	acertos=0;
	erros=0;
	acertou=false;
	document.getElementById("dvletrasdigitadas").innerHTML="Letras Erradas:";
	document.getElementById("tentativas").innerHTML="Tentativas Restantes: 7";
	document.getElementById('fname').value = " Aperte Dica para Gerar Dica" ;
	pos=Math.round(Math.random()*qtde);
	palavra=biblioteca[pos];
	tam=palavra.length;
	defineLetras(tam);
}



function dica(){
 	jog.focus();
	if(biblioteca[pos] == biblioteca[0]) document.getElementById('fname').value = "Escondido , não expresso , omisso.";
	else if(biblioteca[pos] == biblioteca[1]) document.getElementById('fname').value = "Sinônimo de afastar, arrebatar e raptar";
	else if(biblioteca[pos] == biblioteca[2]) document.getElementById('fname').value = "Perceber pela visão";
	else if(biblioteca[pos] == biblioteca[3]) document.getElementById('fname').value = "Que inspira respeito";
	else if(biblioteca[pos] == biblioteca[4]) document.getElementById('fname').value = "Exercer a direção";
	else if(biblioteca[pos] == biblioteca[5]) document.getElementById('fname').value = "Alimento";
	else if(biblioteca[pos] == biblioteca[6]) document.getElementById('fname').value = "Que Revela Inquietação";
	else if(biblioteca[pos] == biblioteca[7]) document.getElementById('fname').value = "Diz-se Firme";
	else if(biblioteca[pos] == biblioteca[8]) document.getElementById('fname').value = "Profissão";
	else if(biblioteca[pos] == biblioteca[9]) document.getElementById('fname').value = "Profissão";
	else if(biblioteca[pos] == biblioteca[10]) document.getElementById('fname').value = "Qualidade inerente aos seres";
	else if(biblioteca[pos] == biblioteca[11]) document.getElementById('fname').value = "sal ou ânion(HCO3) derivado do ácido carbônico.";
	else if(biblioteca[pos] == biblioteca[12]) document.getElementById('fname').value = "Alimento";
	else document.getElementById('fname').value = "Não Consta na Base de Dados";

 	
}



window.addEventListener("load", inicia);

