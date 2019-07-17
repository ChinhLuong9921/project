// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(startNum, endNum) {
    if (endNum - startNum === 2) return [startNum + 1];
    else {
        let list = range(startNum, endNum - 1);
        list.push(endNum - 1);
        // do hàm range() gọi tới range() cuối cùng rồi mới thực hiên
        // nên các hàm range() trước đó phải chờ 
        // vì thế nên mới có phương thức push đẩy vào cuối 
        console.log(endNum - 1, list);
        return list;
    }
}
   
console.log(range(2,9)); 

//____________________________________________________________________________________________
// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function array_sum(my_array) {
    if (my_array.length === 1) return my_array[0];
    else return my_array.pop() + array_sum(my_array);
    // 6 + 5 + 4 + 3 + 2 + 1
}

console.log(array_sum([1, 2, 3, 4, 5, 6]));

//__________________________________________________________________________________________________

var allMembers = [
    {name: "Chinh", team: null},
    {name: "Herry", team: "Chinh"},
    {name: 'Marry', team: "Chinh"},
    {name: 'Lan', team: "Herry"},
    {name: 'Obtain', team: "Herry"},
    {name: 'Khoi', team: null},
    {name: 'Tri', team: 'Marry'},
    {name: 'Dat', team: 'Marry'},
    {name: 'Boa', team: 'Khoi'},
    {name: 'Hai', team: 'Obtain'},
    {name: 'Tuan', team: 'Herry'},
    {name: 'Kiet', team: 'Khoi'},
    {name: 'Ha', team: 'Marry'},
    {name: 'Huong', team: 'Marry'}
];

function tree(name) {
    var results = {};
    allMembers.filter(function(item) {
        return item.team == name;
    }).forEach(function(item) {
        results[item.name] = tree(item.name);
    });
    return results;
}

console.log(tree(null));