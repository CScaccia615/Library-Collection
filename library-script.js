/* Step 1) Make a Book object constructor that has the following key/value pairs:
    1)book title
    2)book author
    3)page count
    4)read status
    5)a unique ID using crypto.randomUUID() <-- how do we do this tbd

    Step 2) Create a function that will take parameters and create a new book from the Book Object, and store it in the myLibraryArray

    Step 3) create table - https://stackoverflow.com/questions/72527457/how-to-create-an-html-table-from-an-array-of-objects

    Step 4)  
        a) create a "add book" button that brings up a form that will allow users to input the details for a new book

        b) using event.preventDefault() prevent the submit button from sending it to a server and instead store it locally 
        - documentation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
                        https://www.w3schools.com/jsref/event_preventdefault.asp


        c 
            pt 1) when submit button is pressed - reset the table to be blank
            pt 2) take the data from the form and use it to add the book to the library via the addBookToLibrary function
                documentation: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData


   
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

    Step 6) create a edit book button that will change its read status
  - To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.

  Plan:
    - on click event must match bookid to row id
    -once match is found run the Book prototype function 
    - make Book prototype function
        a) if read status = read -> change status to not read
        b) if read status = not read -> change status to read
        c) update display to reflect change
    
*/

const myLibrary = []

//this is the prototype

function Book(title,author,pageNumber,readStatus) {
    //the constructor
    this.title = title,
    this.author = author,
    this.pageNumber = pageNumber,
    this.readStatus = readStatus,
    this.bookID = crypto.randomUUID();
}


function addBookToLibrary(title,author,pageNumber,readStatus){

   const book = new Book(title,author,pageNumber,readStatus);

    myLibrary.push(book)

    return book
    //displayBooks()
}




Book.prototype.editStatus = function(){
    //test
    //console.log("Hello, I am a book!"); 

    //6a
    if(this.readStatus == "read"){
        this.readStatus = "not read"
        //6c
        table.innerHTML='';
        displayBooks(myLibrary);
        
    }
    //6b
    else if(this.readStatus == "not read"){
        this.readStatus="read"
        //6c
        table.innerHTML='';
        displayBooks(myLibrary);
    }
};

const table = document.getElementById("library-table")


//refresh table function
const tHead = document.getElementById("bookInfo")
function refreshTable(){
    tHead.innerHTML='';
    //create header for table
    
    const thTitle = document.createElement("th");
    const thAuthor = document.createElement("th");
    const thPage = document.createElement("th");
    const thRead = document.createElement("th");
    const thOpt = document.createElement("th");

    //header attributes & inline styles
    thTitle.style.width = "30%";
    thAuthor.style.width = "20%";
    thPage.style.width = "20%";
    thRead.style.width = "10%"

    thOpt.setAttribute("colspan", "2");
    thOpt.style.width = "20%";

    thTitle.textContent="Book Title";
    thAuthor.textContent="Book Author";
    thPage.textContent="Page Length";
    thRead.textContent="Read Status";

    //append th to thead
    tHead.appendChild(thTitle);
    tHead.appendChild(thAuthor);
    tHead.appendChild(thPage);
    tHead.appendChild(thRead);
    tHead.appendChild(thOpt);

    //append thead to table
    table.appendChild(tHead);

}

function displayBooks(Book){
    refreshTable();
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

        //create edit button
        const editBtn =  document.createElement("button");
        const editBtnTxt = document.createTextNode("Edit Book");
        editBtn.appendChild(editBtnTxt);
        editBtn.setAttribute("class","editBtn")

        //edit button click event
        editBtn.addEventListener("click",() =>{
            Book.editStatus();
        })

        tdEditBtn.appendChild(editBtn);

        //create delete button
        const deleteBtn =  document.createElement("button");
        deleteBtn.setAttribute('class','deleteButton')
        const deleteBtnTxt = document.createTextNode("Remove Book");
        deleteBtn.appendChild(deleteBtnTxt);
        deleteBtn.setAttribute("class","deleteBtn")

        //delete button click event
        deleteBtn.addEventListener("click",() => {
            //create variable that equals the newRow.dataset.id 
            //filter array to find match
            let deleteFilter =  myLibrary.findIndex(Book => Book.bookID === newRow.dataset.id)
            //testing filter
            if(deleteFilter !== -1) {
                myLibrary.splice(deleteFilter,1);
                table.innerHTML='';
                displayBooks(myLibrary);
            }
           
        })

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



//4a
const showForm = document.querySelector('#create');
const bookForm = document.querySelector('form')

//set visibility of form to none
bookForm.style.display ='none';

showForm.addEventListener("click",() =>{
    //make form show up
    bookForm.style.display ='contents';
    showForm.style.display='none';

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
          
        
            addBookToLibrary(title,author,pageNum,readStatus);
            table.innerHTML=''
            //refresh table
            refreshTable();
            //display array
             displayBooks(myLibrary)
            //d reset form
           document.getElementById("bookForm").reset();

           
          
    }


addNewBook.addEventListener("click", stopSubmit);
addNewBook.addEventListener("click", submitBook);

addBookToLibrary("A Court of Thorns and Roses","Sarah J. Maas",448,"read");
addBookToLibrary("Fourth Wing","Rebecca Yarros",528,"read")

displayBooks(myLibrary)


