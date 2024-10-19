//selecting and gathering elements
const form = document.querySelector(".myform")
const addButton = document.querySelector(".submission");
const input = document.querySelector(".input");
const bookName = document.querySelector(".bookname");
const Author = document.querySelector(".author");
const page = document.querySelector(".pagenumber");
const stat = document.querySelector(".isread");
const lib = [];
const container = document.querySelector(".books");

let i = 0;

//creating object

function book(name, author, pages, isread) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = isread;
}

//creating Array of objects

let makeLib = function () {
  let tbookName = bookName.value;
  let tAuthor = Author.value;
  let tpage = page.value;
  let tstat = stat.checked;
  const bookr = new book(tbookName, tAuthor, tpage, tstat);
  //if (i < 6) {
    lib.push(bookr);
    //i = i + 1;
  //}
  bookName.value = "";
  Author.value = "";
  page.value = "";
  stat.checked = false;
};

function addBookToLibrary(event) {
  event.preventDefault();
  makeLib();
  displayBooks();
}

form.addEventListener("submit", addBookToLibrary);

/*showing books on page*/

//chat gpt code

let displayBooks = function () {
  // Clear the container before displaying updated list of books
  container.innerHTML = "";

  // Loop through the library and create a card for each book
  lib.forEach((book, index) => {
    let card = document.createElement("div");
    card.classList.add(`cards`);
    let rs = book.readStatus

    // Create the content for the book card
    let cardInfo = `
      <h3>Book</h3>
      <p>Name: ${book.name}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Reading Status: ${book.readStatus ? "Read" : "Not Read"}</p>
    `;

    // Add the content to the card and append to container
    card.innerHTML = cardInfo;
    container.appendChild(card);
    const remove = document.createElement("button");
    remove.innerText = "delete";
    remove.classList.add("removebtn");
    card.appendChild(remove);
    //delete
    card.querySelector(".removebtn").addEventListener("click", () => {
    deleteBook(index);
  });

  //togle
  const toggle = document.createElement("button");
  toggle.classList.add("togglebtn");
  card.appendChild(toggle)
  toggle.innerText = "chng"
  function toggleRead(){
    if(rs == true){
      book.readStatus = false
    }else if(rs == false){
      book.readStatus = true
    }
    displayBooks()
  }
  
  card.querySelector(".togglebtn").addEventListener("click", () => {
    toggleRead();
  });
  
  });
};
function deleteBook(index) {
  lib.splice(index, 1);
  displayBooks();
}

