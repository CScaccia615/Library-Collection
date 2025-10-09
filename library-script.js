const myLibrary = [
    //array to store book objects
    {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        pageNumber: 448,
        readStatus: "read",
        bookID: crypto.randomUUID()
    },

    {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        pageNumber: 528,
        readStatus: "read",
        bookID: crypto.randomUUID()
    },

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
    this.readStatus = readStatus,
    this.bookID = crypto.randomUUID();
}

// Book.prototype.updateBook = displayBooks();

/*Step 2) Create a function that will take parameters and create a new book from the Book Object, and store it in the myLibraryArray
*/

function addBookToLibrary(title,author,pageNumber,readStatus){

   const book = new Book(title,author,pageNumber,readStatus);

    myLibrary.push(book)

    return book
    //displayBooks()
}



const table = document.getElementById("table")

//step 3 create table - https://stackoverflow.com/questions/72527457/how-to-create-an-html-table-from-an-array-of-objects
function displayBooks(Book){
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


step 4c pt 1) when submit button is pressed - reset the table to be blank

step 4c pt 2) take the data from the form and use it to add the book to the library via the addBookToLibrary function
    documentation: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

*/

//4a
const showForm = document.querySelector('#create');
const bookForm = document.querySelector('form')

//set visibility of form to none
bookForm.style.display ='none';

showForm.addEventListener("click",() =>{
    //make form show up
    bookForm.style.display ='contents';

} )

//4b
const addNewBook = document.querySelector('#addBook');

function stopSubmit(event) {
    event.preventDefault()
}

//4c pt 1 & 2 --breaking when displayBooks() is activated -- why?

function submitBook(event) {
    

            let title = document.getElementById("book_title").value;
            let author = document.getElementById("book_author").value;
            let pageNum = document.getElementById("page_number").value;
            let readStatus = document.getElementById("book_read").value;
           
          
            
            addBookToLibrary(title,author,pageNum,readStatus);
            
            //d reset form
           document.getElementById("bookForm").reset();
           displayBooks(myLibrary)
    }



addNewBook.addEventListener("click", stopSubmit);
addNewBook.addEventListener("click", submitBook);