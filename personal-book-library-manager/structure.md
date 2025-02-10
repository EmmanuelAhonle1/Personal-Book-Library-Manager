# Book Collection Manager

A React application for managing your personal book collection. Track your reading progress, add notes, and maintain a digital library of your books.

## Project Structure

```
src/
├── components/
│   ├── BookList.jsx           # Main grid/list of books
│   ├── BookCard.jsx           # Individual book display component
│   ├── AddBookForm.jsx        # Form for adding new books
│   ├── EditBookModal.jsx      # Modal for editing book details
│   ├── SearchBar.jsx          # Search/filter functionality
│   └── BookStats.jsx          # Display reading stats/progress
│
├── hooks/
│   └── useLocalStorage.jsx    # Custom hook for persistent storage
│
├── data/
│   └── initialBooks.js        # Sample data structure
│
├── contexts/
│   └── BookContext.jsx        # Global state management
│
├── utils/
│   ├── bookValidation.js      # Input validation
│   └── formatters.js          # Date/string formatting helpers
│
└── App.jsx                    # Main component
```

## Features

- Add, edit, and delete books from your collection
- Track reading progress (reading, completed, want-to-read)
- Rate and review books
- Filter books by status or genre
- Search functionality
- Reading statistics dashboard
- Persistent storage using localStorage

## Data Structure

Each book in the collection follows this structure:

```javascript
{
  id: "uuid-here",
  title: "Book Title",
  author: "Author Name",
  genre: "Fiction",
  status: "reading", // reading, completed, want-to-read
  rating: 4,
  dateAdded: "2024-02-09",
  dateCompleted: null,
  notes: "Your thoughts...",
  coverUrl: "url-here"
}
```

## Setup

1. Clone the repository

```bash
git clone <repository-url>
cd book-collection-manager
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "uuid": "^9.0.0",
    "@heroicons/react": "^2.0.18"
  }
}
```

## Core Operations

The BookContext provides the following operations:

- `addBook(bookData)` - Add a new book to the collection
- `updateBook(id, updatedData)` - Update existing book details
- `deleteBook(id)` - Remove a book from the collection
- `updateBookStatus(id, newStatus)` - Update reading status
- `searchBooks(query)` - Search through book collection
- `filterBooks(criteria)` - Filter books by various criteria

## Component Descriptions

### BookList

- Main component displaying the collection
- Handles grid/list view toggle
- Implements sorting and filtering

### BookCard

- Displays individual book information
- Quick actions for status updates
- Rating display

### AddBookForm

- Form for adding new books
- Input validation
- Auto-completion for authors/genres

### EditBookModal

- Modal for editing book details
- Preserves existing data
- Form validation

### SearchBar

- Search through titles/authors
- Advanced filtering options
- Recent searches

### BookStats

- Reading progress overview
- Genre distribution
- Reading pace statistics

## State Management

The application uses React Context API for state management. The BookContext provides:

- Global state for book collection
- CRUD operations
- Search and filter functionality
- Persistent storage integration

## Future Enhancements

- Book recommendations based on reading history
- Integration with external book APIs
- Reading challenges and goals
- Social sharing features
- Export/import collection data

## Contributing

Feel free to submit issues and enhancement requests.
