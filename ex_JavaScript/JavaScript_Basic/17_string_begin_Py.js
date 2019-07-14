// Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

function checkString(string) {
    const Py = 'Py';
    const front = string.slice(0, 2);
    //console.log(front);
    
    if (front === Py) {
        return string;
    } else {
        return Py+string;
    }
}

console.log(checkString('Python'));
console.log(checkString('chinh'));
console.log(checkString(''));

/*
function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  // substring() tương tự slice().Sự khác biệt là substring() không chấp nhận chỉ số âm.
  
  {
    return str1;
  }
  return `Py${str1}`;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

 */