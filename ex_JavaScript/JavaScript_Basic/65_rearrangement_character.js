// Write a JavaScript program 
// to check whether it is possible 
// to rearrange characters of a given string in such way 
// that it will become equal to another given string.

function rearrangement_characters(str1, str2) {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    let result = true;
  
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (arr1[i] !== arr2[i]) result = false; 
    }
    return result;
}
  
console.log(rearrangement_characters("xyz", "zyx"));
console.log(rearrangement_characters("xyz", "zyp"));
console.log(rearrangement_characters('chih', 'chinh'));
console.log(rearrangement_characters('cinh', 'nihc'));
  