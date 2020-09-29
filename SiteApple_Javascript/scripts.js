var iMacs = 3999, iPhones = 1199, iPad2 = 1649, iPod = 229, ValorTotaliMacs, ValorTotaliPhones, ValorTotaliPad2, ValorTotaliPod, cont;
function SimularCompra(){
	ValorTotaliPod = 0;
	ValorTotal = 0;
	ValorTotaliMacs = 0;
	ValorTotaliPhones = 0;
	ValorTotaliPad2 = 0;
	cont = 0;
	if(document.getElementById("comprar1").checked){
		if(document.getElementById("select1").value == "master"){
			ValorTotaliMacs = iMacs - iMacs * 0.2
		}
		else if(document.getElementById("select1").value == "senior"){
			ValorTotaliMacs = iMacs - iMacs * 0.1
		}
		else if(document.getElementById("select1").value == "junior"){
			ValorTotaliMacs = iMacs - iMacs * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar2").checked){
		if(document.getElementById("select2").value == "master"){
			ValorTotaliPhones = iPhones - iPhones * 0.2
		}
		else if(document.getElementById("select2").value == "senior"){
			ValorTotaliPhones = iPhones - iPhones * 0.1
		}
		else if(document.getElementById("select2").value == "junior"){
			ValorTotaliPhones = iPhones - iPhones * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar3").checked){
		if(document.getElementById("select3").value == "master"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.2
		}
		else if(document.getElementById("select3").value == "senior"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.1
		}
		else if(document.getElementById("select3").value == "junior"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar4").checked){
		if(document.getElementById("select4").value == "master"){
			ValorTotaliPod = iPod - iPod * 0.2
		}
		else if(document.getElementById("select4").value == "senior"){
			ValorTotaliPod = iPod - iPod * 0.1
		}
		else if(document.getElementById("select4").value == "junior"){
			ValorTotaliPod = iPod - iPod * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(cont > 0)
		alert("Valor simulado da compra: R$" + ValorTotal.toFixed(2));
	else
		alert("Marque a opção 'Comprar' e tente novamente!");
}
function comprar(){
	ValorTotaliPod = 0;
	ValorTotal = 0;
	ValorTotaliMacs = 0;
	ValorTotaliPhones = 0;
	ValorTotaliPad2 = 0;
	cont = 0;
		if(document.getElementById("comprar1").checked){
		if(document.getElementById("select1").value == "master"){
			ValorTotaliMacs = iMacs - iMacs * 0.2
		}
		else if(document.getElementById("select1").value == "senior"){
			ValorTotaliMacs = iMacs - iMacs * 0.1
		}
		else if(document.getElementById("select1").value == "junior"){
			ValorTotaliMacs = iMacs - iMacs * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar2").checked){
		if(document.getElementById("select2").value == "master"){
			ValorTotaliPhones = iPhones - iPhones * 0.2
		}
		else if(document.getElementById("select2").value == "senior"){
			ValorTotaliPhones = iPhones - iPhones * 0.1
		}
		else if(document.getElementById("select2").value == "junior"){
			ValorTotaliPhones = iPhones - iPhones * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar3").checked){
		if(document.getElementById("select3").value == "master"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.2
		}
		else if(document.getElementById("select3").value == "senior"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.1
		}
		else if(document.getElementById("select3").value == "junior"){
			ValorTotaliPad2 = iPad2 - iPad2 * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	if(document.getElementById("comprar4").checked){
		if(document.getElementById("select4").value == "master"){
			ValorTotaliPod = iPod - iPod * 0.2
		}
		else if(document.getElementById("select4").value == "senior"){
			ValorTotaliPod = iPod - iPod * 0.1
		}
		else if(document.getElementById("select4").value == "junior"){
			ValorTotaliPod = iPod - iPod * 0.05
		}
		cont++;
		ValorTotal = ValorTotaliMacs + ValorTotaliPhones + ValorTotaliPad2 + ValorTotaliPod;
	}
	var nome = document.getElementById("nome").value;
	var cartao = document.getElementById("cartao").value;
	var parcelas = parseInt(document.getElementById("parcelas").value, 10);
	if(nome == '' || cartao == '' || cont == 0)
		alert("Você precisa preencher todos os campos!");
	else{
		alert("Sr(a)." + nome + ", os dados da sua compra são:\nTotal da compra: R$" + ValorTotal.toFixed(2) +"\nNº de parcelas:" + parcelas + "\nValor de cada parcela: R$" + (ValorTotal / parcelas).toFixed(2));
	}
}