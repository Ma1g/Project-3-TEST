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

export async function loadBooksAllCat() {
    try {
        const categories = await categoryList();
        for (const category of categories) {
            console.log(`Category: ${category.list_name}`);
            const data = await topBooks(category.list_name);
            renderBooksAll(data, category.list_name);
            console.log('Books:');
            console.log(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};