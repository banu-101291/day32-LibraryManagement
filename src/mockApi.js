const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  // Add more mock data as needed
];

export const getAllBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 500);
  });
};

export const createBook = (book) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBook = { ...book, id: books.length + 1 };
      books.push(newBook);
      resolve(newBook);
    }, 500);
  });
};

export const updateBook = (book) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        books[index] = book;
        resolve(book);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const deleteBook = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === id);
      if (index !== -1) {
        const deletedBook = books.splice(index, 1)[0];
        resolve(deletedBook);
      } else {
        resolve(null);
      }
    }, 500);
  });
};
