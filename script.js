//script 

const BookCase = document.querySelector(".bookcase");
// const bookButton = document.getElementById("new_book");
let new_book_button = document.getElementById("new_book");
let form = document.querySelector(".form_container");
let form_results = document.querySelector("#book_form");
new_book_button.addEventListener("click", showForm);
document.getElementById("submit-new_book").addEventListener("click", submitForm);

let myLibrary = []; 
let myLibraryHolding = [];

function showForm() {
    if (form.style.display === "flex") {
      new_book_button.innerText = "NEW BOOK";
        form.style.display = "none";
        BookCase.style.display = "grid";
    } else {
        new_book_button.innerText = "BACK TO LIBRARY";
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
  console.log(`the book form is: ` + form_book);

  // prevent even one empty field
  // if (Object.values(form_book).includes('')) {
  //   error_msg.innerText = "Please provide information." + `\n`;
  //   return false;
  // } 

  // need a title at least 
  if (form_results.elements.book_title.value === '') {
    error_msg.innerText = "Please provide a book title." + `\n`;
    return false;
  }
  
    // console.log(form_results.book_title.value);
  addBook(form_book);
  showForm();
  error_msg.innerText = "";
  return false;
}

class Book {
  
  constructor(title, author, pages, read) {
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
  let button_house = document.createElement("div");
  let btn_delete = document.createElement("button");
  let btn_read = document.createElement("button");

    console.log(myLibraryHolding[element]);
    BookCase.append(book);
    book.setAttribute('class', 'book');

    if (myLibraryHolding[element].title !== '') {
      let p = document.createElement("p");
      book.append(p);
      p.innerHTML = `<span>Title: </span>` + myLibraryHolding[element].title;
    } 
    if (myLibraryHolding[element].author !== '') {
      let p = document.createElement("p");
      book.append(p);
      p.innerHTML = `<span>Author: </span>` + myLibraryHolding[element].author;      
    }

    if (myLibraryHolding[element].pages.toString() !== '') {
      let p = document.createElement("p");
      book.append(p);
      p.innerHTML = `<span>Page Count: </span>` + myLibraryHolding[element].pages.toString();  
    }

    if (myLibraryHolding[element].read !== '') {
      let p = document.createElement("p");
      book.append(p);
      p.setAttribute('id', 'read_status');
        if(myLibraryHolding[element].read === 'read') {
          p.innerHTML = `<span>Read Status:</span> Read`;
    btn_read.innerText = "Not Read";
        } else {
          p.innerHTML = `<span>Read Status:</span> Not Read`;
    btn_read.innerText = "Read";
        }
      
      // p.innerText = "Read Status: " + myLibraryHolding[element].read;        
    }
    
    // book.innerText = 
    //   "Title: " + myLibraryHolding[element].title + "\n" + 
    //   "Author: " + myLibraryHolding[element].author +  "\n" +
    //   "Page Count: " + myLibraryHolding[element].pages.toString() +  "\n" +
    //   "Read Status: " + myLibraryHolding[element].read;


    //separate these concerns omfgggg lmao 
    book.append(button_house);
    button_house.setAttribute('class', 'book_buttons');
    
    button_house.append(btn_delete);
    btn_delete.innerText = "Delete";
    btn_delete.addEventListener("click", deleteBook);
    
    button_house.append(btn_read);
    // btn_read.innerText = "Read";

      // a.getElementsByClassName("child")[0].innerHTML
    
    btn_read.addEventListener("click", function() {
      let read_statuses = this.parentNode.previousSibling;
      console.log("Sorry to be difficult");
      // console.log(read_statuses);
      if(read_statuses.innerText === 'Read Status: Read') {
        read_statuses.innerHTML = `<span>Read Status:</span> Not Read`;
    btn_read.innerText = "Read";
        } 
      else if (read_statuses.innerText === 'Read Status: Not Read') {
        read_statuses.innerHTML = `<span>Read Status:</span> Read`;
    btn_read.innerText = "Not Read";
        } 
      else {
          return;
        }
    });
    
    myLibrary.push(myLibraryHolding[element]);
    }
  
    console.log(myLibrary);
    myLibraryHolding = []; 
} 

function deleteBook() {
  this.parentNode.parentNode.remove();
} 

function sampleBooks() {
  for (i = 0; i < 3; i++) {
    let sampleBook = new Book("Sample Title", "A diff author", 350, "read");
    addBook(sampleBook);    
  }
}

sampleBooks(); 