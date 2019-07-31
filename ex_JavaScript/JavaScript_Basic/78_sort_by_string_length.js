// (----------------------1----------------------)
// Write a JavaScript program 
// to sort the strings of a given array of strings in the order of increasing lengths.

// Note: Do not change the order if the lengths of two string are same.
// ['', 'a', 'b', 'bb', 'aa', 'xyz', 'acd', 'zzz']

function sort_by_string_length(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                const m = arr[i];
                arr[i] = arr[j];
                arr[j] = m;
                // đảo chỗ 2 val của mảng
                // console.log(m, arra[i], arra[j]);
                // xyz aa xyz
                // aa  aa
                // acd bb acd
                // bb a bb
                // xyz aa xyz
                // aa b aa
                // acd bb acd
                // zzz aa zzz
            }
        }
    }
    return arr;
}

console.log(sort_by_string_length(['xyz', 'acd', 'aa', 'bb', 'zzz', '', 'a', 'b']));

//_______________________________________2_______________________________________________________________________

// Write a JavaScript program to swap pairs of adjacent value of a array of even length.

function swap_pairs(arr) {
    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length; i += 2) {
            const m = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = m;
        }
        return arr;
    }
    return 'array has not even length';
} 

console.log(swap_pairs([1, 2, 3, 4, 5, 6]));
console.log(swap_pairs([1, 2, 3, 4, 6, 0]));