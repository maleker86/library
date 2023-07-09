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

function addBook(book) {
  //console.log("I understand this as " + book);
  // myLibrary.push(bookTitle.info());
  console.log(book);
  myLibrary.push(book);
  console.log(myLibrary);
}

function displayBooks() {
  for (element in myLibrary) {
  let book = document.createElement("div");
    
    console.log(myLibrary[element]);
    BookCase.append(book);
    book.setAttribute('class', 'book');
    book.innerText = myLibrary[element].title + "\n" +myLibrary[element].author +  "\n" +myLibrary[element].pages.toString() +  "\n" +myLibrary[element].read;

    }
    myLibrary = []; 
} 

let theHobbit = new Book("The Hobbit","JRR Tolkien",295, "not read yet");
let newMoon = new Book("New Moon", "Stephanie Meyer", 350, "read")

addBook(theHobbit);
addBook(newMoon);

//console.log(theHobbit.info());
//console.log(newMoon.info());

// console.log(theHobbit.valueOf());