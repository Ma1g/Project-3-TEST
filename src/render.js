import axios from 'axios';

export async function booksApi() {
    const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';

    //   const url = ${BASE_URL};

    const options = {
        method: 'GET',
    };

    const res = await axios.get(`${BASE_URL}`, options);
    return res.data;
}

console.log(booksApi());

export async function loadBooks(category) {
    const BASE_URL = 'https://books-backend.p.goit.global/books/category';

    const options = {
        method: 'GET',
        params: {
            category: category,
        },
    };

    const res = await axios.get(BASE_URL, options);
    return res.data;
}

console.log(loadBooks('Combined Print and E-Book Nonfiction'));
