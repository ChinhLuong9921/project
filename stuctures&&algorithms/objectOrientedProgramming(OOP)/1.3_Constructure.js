// Constructure_____________________________
function Book(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

var book1 = new Book('Anna', 'Book One', 1998);
console.log(book1);
console.log(book1.getSummary());