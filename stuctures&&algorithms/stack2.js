var letters = [];
var word = 'freeCodeCamp';
var rword = '';

// function: push, pop
for (var i = 0; i < word.length; i++) {
    return letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letters.pop(i);
}

if (rword === word) {
    console.log(word + 'is a palindrome');
} else {
    console.log(word + 'is not a palindrome');
}

// create a stacks
// - push
// - pop
// - size
// - peek
function stacks() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.size = function() {
        return this.count;
    };

    this.peek = function() {
        return this.storage[this.count - 1];
    };
}
