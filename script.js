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
// const bookButton = document.getElementById("new_book");
document.getElementById("new_book").addEventListener("click", showForm);
document.getElementById("submit-new_book").addEventListener("click", submitForm);
let form = document.querySelector(".form_container");
  let form_results = document.querySelector("#book_form");


let myLibrary = []; 
let myLibraryHolding = [];

function showForm() {
    if (form.style.display === "flex") {
        form.style.display = "none";
        BookCase.style.display = "grid";
    } else {
      form.style.display = "flex";
      BookCase.style.display = "none";
    }
}

function submitForm(necessary) {
  necessary.preventDefault();
  console.log("I did do this!");

  let form_book = (form_results.elements.book_title.value);
  form_book = new Book(form_results.elements.book_title.value, form_results.author.value, form_results.page_count.value, form_results.read_status.value);
    let error_msg = document.getElementById("form_error_message");
  
  if (form_results.elements.book_title.value == '') {
    error_msg.innerText = "Please provide information." + `\n`;
    return false;
  } 
    // console.log(form_results.book_title.value);
  addBook(form_book);
  // Book(this.book_title = title;
  // this.author = author;
  // this.page_count = pages;
  // this.read_status = read;)
  showForm();
  error_msg.innerText = "";
  return false;
}

function Book(title, author, pages, read) {
  
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  // this.book_title = title;
  // this.author = author;
  // this.page_count = pages;
  // this.read_status = read;
  
  this.info = function() {
    console.log(title, `by ${author},`, `${pages} pages,`,read);
  }
}

function addBook(book) {
  //console.log("I understand this as " + book);
  // myLibrary.push(bookTitle.info());
  //console.log(book);
  myLibraryHolding.push(book);
  console.log("holding " + myLibraryHolding);
  form_results.reset();
  displayBooks();
}

function displayBooks() {
  for (element in myLibraryHolding) {
  let book = document.createElement("div");
  let btn_delete = document.createElement("button");

    if (myLibraryHolding[element] === `""`) {
      return;
    }
    console.log(myLibraryHolding[element]);
    BookCase.append(book);
    book.setAttribute('class', 'book');
    book.innerText = myLibraryHolding[element].title + "\n" +myLibraryHolding[element].author +  "\n" +myLibraryHolding[element].pages.toString() +  "\n" +myLibraryHolding[element].read;

    
    book.append(btn_delete);
    btn_delete.innerText = "Delete Book";
    btn_delete.addEventListener("click", deleteBook);
    
    myLibrary.push(myLibraryHolding[element]);
    }
  
    console.log(myLibrary);
    myLibraryHolding = []; 
} 

function deleteBook() {
  this.parentNode.parentNode.removeChild(this.parentNode);
} 

let theHobbit = new Book("The Hobbit","JRR Tolkien",295, "not read yet");
let newMoon = new Book("New Moon", "Stephanie Meyer", 350, "read");

addBook(theHobbit);
addBook(newMoon);