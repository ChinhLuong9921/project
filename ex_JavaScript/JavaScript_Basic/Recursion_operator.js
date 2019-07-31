// (---------------------1------------------)
// Write a JavaScript program to reverse a given string.

function string_reverse(str) {
    return str.split("").reverse().join("");
}

console.log(string_reverse("dinhChinh"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
// split(): ngăn cách các kí tự trong chuỗi tạo thành mảng
// reverse(): đảo ngược mảng
// join(''): gộp mảng thành chuỗi (không có ngăn cách phẩy như toString())

//__________________________________________________________________________________________

function reverse_2(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) newString += string[i];
    return newString;
}

console.log(reverse_2("dinhChinh"));
console.log(reverse_2("www"));
console.log(reverse_2("JavaScript"));

//_____________________________________________________________________________________________
// Recursion

function reverse_3(string) {
    if (string === '') return '';
    else return reverse_3(string.substr(1)) + string.charAt(0);
}

console.log(reverse_3("dinhChinh"));
console.log(reverse_3("www"));
console.log(reverse_3("JavaScript"));

// _____________________________________2_________________________________________________________________

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

//______________________________________3______________________________________________________
// Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function array_sum(my_array) {
    if (my_array.length === 1) return my_array[0];
    else return my_array.pop() + array_sum(my_array);
    // 6 + 5 + 4 + 3 + 2 + 1
}

console.log(array_sum([1, 2, 3, 4, 5, 6]));

//________________________________________4__________________________________________________________

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
//??????????????????????????????????????
