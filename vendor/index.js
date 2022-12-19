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
const formElement = document.querySelector('.popup');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let names = document.querySelector('.profile__title');// Воспользуйтесь инструментом .querySelector()
let job = document.querySelector('.profile__subtitle');// Воспользуйтесь инструментом .querySelector()
let popupNameInput = document.querySelector('.p-inpname');
let popupJobInput = document.querySelector('.p-inpjob');
let savePopupButton = document.querySelector('.subbutton');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup__bgactive'); // Добавляем класс 'active' для фона
      popup.classList.add('popup_opened'); // И для самого окна
      popupNameInput.value = names.textContent;
      popupJobInput.value = job.textContent;
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('popup__bgactive'); // Убираем активный класс с фона
  popup.classList.remove('popup_opened'); // И с окна
});

function save(e) {
  e.preventDefault();
  popupNameInput.textContent = names.value;
  popupJobInput.textContent = job.value;
  closePopupButton();
}
formElement.addEventListener('submit', save); 
