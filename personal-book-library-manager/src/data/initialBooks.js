import TKAM_Cover from "../assets/TKAM_Cover.jpg";
import _1984_Cover from "../assets/1984_Cover.jpg";
import Gatsby_Cover from "../assets/TGG_Cover.jpg";

function createBook(
  id,
  title,
  author,
  genre,
  status,
  rating,
  dateAdded,
  dateCompleted,
  notes,
  coverUrl
) {
  return {
    id: id,
    title: title,
    author: author,
    genre: genre,
    status: status,
    rating: rating,
    dateAdded: dateAdded,
    dateCompleted: dateCompleted,
    notes: notes,
    coverUrl: coverUrl,
  };
}

const initialBooks = [
  createBook(
    crypto.randomUUID(),
    "To Kill a Mockingbird",
    "Harper Lee",
    "Fiction",
    "Read",
    5,
    "2021-01-01",
    "2021-01-15",
    "A classic novel.",
    TKAM_Cover
  ),
  createBook(
    crypto.randomUUID(),
    "1984",
    "George Orwell",
    "Dystopian",
    "Read",
    4,
    "2021-02-01",
    "2021-02-20",
    "A thought-provoking book.",
    _1984_Cover
  ),
  createBook(
    crypto.randomUUID(),
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "Classic",
    "Reading",
    3,
    "2021-03-01",
    null,
    "Currently reading.",
    Gatsby_Cover
  ),
];

export { initialBooks, createBook };
