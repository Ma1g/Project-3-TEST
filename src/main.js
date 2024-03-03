
import axios from 'axios';

//!======== Шаг №1 =============================================================
// document.addEventListener("DOMContentLoaded", function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     const categories = api(); //тут наверное api для категорий
//     // заполняем/проходим по категориям
//     categories.forEach(function (category) {
//         const li = document.createElement('li'); // создаем 'li'
//         li.textContent = category.list_name; // задаем текст категории
//         categoryList.appendChild(li); // добавляем елемент в список
//     });
// });

//!======== Шаг №2 ====добавл fetch()  ==============================================

// document.addEventListener("DOMContentLoaded", function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     fetch('https://books-backend.p.goit.global/books/category-list')
//         .then(response => response.json()) // Преобразование ответа в JSON
//         .then(categories => { // Проходим по категориям
//             categories.forEach(function (category) {
//                 const li = document.createElement('li'); // создаем 'li'
//                 li.textContent = category.list_name; // задаем текст категории
//                 categoryList.appendChild(li); // добавляем елемент в список
//             });
//         })
// });

//!======== Шаг №3 ==== меняем fetch() на Axios ==============================================

// document.addEventListener("DOMContentLoaded", function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     axios.get('https://books-backend.p.goit.global/books/category-list')
//         .then(response => {
//             const categories = response.data //днные из ответа
//             categories.forEach(function (category) {
//                 const li = document.createElement('li'); // создаем 'li'
//                 li.textContent = category.list_name; // задаем текст категории
//                 categoryList.appendChild(li); // добавляем елемент в список
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data;', error);
//         })
// });

//!======== Шаг №4 ==== берем API из другого файла ==============================================
// import { booksApi } from './render'; // импорт Api

// document.addEventListener("DOMContentLoaded", function () {

//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     booksApi().then(categories => { // используем функцию booksApi для получения данных
//         categories.forEach(function (category) {
//             const li = document.createElement('li'); // создаем 'li'
//             li.textContent = category.list_name; // задаем текст категории
//             categoryList.appendChild(li); // добавляем елемент в список
//         });
//     })
//         .catch(error => {
//             console.error('Error fetching data;', error);
//         })
// });

//!======== Шаг №5 ==== названия категорий делаем кнопкой/ссылкой ==============================================

// import { booksApi } from './render'; // импорт Api

// document.addEventListener("DOMContentLoaded", function () {

//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     booksApi().then(categories => {
//         console.log(categories);
//         categories.forEach(function (category) {
//             const li = document.createElement('li');
//             li.textContent = category.list_name; // задаем текст категории
//             li.addEventListener('click', function () { // обработчик событий на клик
//                 document.getElementById('container').innerHTML = ''; //Очищаем контейнер перед отображением новых данных
//                 booksApibyCategory(category.list_name) // Получаем книги по выбранной категории
//                     .then(books => { // Получаем книги по выбранной категории
//                         books.forEach(book => {
//                             const bookElement = document.createElement('div'); // Создаем элемент для каждой книги
//                             bookElement.textContent = book.title; // или book.name что у нас в массиве?
//                             document.getElementById('container').appendChild(bookElement);
//                         });
//                     });
//             });

//             categoryList.appendChild(li);
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// });

//!======== Шаг №6 ==== меняем <li> на <p> === с комментарием ===========================================

// import { booksApi } from './render';

// document.addEventListener("DOMContentLoaded", function () { // Слушаем событие загрузки DOM
//     const categoryList = document.getElementById("category-list"); // Получаем элемент списка категорий по его id

//     booksApi().then(categories => { // Вызываем функцию booksApi, которая возвращает промис с категориями
//         categories.forEach(function (category) { // Проходимся по каждой категории
//             const paragraph = document.createElement('p'); // Используем тег р вместо li
//             paragraph.textContent = category.list_name; // Задаем текст элемента р равным названию категории

//             paragraph.addEventListener('click', function () {      // Добавляем обработчик клика на элемент р
//                 document.getElementById('container').innerHTML = ''; // Очищаем содержимое элемента с id 'container'

//                 booksApibyCategory(category.list_name).then(books => { // Вызываем функцию booksApibyCategory с названием категории в качестве аргумента
//                     books.forEach(book => { // Перебираем каждую книгу в полученном списке книг
//                         const bookElement = document.createElement('div'); // Создаем новый элемент div для отображения информации о книге
//                         bookElement.textContent = book.title; // Задаем текст элемента равным названию книги
//                         document.getElementById('container').appendChild(bookElement);  // Добавляем созданный элемент div в контейнер с id 'container'
//                     });
//                 });
//             });

//             categoryList.appendChild(paragraph); // Добавляем созданный элемент р в список категорий
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// });

//!======== Шаг №6 ==== меняем <li> на <p> ===============================================

// import { booksApi } from './render';

// document.addEventListener("DOMContentLoaded", function () {
//     const categoryList = document.getElementById("category-list");

//     booksApi().then(categories => {
//         categories.forEach(function (category) {
//             const paragraph = document.createElement('p');
//             paragraph.textContent = category.list_name;

//             paragraph.addEventListener('click', function (event) {
//                 event.preventDefault();
//                 document.getElementById('container').innerHTML = '';
//                 booksApibyCategory(category.list_name).then(books => {
//                     books.forEach(book => {
//                         const bookElement = document.createElement('div');
//                         bookElement.textContent = book.title;
//                         document.getElementById('container').appendChild(bookElement);
//                     });
//                 });
//             });

//             categoryList.appendChild(paragraph);
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// });

//!======== Шаг №7 ==== добавл "ALL CATEGORIES" в начало списка  ===============================================

// import { booksApi } from './render';
// //import { loadBooks } from './render';// Внести в проект
// document.addEventListener("DOMContentLoaded", function () {
//     const categoryList = document.getElementById("category-list");

//     const title = document.createElement('li');  // Создаем новый элемент 'li' для заголовка
//     title.textContent = "ALL CATEGORIES";
//     title.id = "title"; // присваиваем "title" свой id
//     categoryList.appendChild(title); // Добавляем заголовок в начало списка категорий

//     booksApi().then(categories => {
//         categories.forEach(function (category) {
//             const paragraph = document.createElement('p');
//             paragraph.textContent = category.list_name;
//             paragraph.id = "p-list";

//             paragraph.addEventListener('click', function () {
//                 document.getElementById('container').innerHTML = '';
//                 booksApibyCategory(category.list_name).then(books => {
//                     books.forEach(book => {
//                         const bookElement = document.createElement('div');
//                         bookElement.textContent = book.title;
//                         document.getElementById('container').appendChild(bookElement);
//                     });
//                 });
//             });

//             categoryList.appendChild(paragraph); // Добавляем элемент в список внутри цикла
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// });

//!======== Шаг №8 ==== замена перв addEventListener на window.onload == отрисовка списка <p> по новому ======================

// import { booksApi } from './render';
// import { loadBooks } from './render';
// window.onload = function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     const title = document.createElement('li');
//     title.textContent = "ALL CATEGORIES";
//     title.id = "title";
//     categoryList.appendChild(title);
//     booksApi().then(categories => { // Вызываем функцию booksApi, которая возвращает промис с категориями
//         categories.forEach(function (category) { // Проходимся по каждой категории
//             const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
//             paragraph.textContent = category.list_name;
//             paragraph.id = "p-list";
//             categoryList.appendChild(paragraph); // Добавляем элемент в список внутри цикла
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
//     paragraph.addEventListener('click', loadBooks); //Вызываем функцию loadBooks при клике на элемент
// };
//!======== Шаг №9 ======= вернул paragraph.addEvent на место =========================================================================================

// import { booksApi } from './render';
// import { loadBooks } from './render';
// window.onload = function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     const title = document.createElement('li');
//     title.textContent = "ALL CATEGORIES";
//     title.id = "title";
//     categoryList.appendChild(title);
//     booksApi().then(categories => { // Вызываем функцию booksApi, которая возвращает промис с категориями
//         categories.forEach(function (category) { // Проходимся по каждой категории
//             const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
//             paragraph.textContent = category.list_name;
//             paragraph.id = "p-list";
//             paragraph.addEventListener('click', loadBooks); //Вызываем функцию loadBooks при клике на элемент
//             categoryList.appendChild(paragraph); // Добавляем элемент в список внутри цикла
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// };

//!======== Шаг №10 === добавл .active для смены цвета на <p> ========================================================

// import { booksApi } from './render';
// import { loadBooks } from './render';
// window.onload = function () {
//     const categoryList = document.getElementById("category-list"); //сылка на список категорий
//     const title = document.createElement('li');
//     title.textContent = "ALL CATEGORIES";
//     title.id = "title";
//     categoryList.appendChild(title);
//     booksApi().then(categories => { // Вызываем функцию booksApi, которая возвращает промис с категориями
//         categories.forEach(function (category) {
//             const paragraph = document.createElement('p');
//             paragraph.textContent = category.list_name;
//             paragraph.id = "p-list";
//             categoryList.appendChild(paragraph);
//             // обработчик событий 'click', который вызывает функцию 'loadBooks' и добавляет класс 'active'
//             paragraph.addEventListener('click', function () {
//                 paragraph.classList.add('active');
//                 loadBooks();
//             });
//         });
//     }).catch(error => {
//         console.error('Error fetching data;', error);
//     });
// };
//!======== Шаг №11 === добавл код от Марии =============================================

import { booksApi } from './render';
import { loadBooks } from './render';

const categoryBlock = document.querySelector("#category-list");
export default categoryBlock;

window.onload = function () {
    const myCategoryList = document.getElementById("category-list");
    const title = document.createElement('li');
    title.textContent = "ALL CATEGORIES";
    title.id = "title";
    myCategoryList.appendChild(title);
    booksApi().then(categories => {
        categories.forEach(function (category) {
            const paragraph = document.createElement('p'); // создаем <p> для кажд элем списка
            paragraph.textContent = category.list_name;
            paragraph.id = "p-list";
            paragraph.addEventListener('click', loadBooks); //Вызываем функцию loadBooks при клике на элемент
            myCategoryList.appendChild(paragraph);
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
};