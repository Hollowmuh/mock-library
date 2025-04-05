// script.test.js - Unit tests for the script.js functions

// Mock the books data
jest.mock('../src/data/books.js', () => ({
    books: [
        {
            id: 'test1',
            title: 'Test Book',
            author: 'Test Author',
            pages: 100,
            isRead: false
        }
    ]
}));

// Import the library module
import myLibrary from '../src/scripts/script.js';

describe('Library Module', () => {
    test('should get all books', () => {
        const books = myLibrary.getAllBooks();
        expect(books).toHaveLength(1);
        expect(books[0].title).toBe('Test Book');
    });

    test('should add a new book', () => {
        const newBook = myLibrary.addBook('New Book', 'New Author', 200, true);
        const books = myLibrary.getAllBooks();
        
        expect(books).toHaveLength(2);
        expect(books[1].title).toBe('New Book');
        expect(books[1].author).toBe('New Author');
        expect(books[1].pages).toBe(200);
        expect(books[1].isRead).toBe(true);
        expect(books[1].id).toBeDefined();
    });

    test('should remove a book', () => {
        const books = myLibrary.getAllBooks();
        const bookToRemove = books[0];
        
        myLibrary.removeBook(bookToRemove.id);
        const updatedBooks = myLibrary.getAllBooks();
        
        expect(updatedBooks).toHaveLength(1);
        expect(updatedBooks[0].id).not.toBe(bookToRemove.id);
    });

    test('should toggle read status', () => {
        const books = myLibrary.getAllBooks();
        const book = books[0];
        const initialReadStatus = book.isRead;
        
        myLibrary.toggleReadStatus(book.id);
        
        expect(book.isRead).toBe(!initialReadStatus);
    });
});
