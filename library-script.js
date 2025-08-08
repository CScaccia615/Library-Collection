// Step 1) create array to store library books
const myLibrary = [];
const container = document.querySelector('.library-container');

/* Step 2) Create a function that will take the following parameters:
   Title
   Author
   Page #
   Read
*/
function Book (title,author,pageNum,read) {
    //object constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;

    this.bookID = crypto.randomUUID();


     //console test
    // this.annouce = function(){
    // console.log(`${this.title} by ${this.author} is ${this.pageNum} long, and I have ${this.read} it. The ID is ${this.bookID}`)};
}

//stuck here
function Options() {
    /* delete button */
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('id','deleteBtn');

    /* edit button */
    const editBtn = document.createElement('button');
    editBtn.setAttribute('id','editBtn')
    
}

/* Step 3) Write a function to take the parameters, create a NEW book with those parameters, assign it a unique ID using crypto.randomUUID() and add the new book to the myLibrary array 
*/ 

function addBookToLibrary(title,author,pageNum,read){
    //create a new object using the Book() parameters
    var newBook = new Book(title,author,pageNum,read);
    
    //push the new bookto myLibrary array
    
    myLibrary.push(newBook);

};

/* Step 4) Write a function that loops through the myLibrary array and will display each book on the webpage inside its own indivdual card 

- look up for loop vs for each method vs nesting */


        

function displayBook(){
    //for each item in myLibrary array
  for(const book of myLibrary){
    if(book === myLibrary.at(-1)) {
       //if else statement to check if book does not exist then run loop, if it does already exist than break

       // extract the title, author, pageNum, and read status
        const bookTitle = book.title;
        const bookAuthor = book.author;
        const bookPage = book.pageNum;
        const bookStatus = book.read;

       //create div and paragraph
        const divItem = document.createElement('div');
        divItem.setAttribute('class', 'book');
        const bookReadStatus = document.createElement('p');
        const bookTitleDisplay = document.createElement('h4');
        const bookAuthorDisplay = document.createElement('p');
        const bookPageDisplay = document.createElement('p');


       // make title of book a h4 tag
        bookTitleDisplay.textContent = `${bookTitle}`;

       //author info
        bookAuthorDisplay.textContent =`By: ${bookAuthor}`;
        bookPageDisplay.textContent =`Page Length: ${bookPage}`
        bookReadStatus.textContent = `${bookStatus}`;
       
        //create button to toggle read status
  
        //append that div into the main container
        container.appendChild(divItem);
        
        divItem.appendChild(bookTitleDisplay);
        divItem.appendChild(bookAuthorDisplay);
        
        divItem.appendChild(bookPageDisplay);
        divItem.appendChild(bookReadStatus);
       
    }

    else 
        continue;
}

  }

/* Step 5) Create a button that will open a form allowing users to add a new book */
const showForm = document.querySelector('#create');
const bookForm = document.querySelector('form')

//set visibility of form to none
bookForm.style.display ='none';

showForm.addEventListener("click",() =>{
    //make form show up
    bookForm.style.display ='contents';

} )

/* Step 6) Create a button that will submit new book from form and add it to the library */
const addNewBook = document.querySelector('#addBook');

function stopSubmit(event) {
    event.preventDefault()
}

function submitBook(event) {
    if(event.target === addNewBook){            
            /* a - check the form is completely filled out */

            /* b - if it is - retreive form input values */
            var formData = new FormData(bookForm)
            
            //let data = formData
                // for(const value of data.values()){
                //     console.log(value)
                // }

                let title = formData.get("book_title");
                let author = formData.get("book_author");
                let pageNumName = formData.get("page_number");
                
                let pageNum = Number(pageNumName)
                let read = formData.get("read-status")
            /* c - run addBookToLibrary() with those values*/
            displayBook(addBookToLibrary(title,author,pageNum,read));

            //d reset form
            bookForm.reset()
    }

}

addNewBook.addEventListener("click", stopSubmit )
document.addEventListener("click", submitBook);



/* Step 7) Create a button that will be on each display card to remove the book from the library 
    Ideas: 
        - button will need to be created INSIDE each of the new books
        This leads me to have 2 options
            1) entire DOM creation of each item will need to be moved into the obejct
                Positive of Opt 1: One Object constructor so protoypial inheritance might be easier -- think this option is not as benefical as option 2
            2) Create an options Object prototype and from there when a new book is created have it pull from both the Book Object constructor AND the 
            Options Constructor (test this later on with duplicate code ?) 
                Positive of Option 2: Can store the event of remove AND edit (see step 8)

                Plan: 
                newBook would inherit the following from Book Object: 
                    -title
                    -author
                    -page count
                    -read status
                    -bookID
                newBook would inherit the following from options Object
                    -delete button
                    -edit button

                    The two above actions would happen in the addBookToLibrary function

                delete button: 
                    - delete button would somehow attach itself to the generated bookID
                        -so that when it is clicked, a filter would run a search through the myLibrary Array
                        - once the match is found, that book is deleted
                        - items will shift on the page to refelect the chamge (this should be automatic)

*/


/* Step 8) Add a button that will be on each display card to change the read status 
    - btn will be created in displayBook() 
    - event will be here
*/

//TEST BOOKS
addBookToLibrary('Fourth Wing','Rebecca Yarros',512,'read');
// addBookToLibrary('A Court of Thorns and Roses','Sarah J. Maas',432,'read');
// addBookToLibrary('Dune','Frank Herbert',412,'not read');

displayBook();
