// Prototype___________________________________________
function Book(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
   
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function() {
    const year = new Date().getFullYear() - this.year;
    return `And ${this.title} is ${year} years old`;
}

// Revise / Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
} 


var book1 = new Book('Anna', 'Book One', '1998');  
var book2 = new Book('Joe', 'Book Two', 2013);  
console.log(book2);
console.log(book1.getSummary());
console.log(book1.getAge());
