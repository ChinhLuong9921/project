// Write a JavaScript exercise to create a variable using a user-defined name.


const var_name = 'abcd';
const n = 120;
this[var_name] = n;
console.log(this[var_name]);

/*
"Người dùng xác định" có thể không nhất thiết là "người dùng cung cấp".
Trong giải pháp, nếu "var_name" được coi là đã được xác định biến, "this [var_name] = n;" sử dụng để gán nó cho "n".
Một cách giải thích của chương trình có thể là lấy một biến được cung cấp bởi người dùng bằng cách sử dụng một dạng HTML;
nhưng đó không phải là trường hợp duy nhất
 */