function mod1(){
	var cont, soma = 0, num1;
	num1 = parseInt(document.getElementById("Soma1").value, 10);
	if(document.getElementById("Soma2").checked){
		for(cont = 1; cont <= num1; cont++){
			soma += cont * cont;
		}
		if(soma == '')
			alert("O Campo não pode ficar vazio!");
		else if(soma <= 0)
			alert("O valor não pode ser zero ou negativo.")
		else
			alert("Seu Limite é: " + soma);
	}
	else
		alert("Você precisa selecionar: Calcular Soma.");
}
function mod2(){
    var fat = 1, num2, cont;
    num2 = parseInt(document.getElementById("Fat").value, 10);
    if(document.getElementById("numFat").checked){
        for(cont = 0; cont < num2; cont++){
            fat *= (num2 - cont);
        }
        if(num2 <= 0)
            alert("O valor não pode ser zero ou negativo");
        else
            alert("Seu Fatorial é: " + fat);
    }
    else
        alert("Você precisa selecionar: Calcular Fatorial.");
}
function mod3(){
	var numA, numB, numero, cont, fatA = 1, fatB = 1, resultado;
	numA = parseInt(document.getElementById("numA").value, 10);
	numB = parseInt(document.getElementById("numB").value, 10);
	numero = numA - numB;
	if(document.getElementById("Comb").checked){
		for(cont = 0; cont < numA; cont++){
            fatA *= (numA - cont);
        }
        for(cont = 0; cont < numero; cont++){
            fatB *= (numC - cont);
        }
        resultado = fatA / fatB;
        alert("Sua Combinação é: " + resultado);
	}
	else
		alert("Você precisa selecionar: Calcular Combinação.");
}
