let x = 10;
let y = x;
x = 20;
console.log(x); //=> 20
console.log(y); //=> 10

let x3 = {value: 10};
let y2 = x3;
x3.value = 20;
console.log(x3); //=> {value: 20}
console.log(y2); //=> {value: 20}

/*
- Khác nhau là do x2 là Object
- Object là giá trị tham chiếu
- Giá trị tham chiếu sẽ chứa địa chỉ của giá trị gốc
- Khi giá trị gốc thay đổi thị tham chiếu cũng sẽ thay đổi hết
 */

let obj = {value: 10};
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);
