// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(name);
//   }
//   this.sayMarker = function() {
//     console.log(marker);
//   }
// } 

const BookCase = document.querySelector(".bookcase");

let myLibrary = []; 

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.info = function() {
    console.log(title, `by ${author},`, `${pages} pages,`,read);
  }
}

function addBook(bookTitle) {
  console.log("I understand this as " + toString(bookTitle));
  myLibrary.push(bookTitle.info());
  console.log(myLibrary);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
  let book = document.createElement("div");
    
    console.log(myLibrary[i]);
    BookCase.append(book);
    book.setAttribute('class', 'book');
    book.innerText = myLibrary[i];
  }
} 

const theHobbit = new Book("The Hobbit","JRR Tolkien",295, "not read yet");
const newMoon = new Book("New Moon", "Stephanie Meyer", 350, "read")

//console.log(theHobbit.info());
//console.log(newMoon.info());

//console.log(theHobbit.valueOf());
//console.log(Book.prototype.hasOwnProperty('valueOf'));
