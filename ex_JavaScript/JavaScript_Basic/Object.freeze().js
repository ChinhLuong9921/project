// Object is declared by const variable
// if it is changed in the function
// Use Object.freese() to prevent changes

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    // bỏ đi sẽ thay đổi key: PI
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
  
console.log(freezeObj());