// Проверяем, есть ли запись в localStorage
const closePopup = document.querySelector('.popup-auth__cross-btn');
const slowPopupFon = document.querySelector('.popup-wrapper');
const slowPopup = document.querySelector('.popup-auth');
const showPopup = document.querySelector('.header__profile-btn');
const doorPopup = document.querySelector('.popup-auth__input-submit');

if (localStorage.getItem('isFirstVisited')) {
  // Если запись есть, то не показываем окно авторизации
  console.log('Пользователь уже посещал сайт');

	slowPopupFon.style.visibility = 'hidden';
	slowPopup.style.visibility = 'hidden';
} else {
	// Если записи нет, то показываем окно авторизации
  console.log('Пользователь впервые посещает сайт');

	//Окно фон авторизации, плавное появление
	slowPopupFon.classList.add('show');	
	//Окно авторизации, плавное появление
	slowPopup.classList.add('show');	

	// Добавляем запись в localStorage
	localStorage.setItem('isFirstVisited', true);
}

showPopup.addEventListener('click', ShowPopupClick);

function ShowPopupClick(){
	slowPopupFon.style.visibility = 'visible';
	slowPopupFon.style.background = 'transparent';

	slowPopup.style.visibility = 'visible';
	slowPopup.classList.add('show');	

	closePopup.style.transition = '0.5s';
	doorPopup.style.transition = '0.5s';
}

//Закрытие окна авторизации через крестик
closePopup.addEventListener('click', ClosePopupClick);
//Закрытие окна авторизации через пустое пространство
slowPopupFon.addEventListener('click', ClosePopupClick);

function ClosePopupClick(){
	slowPopupFon.style.visibility = 'hidden';
	slowPopup.style.visibility = 'hidden';
	slowPopup.classList.remove('show');
	
	slowPopupFon.style.transition = '0s';
	closePopup.style.transition = '0s';
	doorPopup.style.transition = '0s';
}
