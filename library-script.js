// Step 1) create array to store library books
const myLibrary = [];

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


/* Step 3) Write a function to take the parameters, create a NEW book with those parameters, assign it a unique ID using crypto.randomUUID() and add the new book to the myLibrary array 
*/ 

function addBookToLibrary(title,author,pageNum,read){
    //create a new object using the Book() parameters
    var newBook = new Book(title,author,pageNum,read);
    
    //push the new bookto myLibrary array
    
    //test
    //newBook.annouce();

    return myLibrary.push(newBook);

};

/* Step 4) Write a function that loops through the myLibrary array and will display each book on the webpage inside its own indivdual card 

- look up for loop vs for each method vs nesting */

const container = document.querySelector('.library-container');

       
function displayBook(){

    //for each item in myLibrary array
    myLibrary.forEach((book) =>{ 
        //console.table(book)
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
       
        //append that div into the main container
        container.appendChild(divItem);
        
        divItem.appendChild(bookTitleDisplay);
        divItem.appendChild(bookAuthorDisplay);
        
        divItem.appendChild(bookPageDisplay);
        divItem.appendChild(bookReadStatus);

    });
};

/* Step 5) Create a button that will open a form allowing users to add a new book and add it to the library. */
const createNewBook = document.querySelector('#create');
const bookForm = document.querySelector('form')

//set visibility of form to none
bookForm.style.display ='none';

createNewBook.addEventListener("click",() =>{
    //make form show up
    bookForm.style.display ='contents';

} )

//TEST BOOKS
addBookToLibrary('Fourth Wing','Rebecca Yarros',512,'read');
addBookToLibrary('A Court of Thorns and Roses','Sarah J. Maas',432,'read');
addBookToLibrary('Dune','Frank Herbert',412,'not read');

displayBook();


/* Step 6) Create a button that will be on each display card to remove the book from the library */ 
/* Step 7) Add a button that will be on each display card to change the read status */
