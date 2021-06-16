
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var index = 0;
var colorB = '#202353';
var colorR = '#950225';
var colorG = '#1f6940';
var colorY = '#92a700';
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');

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
	};
};

// кнопка меню
var menuBtn = document.querySelector('.menuBtn');
var menu = document.querySelector('.menu');

menuBtn.onclick = function(){
	this.classList.toggle('menuBtn_active');
	menu.classList.toggle('menu_active');
		if(document.documentElement.clientWidth >= 730){
			wrapper.classList.toggle('wrapper_active');
		}
};

// на главную страницу
var miniTitle = document.querySelector('.miniTitle');

miniTitle.onclick = function(){
	nextPage_4();
};

// кнопка след. страница
var nextPageBtn = document.querySelector('.nextPageBtn');

nextPageBtn.onclick = function() {
	index+=100;
		if(index == 100){
		 nextPage_1();
		}else if(index == 200){
			nextPage_2();
		}else if(index == 300){
			nextPage_3();
		}else{
			nextPage_4();
		}
};

// след. страница по событию кнопки
document.onkeydown = function() {
	if(event.key == 'ArrowDown'){
		index += 100;
		if(index == 100){
			nextPage_1();
		}else if(index == 200){
			nextPage_2();
		}else if(index == 300){
			nextPage_3();
		}else{
			nextPage_4();
		}

	}else if(event.key == 'ArrowUp'){
		if(index == 300){
			nextPage_2();
		}else if(index == 200){
			nextPage_1();
		}else if(index == 100){
			nextPage_4();
		}else{	
			nextPage_3();
		}

	}else if(event.key == 'ArrowRight'){
		index += 100;
		if(index == 100){
		  nextPage_1();
		}else if(index == 200){
			nextPage_2();
		}else if(index == 300){
			nextPage_3();
		}else{
			nextPage_4();
		}
	}else if(event.key == 'ArrowLeft'){
		if(index == 300){
			nextPage_2();
		}else if(index == 200){
			nextPage_1();
		}else if(index == 100){
			nextPage_4();
		}else{	
			nextPage_3();
		}
	}
};

// след. страница по ссылкам
var linkOfPageElem = document.querySelectorAll('.linkOfPage div');
var linkOfPage = document.querySelector('.linkOfPage');

linkOfPageElem[0].classList.add('page_active');

linkOfPageElem[0].onclick = function(){	
	nextPage_4();
};
linkOfPageElem[1].onclick = function(){	
	nextPage_1();
};
linkOfPageElem[2].onclick = function(){
	nextPage_2();
};
linkOfPageElem[3].onclick = function(){
	nextPage_3();
};
 
/*событие мышки*/
box1.onmousewheel = function() {
	if(event.deltaY > 0){
		nextPage_1();
	}else{
		nextPage_3();
	}
}
box2.onmousewheel = function() {
	if(event.deltaY > 0){
		nextPage_2();
	}else{
		nextPage_4();
	}
};
box3.onmousewheel = function() {
	if(event.deltaY > 0){
		nextPage_3();
	}else{
		nextPage_1();
	}	
};
box4.onmousewheel = function() {
	if(event.deltaY > 0){
		nextPage_4();
	}else{
		nextPage_2();
	}
};
//след. сьраница по даблклику
box1.ondblclick = function(){
	nextPage_1();
}
box2.ondblclick = function(){
	nextPage_2();
}
box3.ondblclick = function(){
	nextPage_3();
}
box4.ondblclick = function(){
	nextPage_4();
}


// about me color when hover
var aboutMe = document.querySelector('.aboutMe');

aboutMe.onmouseover = function(){
	if(index == 100){
		this.style.color = colorG;
	}else if(index == 200){
		this.style.color = colorR;
	}else if(index == 300){
		this.style.color = colorY;
	}else{
		this.style.color = colorB;
	}
};
aboutMe.onmouseout = 	function(){
	this.style.color = '#fff';
};

// menu a color when hover
var menuLink = document.querySelectorAll('.menu a');

for( var i=0; i<menuLink.length; i++){
	menuLink[i].onmouseover = function() {
		if(index == 100){
			this.style.color = colorG;
		}else if(index == 200){
			this.style.color = colorR;
		}else if(index == 300){
			this.style.color = colorY
		}else{
			this.style.color = colorB;
		}
	};
	menuLink[i].onmouseout = function() {
		this.style.color = '#fff';
	}
};
// opacity of boximg when hover
var boxLink = document.querySelectorAll('.boxes a');
var boxImg = document.querySelectorAll('.boximg img');
miniTitle.onmouseover = opacityLess;
miniTitle.onmouseout = opacityNormal;

function opacityLess() {
	for(var i=0; i<boxImg.length; i++ ){
		boxImg[i].style.opacity = 0.4;
	}
};

function opacityNormal() {
	for(var i=0; i<boxImg.length; i++ ){
		boxImg[i].style.opacity = 0.7;
	}
};

for(var i = 0; i<linkOfPageElem.length; i++){
	linkOfPageElem[i].onmouseover = opacityLess;
	linkOfPageElem[i].onmouseout = opacityNormal;
};
for(var i=0; i<boxLink.length; i++){
	boxLink[i].onmouseover = function() {
		for(var i=0; i<boxImg.length; i++){
			boxImg[i].style.opacity = 1;
		}
	};
	boxLink[i].onmouseleave = function() {
		for(var i=0; i<boxImg.length; i++){
		boxImg[i].style.opacity = 0.7;
		}
	}
};


// показываю элементы
setTimeout(showText, 1800);
setTimeout(showElem, 2400);

function showText() {
	box1.classList.add('box_active');
	box3.classList.remove('box_active');
	box4.classList.remove('box_active');
	box2.classList.remove('box_active');
}
function showElem(){
	nextPageBtn.classList.add('nextPageBtn_show');
	menuBtn.classList.add('menuBtn_show');
	aboutMe.classList.add('aboutMe_show');
	miniTitle.classList.add('miniTitle_show');
	linkOfPage.classList.add('linkOfPage_show');
}

// next page функции
function nextPage_1() {
	index = 100;
	body.style.background = '#114628';
	menu.style.background = colorG;
	menuBtn.style.background = colorG;
	nextPageBtn.classList.add('nextPageBtnStyle');
	nextPageBtn.classList.remove('nextPageBtnStyle1');
	nextPageBtn.classList.remove('nextPageBtnStyle2');
	linkOfPageElem[0].classList.remove('page_active');
	linkOfPageElem[1].classList.add('page_active');
	linkOfPageElem[2].classList.remove('page_active');
	linkOfPageElem[3].classList.remove('page_active');
	box1.classList.remove('box_active');
	box2.classList.add('box_active');
	box3.classList.remove('box_active');	
	box4.classList.remove('box_active');
};
function nextPage_2() {
	index = 200;
	body.style.background = '#690d23';
	menu.style.background = colorR;
	menuBtn.style.background = colorR;
	nextPageBtn.classList.remove('nextPageBtnStyle');
	nextPageBtn.classList.add('nextPageBtnStyle1');	
	nextPageBtn.classList.remove('nextPageBtnStyle2');
	linkOfPageElem[0].classList.remove('page_active');
	linkOfPageElem[1].classList.remove('page_active');
	linkOfPageElem[2].classList.add('page_active');
	linkOfPageElem[3].classList.remove('page_active');	
	box1.classList.remove('box_active');
	box2.classList.remove('box_active');
	box3.classList.add('box_active');
	box4.classList.remove('box_active');	
};

function nextPage_3() {
	index = 300;
	body.style.background = '#63870c';
	menu.style.background = colorY;
	menuBtn.style.background = colorY;	                            
	nextPageBtn.classList.remove('nextPageBtnStyle');
	nextPageBtn.classList.remove('nextPageBtnStyle1');
	nextPageBtn.classList.add('nextPageBtnStyle2');
	linkOfPageElem[0].classList.remove('page_active');
	linkOfPageElem[1].classList.remove('page_active');
	linkOfPageElem[2].classList.remove('page_active');	
	linkOfPageElem[3].classList.add('page_active');
	box1.classList.remove('box_active');	
	box2.classList.remove('box_active');
	box3.classList.remove('box_active');
	box4.classList.add('box_active');
};
function nextPage_4() {
	index = 0;
	body.style.background = '#0d0f2d';
	menu.style.background = colorB;
	menuBtn.style.background = colorB;
	nextPageBtn.classList.remove('nextPageBtnStyle');
	nextPageBtn.classList.remove('nextPageBtnStyle1');
	nextPageBtn.classList.remove('nextPageBtnStyle2');	
	linkOfPageElem[0].classList.add('page_active');
	linkOfPageElem[1].classList.remove('page_active');
	linkOfPageElem[2].classList.remove('page_active');
	linkOfPageElem[3].classList.remove('page_active');
	box1.classList.add('box_active');
	box3.classList.remove('box_active');
	box4.classList.remove('box_active');
	box2.classList.remove('box_active');
};
