//Variaveis Globais
var allBody = document.documentElement;

var compactTitle = document.querySelector(".titulo-compacto");

var pageList = ["servicos-section", "sobre-section", "calendario-section", "contato-section"];

var nowScrollLocation = 0;

//Registro de eventos

//CLICK
document.getElementById("botao-flutuante").addEventListener("click", scrollButton);
document.querySelector('.botao-abrir-menu').addEventListener("click", openMenu);
document.querySelector('.botao-fechar-menu').addEventListener("click", closeMenu);

//SCROLL
window.addEventListener("scroll", onScroll);

//HASHCHANGE
window.addEventListener("hashchange", menuClick);

//-- Botão de Scroll (Que fica na parte do meio inferior)

//Quando clicar no botão-flutuante
function scrollButton(){
	scroll(elementLocationY(pageList[nowScrollLocation]));
	if(nowScrollLocation == (pageList.length - 1) || nowScrollLocation == 0){
		changeScrollMode();
	}
}

//Quando mecher o scroll (Movimentar página para cima e baixo)
function onScroll(){
	changeScrollMode();
    compactTitle.innerHTML = getPageLocation();
}

//Mudar o modo de scroll
function changeScrollMode(){// 0 ou 1
	var breaked = false;
	for(i = 0; i < document.getElementById("botao-flutuante").classList.length && breaked; i++){
        if(document.getElementById("botao-flutuante").classList[i] == "botao-flutuante-inverse"){
            document.getElementById("botao-flutuante").classList.remove("botao-flutuante-inverse");
            breaked = true;
		}
	}
	if(!breaked) document.getElementById("botao-flutuante").classList.add("botao-flutuante-inverse");
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
        scroll("custom", elementLocationY("servicos-section"));
	}else if(hash == "#about"){
        scroll("custom", elementLocationY("sobre-section"));
	}else if(hash == "#calendar"){
        scroll("custom", elementLocationY("calendario-section"));
	}else if(hash == "#contact"){
        scroll("custom", elementLocationY("contato-section"));
	}
	window.location.hash = "";
	closeMenu();
}

//Retorna a altura do elemento
///Inserir em element a class
function elementLocationY(elementClass){
	var element = document.querySelector("." + elementClass);
	if(window.innerWidth > 720) {
        return element.offsetTop - window.innerHeight * 0.18;
    }else{
		return element.offsetTop - window.innerHeight * 0.1;
	}
}

//Onde a página está de acordo com o scroll
function getPageLocation(){
	var scrollLocation = allBody.scrollTop;

	for(i = 0; i < pageList.length; i++){
        nowScrollLocation = i;
		if(scrollLocation < window.elementLocationY(pageList[i]) && scrollLocation < window.elementLocationY(pageList[i+1])){
			return "Empresa Júnior";
		}else if(i == (pageList.length -1)){
            return pageList[i][0].toUpperCase() + pageList[i].replace("-section", "").slice(1);
		}else if(scrollLocation > window.elementLocationY(pageList[i]) && scrollLocation < window.elementLocationY(pageList[i+1])){
			return pageList[i][0].toUpperCase() + pageList[i].replace("-section", "").slice(1);
		}
	}
}