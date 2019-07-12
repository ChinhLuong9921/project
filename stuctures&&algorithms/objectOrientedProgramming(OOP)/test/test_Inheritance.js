let animal = {
    eats: false,
    walk() {
      alert("Animal walk");
    },
    //__proto__: longEar
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  
  longEar.walk(); // Animal walk
  alert(longEar.eats); // true (from rabbit)
  //alert(animal.earLength);