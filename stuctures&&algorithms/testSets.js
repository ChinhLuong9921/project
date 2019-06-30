// mySet__________________________________
// has
// values
// add
// remove
// size
// union
// intersection
// difference
// subset

function mySet() {
    var collection = [];

    this.has = function() {
        return (collection.indexOf() !== -1);
    };

    this.values = function() {
        return collection;
    };

    this.add = function(ele) {
        if (!this.has) {
            collection.push(ele);
            return true;
        }
        return false;
    };

    this.remove = function(ele) {
        if (this.has) {
            var index = collection.indexOf(ele);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };

    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };
}