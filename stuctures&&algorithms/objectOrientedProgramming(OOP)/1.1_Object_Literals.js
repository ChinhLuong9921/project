// Object Literals________________________________________
const jerry = {
    name: 'jerry',
    run: function() {
        console.log(`${this.name} is running`);
    }
};

// Enhanced object literals(ES6)_________________________________
const name = 'Chich';
const cat = {
    name,  // js tự hiểu là sẽ lấy name ở trên gán xuống
    run() {
        console.log(`${this.name} is running`);
    }
};
console.log(cat);