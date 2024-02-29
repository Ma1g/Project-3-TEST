
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
// import { booksApi, booksApibyCategory } from './render'; // импорт Api

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

//!======== Шаг №6 ==== меняем <li> на <p> ==============================================

import { booksApi } from './render';

document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("category-list");

    booksApi().then(categories => {
        categories.forEach(function (category) {
            const div = document.createElement('div'); // Используем тег div вместо li
            div.textContent = category.list_name;

            div.addEventListener('click', function () {
                document.getElementById('container').innerHTML = '';

                booksApibyCategory(category.list_name).then(books => {
                    books.forEach(book => {
                        const bookElement = document.createElement('div');
                        bookElement.textContent = book.title;
                        document.getElementById('container').appendChild(bookElement);
                    });
                });
            });

            categoryList.appendChild(div);
        });
    }).catch(error => {
        console.error('Error fetching data;', error);
    });
});
