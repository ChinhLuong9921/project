// Write a JavaScript program 
// to switch case of the minimum possible number of letters 
// to make a given string written in the upper case or in the lower case.

// Fox example "Write" will be 'write' and "PHp" will be "PHP"

function change_string(str) {
    let x = 0; 
    let y = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) x++;
        else y++;
    }
    if (y > x) return str.toLowerCase();
    return str.toUpperCase();
}

console.log(change_string('chinh'));
console.log(change_string('chINH'));

//__________________________________________________________________________________________________

function change_case(str) {
    let check = 0;
    try {
        check = str.match(/[A-Z]/g).length;
    } catch (err) {
        check = 0;
    }
    return (check > (str.length/2)) ? str.toUpperCase() : str.toLowerCase();
}
console.log(change_case("Write"));
console.log(change_case('chinh'));
console.log(change_case('chINH'));
console.log(change_case("PHp"));

// try...catch________________
// Được sử dụng để xử lí những lỗi không biết trước
// Nếu đã biết trước thì nên tự kiểm tra và thay đổi

//__________________________________________________________

function change_case1(str) {
    const match = str.match(/[A-Z]/g);
    if (match === null) return str;
    return (match.length > str.length / 2) ? str.toUpperCase() : str.toLowerCase();
}
console.log(change_case1('chinh'));

//_____________________________________________________________________________________

// Write a JavaScript program 
// to check whether a given string represents a correct sentence or not. 
// A string is considered correct sentence 
// if it starts with the capital letter and ends with a full stop (.).

function check_sentence(sentence) {
    return (/^[A-Z]/.test(sentence) && /[.]$/.test(sentence));
  }
  
  console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam.\nDoc lap tu do hanh phuc.'
  ));
  console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam\nDoc lap tu do hanh phuc.'
  ));