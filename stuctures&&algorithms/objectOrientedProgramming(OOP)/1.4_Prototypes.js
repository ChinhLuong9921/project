// Prototypes_____________________________________
function Book(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `And ${this.title} is ${years} years old`;
};

// Revise / Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
};

var book1 = new Book('Anna', 'Book One', 1998);
book1.revise(2016);
console.log(book1);