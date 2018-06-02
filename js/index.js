//Variaveis Globais
var allBody = document.documentElement;

//Registro de eventos

//CLICK
document.getElementById("botao-flutuante").addEventListener("click", scrollButton);
document.querySelector('.botao-abrir-menu').addEventListener("click", openMenu);
document.querySelector('.botao-fechar-menu').addEventListener("click", closeMenu);

//SCROLL
window.addEventListener("scroll", changeScrollMode);

//HASHCHANGE
window.addEventListener("hashchange", menuClick);

//-- Botão de Scroll (Que fica na parte do meio inferior)

//Quando clicar no botão-flutuante sobe tudo ou desce tudo
function scrollButton(){
	if(scrollMode()){
		scroll("totalBottom");
	}else{
		scroll("totalTop");
	}
}

//Detecção do modo do botão flutuante
function scrollMode(){
	if(document.getElementsByClassName("botao-flutuante-inverse").length == 0){
		return true;
	}else{
		return false;
	}
}

//Mudar o modo de scroll
function changeScrollMode(){// 0 ou 1
	var realScrollLocation = allBody.scrollTop + window.innerHeight;
	if(allBody.scrollHeight <= realScrollLocation){
		document.getElementById("botao-flutuante").classList.add("botao-flutuante-inverse");
	}else{
		document.getElementById("botao-flutuante").classList.remove("botao-flutuante-inverse");
	}
}

//-- Função para mudar local do scroll

function scroll(type, value){
	var animationInterval, scrollLocation;
	scrollLocation = allBody.scrollTop;
	if(type == "totalBottom"){
		animationInterval = setInterval(function(){
			scrollLocation += 30;
			window.scrollTo(0, scrollLocation);
			if(allBody.scrollHeight <= scrollLocation){
				clearInterval(animationInterval);
				scrollLocation = allBody.scrollTop;
			}
		}, 5);
	}else if(type == "totalTop"){
		animationInterval = setInterval(function(){
			scrollLocation -= 30;
			window.scrollTo(0, scrollLocation);
			if(scrollLocation <= 0){
				clearInterval(animationInterval);
				scrollLocation = allBody.scrollTop;
			}
		}, 5);
	}else if(type ==  "custom"){
		if(value === null){
			return "undefined";
		}else{
			if(value > scrollLocation){
				animationInterval = setInterval(function(){
					scrollLocation += 30;
					window.scrollTo(0, scrollLocation);
					if(scrollLocation >= value){
						window.scrollTo(0, value);
						clearInterval(animationInterval);
						scrollLocation = allBody.scrollTop;
					}
				}, 5);
			}else{
				animationInterval = setInterval(function(){
					scrollLocation -= 30;
					window.scrollTo(0, scrollLocation);
					if(scrollLocation <= value){
						window.scrollTo(0, value);
						clearInterval(animationInterval);
						scrollLocation = allBody.scrollTop;
					}
				}, 5);
			}
		}
	}
}

//-- Menu

//Interações do menu (Abrir/Fechar) Menu flutuante
function closeMenu(){
	allBody.classList.remove('menu-ativo');
}

function openMenu(){
	allBody.classList.add('menu-ativo');
}

//Cliques no menu
function menuClick(){
	var hash = window.location.hash;
	if(hash == "#services"){
		scroll("custom", 540);
	}else if(hash == "#about"){
		scroll("custom", 1080);
	}else if(hash == "#calendar"){
		scroll("custom", 1620);
	}else if(hash == "#contact"){
		scroll("custom", 2160);
	}
	window.location.hash = "";
}