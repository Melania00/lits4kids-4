//console.log("Working!")

/* ======  String and Number  ======*/

/*const firstNumber = +"5"; //+prompt("Enter yoyr first number!");
const secondNumber = parseInt("5"); //parseInt(prompt("Enter yoyr second number!"));

let finalResult = firstNumber + secondNumber;


document.write(finalResult)
document.write("Hello" + "Wold" + "I am" + (parseInt("10") + 5));
document.write(parseInt("555") + "|" + parseInt("55ghgjg") + "|" + parseInt("ghiuh555"));


let numberOne = Number("56");
let numberTwo = Number("12");
console.log(numberOne + numberTwo);


console.log(parseInt(1.876779665.toFixed(3)),
parseFloat(1.876779665.toFixed(3)),
parseInt(1.876779665.toFixed(3)));


let textString = "        Lorem ipsum dolor sit amet, consectetur #adipiscing sit elit, sed do #eiusmod tempor incididunt #ut labore et dolore magna aliqua.       ";
console.log("text length is: ", textString.length);
console.log(textString.charAt(4));
let mathWord = "sit";
console.log(textString.match(mathWord));
console.log([...textString.matchAll(mathWord)]);

textString = textString.replaceAll(mathWord, "CAT");
console.log(textString);

console.log(textString.trim(), textString.trimLeft());

let splitText = textString.split("#tag");
console.log(splitText);

let splitByCharacters = textString.split("");
console.log(splitByCharacters);

document.write(splitByCharacters.join("-"));

let textSubstring = textString.substring(2,8);
console.log(textString);

let indexOfCharacter = textString.indexOf("ipsum");
console.log(indexOfCharacter);

//amet
//tempor

let wordsAa = "amet";
let wordsBb = "tempor";
let searchWords = textString.substr( textString.indexOf(wordsAa), textString.indexOf(wordsBb));

console.log(searchWords);

let countOfExcerpt = 30;

let finalExcerpt = textString.trim().substr(0, countOfExcerpt) + "... | Read more";
document.writeln(finalExcerpt);

let user = {
    userName: "John",
    userCity: "LA",
    yserAge: 30
}

let stringTemplate = `hello my name: ${ user.userName }
I live in: ${ user.userCity }
I'm: age${ user.userAge }`;

document.write(stringTemplate);

let stringEnter = "some \"long\" text \n second long text \
 another long text";
 console.log(stringEnter);

 let regExp = new RegExp(/do+l/, "i");
 let result = textString.match(regExp);
 console.log(result);*/




/*----------- Array ------------*/


/*let myArray = ["Bob", "Sara", "john"];
myArray[1] = "Nensy";

let arrayName2 = ["Вова", "Вася"];

let finalArray = [...myArray, ...arrayName2];

console.log(myArray, myArray[0], myArray.length, finalArray);

let multyArray = [
    [1, 45, 56],
    [34, 67, 5],
    [23, 68, 89]
];

console.log( multyArray[2][2] );*/

/*let mySecondArray = [];
mySecondArray.push("John");
mySecondArray.push("Mary");
mySecondArray.push("Karen");
//mySecondArray.push(prompt("введіть своє ім'я"));
mySecondArray.push("Вася");


console.log(mySecondArray)

mySecondArray.pop();
console.log(mySecondArray)

mySecondArray.unshift("Elin");
console.log(mySecondArray)

mySecondArray.unshift("Tuare");
console.log(mySecondArray)

mySecondArray.shift();
console.log(mySecondArray)

mySecondArray.splice(1, 3, "Datr Vaider", "Samara", "Eric", "Klara", "Eric");
console.log(mySecondArray)


let shortArray = mySecondArray.slice(3,5);
console.log(shortArray)

let searchPerson = mySecondArray.find( name => {
    return name == "Eric";
})

let fileredArray = mySecondArray.filter(name => {
    return name == "Eric";
})

console.log(searchPerson, fileredArray)


mySecondArray = mySecondArray.map( name => {
    return name + "A Pirate Name";
});


mySecondArray.forEach( (name, index) => {
    document.write(`${index + 1} Name is:  ${name} ||`);
})


let numberArray = [2, 45, 465, 4, 47, 87, 21];


let rearangedArray = numberArray.sort((a,b) => {
    return a-b;
});
console.log(rearangedArray)*/



// ========== Loop Цикл ===========




// for     for of      for in     (умова кінечності, внутрішня змінна) приводить змінну до умови кінечності
// whie (умова) доки умова не справдилася, буде безкінечно ганятися
// do while     do бде виконуватися хочаб один раз

/*const nameArr = ["fjyguk","ugkh","ugyg","ugilug","Efkyugku"];
const object = {
    name: "fjyguk",
    state: "Lviv",
    age: 5
}

for(let i = 0; i < 10; ++i ){
  document.write(i) 
  }


  for(let i = 0; i < nameArr.length; i++){
      //console.log(nameArr[i])
      if(i < 5 && i > 2) break;
      document.write(nameArr[i] + "--")
  }

  // break
  // continue


for(let item in object){
    console.log(item, object[item])
}


for(let name of nameArr){
    console.log(name, nameArr.indexOf(name))
}



//  while


let someItarableNumber = 20;
while(someItarableNumber > 10){
    someItarableNumber = Math.floor(Math.random * 105 + 1);
    document.write(someItarableNumber + "||")
}

let someDoWhileNumber = 0;
let randomNumberArr = [];
do{
    document.write("I'm Defoult Do While" + someDoWhileNumber + "///");
    someDoWhileNumber = Math.floor(Math.random() * 105 + 1);
    document.write(someDoWhileNumber + "||")
    ra
}
while(someDoWhileNumber > 10){

}


  let myNumber = 1;

  // i++   i-- постфікс
  // ++i   --i 


  myNumber = 1;
  console.log( myNumber, myNumber++);*/


  // ========== Logic goTo ============= //
      

 /* let a = 5;
  let b = 10;
  let c = 33;

  let trully = true;
  let falsy = false;
 /* if(falsy){
      document.write("Hello")
  }

else if(!falsy){
    document.write("I'm FALSY")
}

  else{
      document.write("I'm ELSE")
  }*/


//      >    <    <=    >=



// ==    ===     !     !=      !==

// && (і)    ||(або)

/*if( (5 + 10 )>= 10){
    document.write("(5 + 10 )>= 10")
}

if( true && true && true && true){
    document.write("I am a true branch  ||")
}
if(true && true && true && false){
    document.write("I'm unrichabale code")
}
else{
    document.write("Failled branch ||")
}




if(a > b){
    if(a > c){
        // a is the hirest
        document.write(a + " a is the hirest")}
    else document.write (c + " c is the hirest")   
    
}

else if(b > c){
    // b is the hirest
    document.write(a + " b is the hirest")
}
else if(c > b){
    // c is the hirest
    document.write(a + " c is the hirest")
}
*/




/*============== Array =================*/


/*
let myArray = ["Bob", "Sara", "John"];
console.log(myArray[2])
myArray[1] = "Nensy";
let arrayName2 = ["Вова", "Вася"];
let finalArray = [...myArray, ...arrayName2];
console.log(myArray, myArray[1], myArray.length, finalArray);
let multyArray = [
	[1, 45, 56],
	[34, 56, 67],
	[33, 5, 90]
];
console.log( multyArray[1][2] );*/
/*
let mySecondArray = [];
mySecondArray.push("John");
mySecondArray.push("Stephanie");
mySecondArray.push("Hermione");
//mySecondArray.push(prompt("введіть своє ім'я"));
mySecondArray.push("Вася");
console.log(mySecondArray)
mySecondArray.pop();
console.log(mySecondArray)
mySecondArray.unshift("Elin");
console.log(mySecondArray)
mySecondArray.unshift("Tiana");
console.log(mySecondArray)
mySecondArray.shift();
console.log(mySecondArray)
mySecondArray.splice(1, 2, "Dart Vaider", "Erika", "Maryam", "Rush", "Erika");
console.log(mySecondArray)
let shortArray = mySecondArray.slice(3, 5);
console.log(shortArray)
let searchPerson = mySecondArray.find( name => {
	return name == "Erika";
})
let fileredArray = mySecondArray.filter( name => {
	return name == "Erika";
})
mySecondArray = mySecondArray.map( name => {
	return name + " A Pirate name";
});
mySecondArray.forEach( (name, index) => {
	document.write(`${index} Name is: ${name} || `);
}) 
console.log(searchPerson, fileredArray)
let numberArray = [2, 345, 5, 23, 89, 23, 80, 5, 1];
let rearangedArray = numberArray.sort((a, b) => {
	return a - b;
});
console.log(rearangedArray);*/







/* Об'єкти в JS */



/*
    контейнер для нашої інформації
    дуже детальний  
    структура даних - дерево
    запит до об'єкта через . 
    значень  - любого типу
    методи  - внутрішні функції
*/

/*let key = "age";
const userObject = {
    name : "John",
    age : 34,
    myCars : ['car-1', 'car-2'],
    myTask : {
        prymeTask: "Must work",
        secondary: "must go home"
    }
};
console.log( userObject.name,  userObject[key] )
userObject.city = "Lviv";
userObject.city = "New-York";
console.log(userObject)
console.log( userObject.myTask.prymeTask )*/

const userMainData = {
    name : "John",
    age : 25,
    showMyName(){
        let nameText = `My name is ${ this.name }`;
        console.log( nameText, this )
        this.showDetailInformation()
    },
    showMyAge : function() {
        let ageText = `My age is ${ this.age }`;
        console.log( ageText )
    },
    showDetailInformation(){
        let detailText = `Hi My age is ${ this.name } and My name is ${ this.age }`;
        console.log( detailText )
    }
}
//console.log(userMainData.showMyName())

const exampleMethods = {
    grade : 100,
    regFunction(){
        console.log(this)
    },
    arrowFunction : () => {
        console.log(this)
    }
}

exampleMethods.regFunction()
exampleMethods.arrowFunction()

const userDetailInformation = {
    work : {
        company : "MIT",
        position : "Developer",
        scope : "Front-end",
        details : {
            startDate : "2017/03/20",
            sallary : 2100,
            daylyDuty : {
                toDo : "Write some new application features",
                workBreak : "do some coffe"
            },
            risePrice(newPrice){
                this.sallary = newPrice;
                console.log(`Worker sallery was raised up to ${this.sallary} $`)
            },
            showWorkInfo(){
                let companyName = this.work.company;
                let position = this.work.position;
                let scope = this.work.scope;
                let startDate = this.work.details.startDate;

                let infoText = `Company Name: ${ companyName }; position: ${scope} ${position}; since: ${startDate}`;
                console.log(infoText)
            }
        }
    },
    cars : ["volvo", "mersedes"],
    city : "Los Angeles",
    country : "USA",
    showSallary(){
        const sallary = this.work.details.sallary;
        console.log(`Worker: ${this.name}  sallery is: ${sallary} $`);
    }
}

/*userDetailInformation.showSallary()
userDetailInformation.work.details.risePrice(3000)
userDetailInformation.showSallary()
userDetailInformation.work.details.showWorkInfo.call(userDetailInformation)*/

//  call  // apply bind



/*const completeUser = Object.assign(userMainData, exampleMethods, userDetailInformation);
completeUser.showSallary()
console.log(completeUser)*/



/* присвоєння об'єкта до змінної - це насправді посилання з доступом до цього об'єкта а не новий об'єкт */
/*const newObject = new Object({name: "test", value: 3});
const linkToObject = newObject;
const trueCopy = Object.assign({}, newObject);
console.log(newObject, linkToObject)
linkToObject.name = "Changed";
linkToObject.doSomething = function(a, b) {
    console.log(a + b);
}
console.log(newObject, linkToObject, trueCopy)
//Object.freeze(linkToObject);   // запобігає додаванню або зміні будь яких даних
Object.seal(linkToObject);
linkToObject.name = "Try to change";
linkToObject.newItem = 34;
console.log(newObject, linkToObject, trueCopy)
console.log(  Object.isFrozen(linkToObject) ) 
*/


/* Конструктори Об'єктів  */

/*
function CreateUserOfFunction(props) {
    this.name = (props.name)? props.name : "Unknown user" ;
    this.age = (props.age)? props.age :
    (!props.name)? 5 : 10  ;
    this.daylyDuty = (props.daylyDuty)? props.daylyDuty : {
        toDo : "Write todo!",
        must : "fill all empty fields!" 
    };
    this.city = (props.city)? props.city : "Unknown City";
    this.showName = function(){
        console.log(`My name is: ${this.name}`)
    }
}
CreateUserOfFunction.prototype.showDuty = function(){
    let dutyText = `1) ${this.daylyDuty.must} 2) ${this.daylyDuty.toDo} `;
    console.log(dutyText)
}
CreateUserOfFunction.prototype.moveToCity = function(city){
    if( !city ){ return }
    let prevCity = this.city;
    this.city = city;
    console.log(`Move from ${prevCity} to ${this.city}`)
} 
const user1 = new CreateUserOfFunction({
    name : "Alex",
    age : 23,
    city : "LA", 
    daylyDuty : {
        toDo : "Go to te work",
        must : "write his own project" 
    }
})
const user2 = new CreateUserOfFunction({
    name : "Homer",
    age : 50,
    city : "Springfield", 
    daylyDuty : {
        toDo : "Wake up",
        must : "Wath TV" 
    }
})
const user3 = new CreateUserOfFunction({name: "Василь"})
console.log(user1, user2, user3)*/


/*  ES - 6   Class */

/*class CreateNewUser {
    constructor(props){
        this.name = (props.name)? props.name : "Unknown";
        this.age = (props.age)? props.age : "Unknown";
    }
    showName (){
        console.log(`My name is: ${this.name}`)
    }
    get getUserData(){
        let userText = `Name is: ${this.name}, Age is: ${this.age}`;
        console.log(userText)
    }
    set setUseAge(age){
        this.age = (age) ? age : this.age;
    }
}
CreateNewUser.prototype.showAge = function() {
    console.log(`My age is: ${this.age}`)
}
const user4 = new CreateNewUser({
    name : "John", 
    age :34
})*/


const listOfAvailebleName = ["Stephanie", "Hermione", "Вася", "Tiana", "Dart Vaider", "Erika", "Maryam", "Rush", "Erika"];
const listOfAvailebleWork = ["MIT", "Google", "Facebook", "SpaceX", "Boeing", "Nasa", "Рукавичка"];

const allUsers = [];
const maxUserNumber = 555;

class CreateUserByNumber {
    constructor(props){
        this.name = (props.name) ? props.name : "NoName";
        this.work = (props.work) ? props.work : "Unemployed";
    }
    displayUserOnScreen(){
        let userInfoText = ` Name: ${ this.name } work at ${ this.work }  ||`;
        document.write(userInfoText)
    }
}


for(let i = 0; i < maxUserNumber; i++){
    let randomNameIndex = Math.floor(Math.random() * listOfAvailebleName.length);
    let randomWorkIndex = Math.floor(Math.random() * listOfAvailebleWork.length + 1);

    let newUse = new CreateUserByNumber ({
        name : listOfAvailebleName[randomNameIndex],
        work : listOfAvailebleWork[randomWorkIndex]
    })
    allUsers.push(newUse)
}

console.log(allUsers)

for(let userItem of allUsers) {
    userItem.displayUserOnScreen()
    //alert("User was created!")
}
