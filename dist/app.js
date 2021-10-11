var num = 10;
var bool = true;
var str = "A beautiful message";
var str2 = 'A beautiful message';
var str3 = str2 + " to william\nfinishing my string";
console.log(str3);
function func() {
}
if (bool != null) {
}
if (bool != undefined) {
}
if (bool) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
// console.log("value of"+1);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple;
tuple = ["william", 22];
//tuple = ["22", william];
tuple = ["william", 22];
console.log(tuple[0].toLowerCase());
//console.log(tuple[1]);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wesdnesday"] = 2] = "Wesdnesday";
})(Day || (Day = {}));
var day = Day.Monday;
console.log("day: " + Day + "| " + Day.Tuesday + "| " + Day.Wesdnesday);
console.log("day: " + Day[0] + "| " + Day[1] + "| " + Day[2]);
