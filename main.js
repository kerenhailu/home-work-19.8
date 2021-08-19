// --------------------------1
// function helloW(){
//     document.write("hello there")
// }helloW()
// --------------------------2
// function HelloDAVID(){
//     document.write("hello there David")
// }HelloDAVID()
// --------------------------3
// function GetName(Name){
// document.write(`hello there ${Name}`)
// }GetName(prompt("your name "))
// --------------------------4
// function FullName(Name,FamName,Age){
// document.write(`Name:${Name} FamName:${FamName} Age:${Age} `)
// }FullName(prompt("your name "),prompt("your family name "),prompt("your age "))
// --------------------------5
// function NameAndGil(Name,Age){
// document.write(`<div id="nameAndAge">Name:${Name} Age:${Age} </div>`)
// }NameAndGil(prompt("your name"),prompt("your age"))
// --------------------------6
// function FullNameAge(Name,FamName,Age){
//     document.getElementsByTagName("div")
//     document.write(`Name:${Name} FamName:${FamName} Age:${Age}`)
// }FullNameAge(prompt("namee"),prompt("FamName"),prompt("Age"))
// --------------------------7
// function nameGil(Name,age){
// document.write(`<div> Name:${Name} age:${age}</div>`)
// }nameGil(prompt("your name"),prompt("your age"))
// --------------------------8
// function fullGill(Name,Fam,age){
// document.write(`<div><p>Name:${Name} Fam:${Fam} Age:${age}</p></div>`)
// }fullGill(prompt("namee"),prompt("FamName"),prompt("Age"))
// --------------------------9
// function fullGillDIV(Name,Fam,age){
//     document.write(`<div id="fullGillDIV">Name:${Name} Fam:${Fam} Age:${age}</div>`)
//     }fullGillDIV(prompt("namee"),prompt("FamName"),prompt("Age"))
// --------------------------10
// function fullGillID(Name, Fam, age) {
//     document.write(`<div><p id="fullGillDIV">Name:${Name} Fam:${Fam} Age:${age}</p></div>`)
// } fullGillID(prompt("namee"), prompt("FamName"), prompt("Age"))
// --------------------------11 a
// function name1(Name) {
//     document.write(`<p id="name">${Name}</p>`)
// } name1(prompt("your name ..."))
// --------------------------11 b
// function Fam1(fam) {
//     console.log(document.getElementById("name").innerText+` ${fam}`);
//     document.write(document.getElementById("name").innerText+` ${fam}`)
// } Fam1("hailu")
// --------------------------12
// function NAME(namee){
//    document.write(`<p id="name1">${namee}</p>`) 
// }NAME(prompt("your name ..."))

// function fam2(famName){
//     document.write(document.getElementById("name1").innerText+` ${famName}`+new Date().getFullYear())
// }fam2("hailu")
// --------------------------13
// function cars(NameCar,CompanyCar,samakCar){
// var carss={}
// carss.NameCar=NameCar
// carss.CompanyCar=CompanyCar
// carss.samakCar=samakCar
// document.write(`${carss.NameCar},${carss.CompanyCar},${carss.samakCar}`);
// console.log(carss);
// }cars(prompt("your CompanyCar"),prompt("your NameCar"),prompt("your samakCar"))
// --------------------------------14
// function cars(NameCar,CompanyCar,samakCar){
// var carss={}
// carss.yearCar=new Date().getFullYear()
// carss.NameCar=NameCar
// carss.CompanyCar=CompanyCar
// carss.samakCar=samakCar
// console.log(carss);
// document.write((`${carss.NameCar},${carss.CompanyCar},${carss.samakCar},${carss.yearCar}`)); 
// }cars(prompt("your CompanyCar"),prompt("your family NameCar"),prompt("your yearCar"),prompt("your samakCar"))
// --------------------------------15
// function cars(NameCar,CompanyCar,samakCar){
//     var carss={}
//     carss.NameCar=NameCar
//     carss.CompanyCar=CompanyCar
//     carss.samakCar=samakCar
//     document.write(`<div>${carss.NameCar},${carss.CompanyCar},${carss.samakCar}</div>`);
//     }cars(prompt("your CompanyCar"),prompt("your family NameCar"),prompt("your yearCar"),prompt("your samakCar"))
// --------------------------------16
// function cars(NameCar,CompanyCar,samakCar){
// var carss={}
// carss.yearCar=new Date().getFullYear()
// carss.NameCar=NameCar
// carss.CompanyCar=CompanyCar
// carss.samakCar=samakCar
// document.write((`<h1>${carss.NameCar}</h1><h3>${carss.CompanyCar}</h3><p>${carss.samakCar}</p><div>${carss.yearCar}</div>`));
// }cars(prompt("your CompanyCar"),prompt("your family NameCar"),prompt("your yearCar"),prompt("your samakCar"))
// --------------------------------17
// function printCar(color, company, smk) {
//     var car = {};
//     car.color = color;
//     car.company = company;
//     car.smk = smk;
//     car.year = new Date().getFullYear();
//     document.getElementById("div1").innerText = car.color
//     document.getElementById("div2").innerText = car.company
//     document.getElementById("div3").innerText = car.smk
//     document.getElementById("div4").innerText= car.year
// };
// printCar(prompt("enter a color"), prompt("enter a company"), prompt("enter a smk"));