// прелоадер
window.onload = function(){

	setTimeout(LoadPageHidden, 1800);
	setTimeout(LoadPageStart, 500);
	var loadPage = document.querySelector('.loading-page');
	function LoadPageStart() {
		loadPage.classList.add('loading_page_active');
	}
	function LoadPageHidden(){
		loadPage.classList.add('loading-page_done');
		document.querySelector('.boxinfo').classList.add('boxes_active');
		document.querySelector('.boximg').classList.add('boxes_active');
	};
};

/*кнопка меню*/
var menuBtn = document.querySelector('.menuBtn');
var menu = document.querySelector('.menu');

menuBtn.onclick = function(){
	this.classList.toggle('menuBtn_active');
	menu.classList.toggle('menu_active');
	document.querySelector('.wrapper').classList.toggle('wrapper_active');
};

setTimeout(showElem, 2500);
setTimeout(showText, 2100);

function showElem(){
	menuBtn.classList.add('menuBtn_show');
	document.querySelector('.aboutMe').classList.add('aboutMe_show');
	document.querySelector('.miniTitle').classList.add('miniTitle_show');
	document.querySelector('.boxinfo').classList.add('box_active');
}

function showText(){
	document.querySelector('.boxinfo').classList.add('boxinfo_show');
}

var menuLink = document.querySelectorAll('.menu a');

for( var i=0; i<menuLink.length; i++){
	menuLink[i].onmouseover = function() {
		this.style.color = '#000'
	}
	menuLink[i].onmouseout = function() {
		this.style.color = '#fff';
	}
}