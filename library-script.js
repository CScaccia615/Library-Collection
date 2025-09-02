const myLibrary = [
    //array to store book objects
]

/* Step 1) Make a Book object constructor that has the following key/value pairs:
    1)book title
    2)book author
    3)page count
    4)read status
    5)a unique ID using crypto.randomUUID() <-- how do we do this tbd
*/

//this is the prototype

function Book(title,author,pageNumber,readStatus) {
    //the constructor
    this.title = title,
    this.author = author,
    this.pageNumber = pageNumber,
    this.readStatus = readStatus
}

/*Step 2) Create a function that will take parameters and create a new book from the Book Object, and store it in the myLibraryArray
*/

function addBookToLibrary(title,author,pageNumber,readStatus){
    const book = new Book(title,author,pageNumber,readStatus);

    myLibrary.push(book)
    
}

addBookToLibrary("foo","bar",5,"read")

const table = document.getElementById("table")

//step 3 create table - https://stackoverflow.com/questions/72527457/how-to-create-an-html-table-from-an-array-of-objects
function displayBooks(){
    for(Book of myLibrary){
        const newRow = document.createElement("tr");
        const tdBook = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPageLength = document.createElement("td");
        const tdReadStatus = document.createElement("td");

        tdBook.textContent = Book.title;
        tdAuthor.textContent = Book.author;
        tdPageLength.textContent = Book.pageNumber;
        tdReadStatus.textContent = Book.readStatus;

        newRow.appendChild(tdBook);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPageLength);
        newRow.appendChild(tdReadStatus);
        table.appendChild(newRow);
        
    }
}

/* 
step 4a) create a "add book" button that brings up a form that will allow users to input the details for a new book

step 4b) using event.preventDefault() prevent the submit button from sending it to a server and instead store it locally 
    - documentation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
                     https://www.w3schools.com/jsref/event_preventdefault.asp

step 4c) take the data from the form and use it to add the book to the library via the addBookToLibrary function
    documentation: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
*/

//4a 
const showForm = document.querySelector('#create');
const bookForm = document.querySelector('form');

//set CSS style to none to hide form 
bookForm.style.display ='none';

//change form visibility when showForm button is clicked
showForm.addEventListener("click",() =>{
    //make form show up
    bookForm.style.display ='contents';

} )

//4b
//stop default action for submit button
const addNewBook = document.querySelector('#addBook');

//test
const output = document.getElementById("output");

function stopSubmit(event) {
    event.preventDefault()
}
//4c 
function submitBook(event){
    if(event.target === addNewBook){
        // create new form data object
        const bookFormData = new FormData(bookForm,addNewBook);
        for ([key, value] of bookFormData) {
            output.textContent += `${key}: ${value} \n`;
        }
    }
}





addNewBook.addEventListener("click", stopSubmit )
document.addEventListener("click", submitBook);
