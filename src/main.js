import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';

//!======== Вариант №1 =============================================================
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

//!======== Вариант №2 ====добавл fetch()  ==============================================

document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("category-list"); //сылка на список категорий
    fetch('https://books-backend.p.goit.global/books/category-list')
        .then(response => response.json()) // Преобразование ответа в JSON
        .then(categories => { // Проходим по категориям
            categories.forEach(function (category) {
                const li = document.createElement('li'); // создаем 'li'
                li.textContent = category.list_name; // задаем текст категории
                categoryList.appendChild(li); // добавляем елемент в список
            });
        })
});