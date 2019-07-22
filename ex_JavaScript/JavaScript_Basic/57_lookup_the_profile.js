// Lookup the profile________________________________

const profile = [
    {
      'firstName': 'Sherlock',
      'lastName': 'Holmes',
      'number': '0999999999',
      'likes': ['Intriguing case', 'Sing']
    },
    {
      'firstName': 'Chinh',
      'lastName': 'Luong',
      'number': '0335981xxx',
      'likes': ['Coding', 'Sing']
    }
  ];
  
  function lookupProfile(name, prop) {
    for (let i = 0; i < profile.length; i++) {
      if (profile[i].firstName === name) {
        return profile[i][prop] || 'No such property';
      }
    }
    return 'No such name';
  }
  
  console.log(lookupProfile('Chinh', 'number'));