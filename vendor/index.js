//const editButton = document.querySelector('.profile__edit-button');
//let popup = document.querySelector('.popup');
//const closeBtn = document.querySelector('.popup__p-close');

//editButton.addEventListener('click', function(e) {
//  popup.classList.add('po')
//})

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.profile__edit-button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__p-close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup__bgactive'); // Добавляем класс 'active' для фона
      popup.classList.add('popup_opened'); // И для самого окна
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('popup__bgactive'); // Убираем активный класс с фона
  popup.classList.remove('popup_opened'); // И с окна
});
console.log({openPopupButtons, popup,}); 

let formElement = document.querySelector('h1');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()