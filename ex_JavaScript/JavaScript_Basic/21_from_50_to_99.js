var Stack = function() {
    this.storage = {};
    this.count = 0;

    this.add = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.check = function() {
        function _check() {
            var result = this.storage[this.count];
            if (result >= 50 && result <= 99) {
                return true;
            }
            this.count--;
            _check();
        }
        _check();

        /*
        var result = this.storage[this.count];
        if (result >= 50 && result <= 99) {
            return true;
        }


        this.count--;
        check();

        
        while (this.count--) {
            var result = this.storage[this.count];
           // result + ' : ' + (result <= 50 && result >= 99);
        }
        //this.count--;
        //var result = (this.storage[this.count]);
        //result + ' : ' + (result <= 50 && result >= 99);
        
        var value = Object.entries(this.storage);
        console.log(value);
        value.forEach(function() {
            var ele = 
            console.log(ele >= 50 && ele <= 99);
        });

        //return result;
        

        for (let i = 0; i < this.count; i++) {
            function value(p) {
                let { i: ele} = p;
                return ele;
            }
        }
        */


    };

    this.size = function() {
        return this.count;
    };
}

var myStack = new Stack();
myStack.add(5);
myStack.add(70);
myStack.add(100);
console.log(myStack.check());
console.log(myStack.size());
console.log(myStack);
