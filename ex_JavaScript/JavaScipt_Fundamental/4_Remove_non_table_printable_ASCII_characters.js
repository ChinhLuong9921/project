// Write a JavaScript program  to removes non-printable ASCII characters from a given string.

function remove_to_non_characters(str) {
    return str.replace(/[\W]/g, '');
}
  
console.log(remove_to_non_characters('safja1234$$$'));
console.log(remove_to_non_characters('@#$%^$^'));
console.log(remove_to_non_characters('äÄçÇéÉêw3resouröceÖÐþúÚ'));

// ____________________________________________________________________________________________________________________________

const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, '');
console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));

