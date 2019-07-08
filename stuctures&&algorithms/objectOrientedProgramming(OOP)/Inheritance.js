// Inheritance________________________________________________________________
function Book(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
}
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
function Magazine(author, title, year, month) {
    Book.call(this, author, title, year);
    this.month = month;
}
Magazine.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('John', 'Mag One', 2016, 12);

console.log(mag1);
console.log(mag1.getSummary());

// Nếu function của constructor tạo bên ngoài sẽ ở trong proto
// khi kế thừa cần phải create như dòng 18 mới gọi function về được