function alternar(id){
	if(id == 'char1'){
		document.getElementById("char1").style.display='flex';
		document.getElementById("char2").style.display='none';}
	

	else {
	document.getElementById("char1").style.display='none';
	document.getElementById("char2").style.display='flex';}

}

function texto(id){
	if(id == 'text1'){
		document.getElementById("text1").style.display='block';
		document.getElementById("text2").style.display='none';
		document.getElementById("text3").style.display='none';
		document.getElementById("text4").style.display='none';}
	else if (id == 'text2'){
		document.getElementById("text1").style.display='none';
		document.getElementById("text2").style.display='block';
		document.getElementById("text3").style.display='none';
		document.getElementById("text4").style.display='none';}
	else if (id == 'text3'){
		document.getElementById("text1").style.display='none';
		document.getElementById("text2").style.display='none';
		document.getElementById("text3").style.display='block';
		document.getElementById("text4").style.display='none';}
	else {
		document.getElementById("text1").style.display='none';
		document.getElementById("text2").style.display='none';
		document.getElementById("text3").style.display='none';
		document.getElementById("text4").style.display='block';
	}
	
}

function texto1(id){
	if(id == 'text5'){
		document.getElementById("text5").style.display='block';
		document.getElementById("text6").style.display='none';
		document.getElementById("text7").style.display='none';
		document.getElementById("text8").style.display='none';}
	else if (id == 'text6'){
		document.getElementById("text5").style.display='none';
		document.getElementById("text6").style.display='block';
		document.getElementById("text7").style.display='none';
		document.getElementById("text8").style.display='none';}
	else if (id == 'text7'){
		document.getElementById("text5").style.display='none';
		document.getElementById("text6").style.display='none';
		document.getElementById("text7").style.display='block';
		document.getElementById("text8").style.display='none';}
	else {
		document.getElementById("text5").style.display='none';
		document.getElementById("text6").style.display='none';
		document.getElementById("text7").style.display='none';
		document.getElementById("text8").style.display='block';}
	}
	










//function icones(){
//for(var i=2; i<=x; i++){
//    var icons = document.createElement("div");
//    icons.setAttribute("class", "icons");
//    var href = document.createElement("a");
//    href.setAttribute("href", "#"+i);
//    document.getElementsByTagName("body")[0].appendChild(icons);
//    var img = document.createElement("img");
//    img.setAttribute("class", "arred");
//    img.setAttribute("src", "images/Icones/"+i+".jpg");
//    href.appendChild(img);
//    icons.appendChild(href);
//    }
//}



//window.onload = function() {
    //coloca aqui o resto do código
//}

//<div class="icons"><a href="#2"><img class="arred" src="images/Icones/2.jpg"/></a></div>