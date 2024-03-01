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