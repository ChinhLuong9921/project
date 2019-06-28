// mySet______________________________
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
       // return (collection.length === 0);
   };

   this.values = function() {
       return collection;
   };

   this.add = function(e) {
       if (!this.has(e)) {
           collection.push(e);
           return true;
       }
       return false;
   };

   this.remove = function(ele) {
       if (this.has(ele)) {
           var index = collection.indexOf(ele);
           collection.splice(index, 1);
           return true;
       }
       return false;
   };

   this.size = function() {
       return collection.length;
   };

   this.union = function(otherSet) {
       var unionSet = new mySet();
       var firstSet = this.values();
       var secondSet = otherSet.values();

       firstSet.forEach((e) => {
           unionSet.add(e);
       });
       secondSet.forEach((e) => {
           unionSet.add(e);
       });
       return unionSet;
   };

   this.intersection = function(otherSet) {
       var intersectionSet = new mySet();
       var firstSet = this.values();
       var secondSet = otherSet.values();

       firstSet.forEach((e) => {
           if (secondSet.has(e)) {
               intersectionSet.add(e);
           }
       });
       return false;
   };

   this.defference = function(otherSet) {
       var defferenceSet = new mySet();
       var firstSet = this.values();
       var secondSet = otherSet.values();

       firstSet.forEach((e) => {
           if (!secondSet.has(e)) {
               defferenceSet.add();
               return true;
           }
       });
       return false;
   };

   this.subset = function() {
       var firstSet = this.values();
       return firstSet.every((value) => {
           return otherSet.has(value);
       });
   };
}