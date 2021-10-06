// Переменные
let sliderImgs = document.querySelectorAll('.sim-slider-element');// все изображения, которые будут переключаться
let dotcontainer = document.querySelector('.sim-slider-dots');// блок с точками
// объявление обработчиков нажатия на стрелки
document.querySelector('.sim-slider-arrow-left').onclick = sliderBack;
document.querySelector('.sim-slider-arrow-right').onclick = sliderNext;
// создание точек
for (var j = 0; j < sliderImgs.length; j++){
	dotcontainer.insertAdjacentHTML('beforeend', '<img class="sim-dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/1200px-Bullet_%28typography%29.svg.png">');
}

let dots = document.querySelectorAll('.sim-dot');// выборка всех точек
let counter = -1;                               // счётчик

// console.log(sliderImgs.length);
// console.log(dots.length);

// функция проходится и удаляет все классы актичвности у элементов и точек
function removeClass(){
	for (var i = sliderImgs.length - 1; i >= 0; i--) {
		sliderImgs[i].classList.remove('__slider-active');
		dots[i].classList.remove('__sim-dot-active');
	}
}
// переключить изображения вперёд
function sliderNext(){
	removeClass();

	
	// если счётчик дойдёт до конца массива, то он обнулиться
	if (counter < sliderImgs.length-1){
		counter++;
	}else{
		counter = 0;
	}
	
	// console.log(counter);
	sliderImgs[counter].classList.add('__slider-active'); //добавление класса активности элементу
	dots[counter].classList.add('__sim-dot-active');                                   //точке
	document.querySelector('.gif').classList.add('gifNone'); // удаленеи класса у изображения-превью
}
// переключение назад
function sliderBack(){
	removeClass();
	// если счетчик дойдёт до 0, то ему присвоится индекс последнего элемента
	if (counter > 0) {
		counter = counter-1;
	}else{
		counter = sliderImgs.length - 1;
	}

	// console.log(counter);
	// см. выше
	sliderImgs[counter].classList.add('__slider-active');
	dots[counter].classList.add('__sim-dot-active');
	document.querySelector('.gif').classList.add('gifNone');	
}