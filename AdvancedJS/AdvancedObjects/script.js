// reference type
  var object1 = { value: 10 };
  var object2 = object1;
  var object3 = { value: 10 };

// context vs scope
function p () {
  let a = 4; // lives in this scope 
}
// context tells us where we are within the object
//console.log(this === window) // this means the object environment that we are in

function a() {
  console.log(this);
}

const obj4 = {
  a: function() {
    console.log(this); // now we are in the object a
  }
 }

// instantiation -> copy of an object and re-use the code
 class Player {
  constructor(name , type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
 }

 class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
 }

 const wizard1 = new Wizard('Shelly', 'Healer');
 const wizard2 = new Wizard('Shawn', 'Dark Magic');
 wizard1.play()
 wizard1.introduce();
 wizard2.introduce()
 wizard2.play()