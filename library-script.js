// Step 1) create array to store library books
const myLibrary = [];

/* Step 2) Create a function that will take the following parameters:
   Title
   Author
   Page #
   Read

*/


function Book (title,author,pageNum,read) {
    //object safeguard 
        // if(!new.target) {
        //     throw Error("you must use the 'new' operator to call the constructor")
        // }
    
    //object constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;

    this.bookID = crypto.randomUUID()

     //console test
    this.annouce = function(){
    console.log(`${this.title} by ${this.author} is ${this.pageNum} long, and I have ${this.read} it. The ID is ${this.bookID}`)};
}


/* Step 3) Write a function to take the parameters, create a book with a unique ID using & then create a unique ID using crypto.randomUUID() and add the new book to the myLibrary array 
*/ 

function addBookToLibrary(title,author,pageNum,read){
    //create a new object using the Book() parameters

    //take parameters of Book Obj using call()
    Book.call(this,title,author,pageNum,read);    

    //set object prototype
    let newBook = new Book(title,author,pageNum,read)
    
    //push the new bookto myLibrary array
    myLibrary.push(newBook)

    //test
    newBook.annouce();
};

//const Book1 = addBookToLibrary("Fourth Wing","Rebecca Yarros",400,"Read");
//const Book2 = addBookToLibrary("The Lord of the Rings","J.R.R Tolkien",500,"Not Read");

/* Step 4) Write a function that loops through the myLibrary array and will display each book on the webpage */
function displayBooks(){
    //for loop to loop thru myLibrary
    let libLength = myLibrary.length
    for(let i=0;i < libLength; i++){
        alert(i)
    }
}

/* Step 5) Create a button that will open a form allowing users to add a new book and add it to the library. */
/* Step 6) Create a button that will be on each display card to remove the book from the library */ 
/* Step 7) Add a button that will be on each display card to change the read status */
