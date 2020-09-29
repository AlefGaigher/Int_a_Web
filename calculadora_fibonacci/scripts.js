function fibonacci(){
	var num = parseInt(document.getElementById("numero").value, 10);
	var n = 2, fb = new Array();
	fb[0] = 0;
    fb[1] = 1;
	if (num < 1)
		alert("Seu Numero tem que ser maior que 1!");
	else {
		for(n = 2; n <= num; n++)
		{
		fb[n] = fb[n - 2] + fb [n - 1];
		}
		alert("Seu numero é: " +fb[num]);
		}
}

function maiorv(){

var n = new Array(10);
n[0] = document.getElementById("fb0").value;
n[1] = document.getElementById("fb1").value;
n[2] = document.getElementById("fb2").value;
n[3] = document.getElementById("fb3").value;
n[4] = document.getElementById("fb4").value;
n[5] = document.getElementById("fb5").value;
n[6] = document.getElementById("fb6").value;
n[7] = document.getElementById("fb7").value;
n[8] = document.getElementById("fb8").value;
n[9] = document.getElementById("fb9").value;

var maximoValor = Math.max(...n);
	alert("Seu Máximo Valor é: " +maximoValor);
	}


function menorv(){

var n = new Array(10);
n[0] = document.getElementById("fb0").value;
n[1] = document.getElementById("fb1").value;
n[2] = document.getElementById("fb2").value;
n[3] = document.getElementById("fb3").value;
n[4] = document.getElementById("fb4").value;
n[5] = document.getElementById("fb5").value;
n[6] = document.getElementById("fb6").value;
n[7] = document.getElementById("fb7").value;
n[8] = document.getElementById("fb8").value;
n[9] = document.getElementById("fb9").value;

var minimoValor = Math.min(...n);
	alert("Seu Mínimo Valor é: " +minimoValor);
	}