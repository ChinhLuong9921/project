// Write a JavaScript program to count the number of vowels of a given string.

function vowel_Count(str){ 
    return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
// ______________________________________________________________________________________

// Write a JavaScript program
// to check if a given string contains equal number of p's and t's present.

function t_and_p_check(str) {
    return str.replace(/[^t]/g, '').length === str.replace(/[^p]/g, '').length;
}

console.log(t_and_p_check('ttttpppp'));
console.log(t_and_p_check('ttppp'));
console.log(t_and_p_check('chinh'));

// String.prototype.replace()____________________________________________
