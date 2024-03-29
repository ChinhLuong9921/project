// queue________________________
// print
// enqueue
// dequeue
// front
// size
// isEmpty
// priorityQueue___________________________
// printCollection
// isEmpty
// enqueue
// dequeue
// front
// size

function queue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function() {
        return collection.push();
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

function priorityQueue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.isEmpty = function() {
        return (collection.length === 0);
    };

    this.enqueue = function(ele) {
        if (this.isEmpty(ele)) {
            collection.push(ele);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (ele[1] < collection[i][1]) {
                    collection.splice(i, 0, ele);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(ele);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };
}