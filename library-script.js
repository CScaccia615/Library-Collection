/* Step 1) Make a Book object constructor that has the following key/value pairs:
    1)book title
    2)book author
    3)page count
    4)read status
    5)a unique ID using crypto.randomUUID() <-- how do we do this tbd

    Step 2) Create a function that will take parameters and create a new book from the Book Object, and store it in the myLibraryArray

    Step 3) create table - https://stackoverflow.com/questions/72527457/how-to-create-an-html-table-from-an-array-of-objects

   
    Step 5) create a delete book button that when clicked will remove the book from the myLibrary array and dislay 
         - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the unique id of the respective book object.
   
        Plan: 
        - create a delete btn in the DOM
        - set data-id for bookRow value to equal Book.bookID <-- this will happen in displayBook() for now;
        - create a forEach loop (similar to displayBooks) that will apply a onClick instance to each delete button
        
        Onclick event: 
        when delete button is clicked do the following: 
            - run a filter on the myLibrary[] array to the associated bookID
            - delete associated entry in myLibrary[]
            - Run displayBook() to update display
   */


const myLibrary = [
    // //array to store book objects
    // {
    //     title: "A Court of Thorns and Roses",
    //     author: "Sarah J. Maas",
    //     pageNumber: 448,
    //     readStatus: "read",
    //     bookID: crypto.randomUUID()
    // },

    // {
    //     title: "Fourth Wing",
    //     author: "Rebecca Yarros",
    //     pageNumber: 528,
    //     readStatus: "read",
    //     bookID: crypto.randomUUID()
    // },

]



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

/* Step 6) create a edit book button that will change its read status
  - To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.
*/

// protoype function for editing book
function editBook (readStatus) {

}

function addBookToLibrary(title,author,pageNumber,readStatus){

   const book = new Book(title,author,pageNumber,readStatus);

    myLibrary.push(book)

    return book
    //displayBooks()
}

const table = document.getElementById("library-table")
      
function displayBooks(Book){
    for(Book of myLibrary){
        const newRow = document.createElement("tr");
        newRow.setAttribute("class","bookItem")
        //set data attribute
        newRow.dataset.id = Book.bookID

        //create td 
        const tdBook = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPageLength = document.createElement("td");
        const tdReadStatus = document.createElement("td");
        const tdEditBtn = document.createElement("td");
        const tdDeleteBtn = document.createElement("td");

        tdBook.textContent = Book.title;
        tdAuthor.textContent = Book.author;
        tdPageLength.textContent = Book.pageNumber;
        tdReadStatus.textContent = Book.readStatus;
        


        //move this to a object prototype and connect it to Book constructor
        const editBtn =  document.createElement("button");
        const editBtnTxt = document.createTextNode("Edit Book");
        editBtn.appendChild(editBtnTxt);

     

       //Move this to a object prototype and connect to Book Constructor
        const deleteBtn =  document.createElement("button");
        deleteBtn.setAttribute('class','deleteButton')
        const deleteBtnTxt = document.createTextNode("Remove Book");
        deleteBtn.appendChild(deleteBtnTxt);

        //delete button event
        deleteBtn.addEventListener("click",() => {
           // test alert
            //alert(`table id is ${newRow.dataset.id}`);

            //create variable that equals the newRow.dataset.id 
            
            //filter array to find match
            let deleteFilter =  myLibrary.findIndex(Book => Book.bookID ===newRow.dataset.id)
            //testing filter
            if(deleteFilter !== -1) {
                myLibrary.splice(deleteFilter,1);
                displayBooks(myLibrary);
            }
           
        })

        //append buttons to correct td
        tdEditBtn.appendChild(editBtn);
        tdDeleteBtn.appendChild(deleteBtn);
       
        //append td's to new row
        newRow.appendChild(tdBook);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPageLength);
        newRow.appendChild(tdReadStatus);
        newRow.appendChild(tdEditBtn);
        newRow.appendChild(tdDeleteBtn);

        //apend new row to table
        table.appendChild(newRow);
        
   }

}

/* Step 4)  
        a) create a "add book" button that brings up a form that will allow users to input the details for a new book

        b) using event.preventDefault() prevent the submit button from sending it to a server and instead store it locally 
        - documentation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
                        https://www.w3schools.com/jsref/event_preventdefault.asp


        c 
            pt 1) when submit button is pressed - reset the table to be blank
            pt 2) take the data from the form and use it to add the book to the library via the addBookToLibrary function
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

function submitBook(event) {
    

            let title = document.getElementById("book_title").value;
            let author = document.getElementById("book_author").value;
            let pageNum = document.getElementById("page_number").value;
            let readStatus = document.querySelector('input[name="read_status"]:checked').value;
          
            table.innerHTML='';
            addBookToLibrary(title,author,pageNum,readStatus);
             displayBooks(myLibrary)
            //d reset form
           document.getElementById("bookForm").reset();
           
          
    }






addNewBook.addEventListener("click", stopSubmit);
addNewBook.addEventListener("click", submitBook);

addBookToLibrary("A Court of Thorns and Roses","Sarah J. Maas",448,"read");
addBookToLibrary("Fourth Wing","Rebecca Yarros",528,"read")

displayBooks(myLibrary)
