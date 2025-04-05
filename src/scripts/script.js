// script.js - Initializes the application with mock library data
import { books } from '../data/books.js';
// import crypto from 'crypto';

// Library module
const myLibrary = (function() {
    let bookCollection = [...books]; // Start with mock data
    
    // Generate a unique ID
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
        // return crypto.randomUUID();
    }
    function newBook(title, author, pages, isRead) {
            id: generateId(),
            title,
            author,
            pages,
            isRead
        };
    // Add a new book to the library
    function addBook(title, author, pages, isRead) {
        newBook.title = title;
        newBook.author = author;
        newBook.pages = pages;
        newBook.isRead = isRead;
        // Check if the book already exists
        const existingBook = bookCollection.find(book => book.title === title && book.author === author);
        if (existingBook) {
            alert('This book already exists in the library.');
            return;
        }
        // Add the new book to the collection
        if (!title || !author || !pages) {
            alert('Please fill in all fields.');
            return;
        }
        if (isNaN(pages) || pages <= 0) {
            alert('Please enter a valid number of pages.');
            return;
        }
        bookCollection.push(newBook);
        return newBook;
    }
    
    // Remove a book from the library
    function removeBook(id) {
        bookCollection = bookCollection.filter(book => book.id !== id);
    }
    
    // Get a specific book by ID
    function getBook(id) {
        return bookCollection.find(book => book.id === id);
    }
    
    // Get all books
    function getAllBooks() {
        return bookCollection;
    }
    
    // Toggle read status
    function toggleReadStatus(id) {
        const book = getBook(id);
        if (book) {
            book.isRead = !book.isRead;
            return true;
        }
        return false;
    }
    
    // Public API
    return {
        addBook,
        removeBook,
        getBook,
        getAllBooks,
        toggleReadStatus
    };
})();

export default myLibrary;

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Display books function
    function displayBooks() {
        const booksGrid = document.getElementById('books-grid');
        const books = myLibrary.getAllBooks();
        
        booksGrid.innerHTML = books.map(book => `
            <div class="book-card" data-id="${book.id}">
                <h3>${book.title}</h3>
                <p>By: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p class="status ${book.isRead ? 'read' : 'not-read'}">
                    ${book.isRead ? 'Read' : 'Not Read Yet'}
                </p>
                <div class="card-buttons">
                    <button class="toggle-read" onclick="toggleRead('${book.id}')">
                        Toggle Read
                    </button>
                    <button class="remove-btn" onclick="removeBook('${book.id}')">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Modal functionality
    const modal = document.getElementById('bookModal');
    const addBtn = document.getElementById('newBookBtn');
    const closeBtn = document.querySelector('.close');
    const bookForm = document.getElementById('bookForm');

    if (addBtn) addBtn.onclick = () => modal.style.display = "block";
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    
    // Form submission
    if (bookForm) {
        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = parseInt(document.getElementById('pages').value);
            const isRead = document.getElementById('read').checked;
            
            myLibrary.addBook(title, author, pages, isRead);
            displayBooks();
            bookForm.reset();
            modal.style.display = "none";
        });
    }

    // Make functions available globally
    window.removeBook = (id) => {
        myLibrary.removeBook(id);
        displayBooks();
    };

    window.toggleRead = (id) => {
        myLibrary.toggleReadStatus(id);
        displayBooks();
    };

    // Initial display of books
    displayBooks();
});
