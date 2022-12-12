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

// Находим форму в DOM
let formElement = document.querySelector('.profile__info');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.profile__title');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.profile__subtitle');// Воспользуйтесь инструментом .querySelector()
let PopupNameInput = document.querySelector('.p-inpname');
let PopupJobInput = document.querySelector('.p-inpjob');
let savePopupButton = document.querySelector('.subbutton');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (open) => { // Для каждой вешаем обработчик событий на клик
      open.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup__bgactive'); // Добавляем класс 'active' для фона
      popup.classList.add('popup_opened'); // И для самого окна
      PopupNameInput.value = nameInput.textContent;
      PopupJobInput.value = jobInput.textContent;
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('popup__bgactive'); // Убираем активный класс с фона
  popup.classList.remove('popup_opened'); // И с окна
});

function save(event) {
  event.preventDefault();
  PopupNameInput.textContent = nameInput.value;
  PopupJobInput.textContent = jobInput.value;
  closePopupButton();
}
formElement.addEventListener('submit', save); 
