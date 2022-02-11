function check(){
  console.log('[','1','2','3','4',']');
  console.table('[1 2 3 4]');
}
check()



// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// var me = new Person("John", "Smith");

// console.table(me);
function Person(firstName, lastName, age){
     this.firstName=firstName;
     this.lastName=lastName;
     this.age=age;
}

var john = new Person("John", "Smith", 41);
var jane = new Person("Jane", "Doe", 38);
var emily = new Person("Emily", "Jones", 12);

console.table([john, jane, emily]);


const date =new Date()
console.log(date)


const string = 'hello i am a test'
console.log('string with trim => ', string.trim())


