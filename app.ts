let num: number = 10 ;
let bool: boolean = true;
let str: string = "A beautiful message";
let str2: string = 'A beautiful message';
let str3: string = `${str2} to william
finishing my string`;
console.log(str3);

function func():void{
}
if(bool !=null){
}
if(bool != undefined){
}
if(bool){
  let i: number;
  for (i = 0; i < 3; i++){
    console.log(i);
  }
}
// console.log("value of"+1);
let list: number [] = [1,2,3];
let list2: Array<number> = [1,2,3];

let tuple: [string, number];
tuple = ["william", 22];
//tuple = ["22", william];
tuple = ["william", 22];
console.log(tuple[0].toLowerCase())
//console.log(tuple[1]);
enum Day{Monday, Tuesday, Wesdnesday}
let day: Day = Day.Monday;
console.log(`day: ${Day}| ${Day.Tuesday}| ${Day.Wesdnesday}`);
console.log(`day: ${Day[0]}| ${Day[1]}| ${Day[2]}`);
