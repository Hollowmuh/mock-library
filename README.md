# library-app

This project is a library framework designed to manage and display a collection of books. It provides a simple interface for users to browse through the available titles and access detailed information about each book.

## Project Structure

```
library-app
├── src
│   ├── styles
│   │   └── main.css        # Styles for the library framework
│   ├── scripts
│   │   └── script.js       # Initializes the application with mock library data
│   ├── pages
│   │   ├── index.html      # Main entry point for users
│   │   └── catalog.html     # Displays the catalog of books
│   └── data
│       └── books.js        # Exports an array of mock book objects
├── tests
│   └── script.test.js      # Unit tests for the script.js functions
├── package.json            # Configuration file for npm
└── README.md               # Documentation for the project
```

## Getting Started

To get started with the library framework, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/pages/index.html` in your web browser to view the application.

## Usage

The library framework allows users to view a catalog of books. The mock data is initialized in `script.js`, and the styles are defined in `main.css`. You can modify the mock data in `src/data/books.js` to customize the library's content.

## Running Tests

To run the unit tests for the application, use the following command:
```
npm test
```

This will execute the tests defined in `tests/script.test.js` to ensure that the application functions as expected.