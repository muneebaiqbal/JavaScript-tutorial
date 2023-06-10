console.log("This is tutorial 32")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library{
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName,user){
        if(this.bookList.includes(bookName)){
            console.log(`${bookName} present. Can be issued`);

            if(this.issuedBooks[bookName] == undefined){
                this.issuedBooks[bookName] = user;
                console.log(`${bookName} issued to ${user}`);
            }
            else{
                console.log("Book is already issued");
            }
        }
        else{
            console.log(`${bookName} not present. Cannot be issued`);
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}
let book1 = new Library(['Twilight','Dean','New Moon','Breaking Dawn','Bhagavad Gita']);
console.log(book1);
book1.issueBook("C programming","rohan");
book1.issueBook("C++ programming","rohan");
book1.issueBook("Twilight","rahul");
book1.issueBook("Breaking Dawn","sanjay");
book1.issueBook("Bhagavad Gita","Amit");
book1.returnBook('Breaking Dawn');
console.log(book1);

