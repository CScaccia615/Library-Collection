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

