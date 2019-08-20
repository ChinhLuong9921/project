// Update the record

let collection = {
    '2548': {
      'album': 'Slippery When Wet',
      'artist': 'Bon Jovi',
      'tracks': [
        'Let It Rock',
        'You Give Love A Bad Name'
      ]
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
        '1999',
        'Little Red Corvette'
      ]
    },
    '1245': {
      'album': ['a'],
      'artist': 'Robert Palmer',
      'tracks': []
    }, 
    '5439': {
      'album': 'ABBA Gold'
    }
}
  
const collectionCopy = JSON.parse(JSON.stringify(collection));
  // JSON.parse--- chuyển chuỗi JSON thành object
  // JSON.stringify--- chuyển chuỗi object thành chuỗi JSON
  
function updateRecords(id, prop, value) {
    if (value === '') delete collection[id][prop];
    else if (prop === 'album') {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
      // ???????????????????????????????????????????????????
    }
    else collection[id][prop] = value;
}
  
console.log(updateRecords(1245, 'album', 'abcxyz'));

// ______________________________________________2__________________________________________________________________________________

// Write a JavaScript program to unflatten an object with the paths for keys.

const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));
