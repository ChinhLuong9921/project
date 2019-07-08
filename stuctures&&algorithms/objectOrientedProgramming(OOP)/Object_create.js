// Object of Protos_______________________________________________________
const Protos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};

// Way 1___
const book1 = Object.create(Protos);
book1.title = 'Book One';
book1.author = 'Joe';
book1.year = 2014;
console.log(book1);

// Way 2___
const book2 = Object.create(Protos, {
    title: {value: 'Book Two'},
    author: {value: 'Anna'},
    year: {value: 2016}
});
console.log(book2);


