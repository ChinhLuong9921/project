// Classes__________________________________________________________
class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Subclasses(ES6 replaces ES5: Inheritance)_______________________________________________________
class Magazine extends Book {
    constructor (title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('Mag One', 'John', 2017, 3);
console.log(mag1);