// Assignment # 7 - Chapters 39 - 42 

//  Task 01
function power(a, b) {
    return a ** b;
}
alert(power(2, 3));

// Task 02
var enter_year = prompt('Enter a Year to check if it is Leap or Not: ')

function leapYear() {
    if ((enter_year % 4 == 0 && enter_year % 100 != 0) || enter_year % 400 == 0) {
        alert(`${enter_year} is a Leap Year`);
    } else {
        alert(`${enter_year} is not a Leap Year`);
    }
}
leapYear();

//  Task 03
var [a, b, c] = [4, 4, 4];

function valueOfS() {
    return (a + b + c) / 2;
}

function areaOfTriangle(s = valueOfS()) {
    area = s * (s - a) * (s - b) * (s - c);
    return area;
}
alert(areaOfTriangle());

//  Task 04
var subject01_marks = parseFloat(prompt('Enter Marks Of Subject 01: '));
var subject02_marks = parseFloat(prompt('Enter Marks Of Subject 02: '));
var subject03_marks = parseFloat(prompt('Enter Marks Of Subject 03: '));

function average_marks() {
    var average_marks = (subject01_marks + subject02_marks + subject03_marks) / 3;
    return average_marks;
}

function percentage() {
    var total_marks = 300;
    var obt_marks = subject01_marks + subject02_marks + subject03_marks;
    var percentage = (obt_marks / total_marks) * 100;
    return percentage.toFixed(2);
}

function mainFunc() {
    alert(`Percentage: ${percentage()}`);
    alert(`Average Marks: ${average_marks()}`);
}
mainFunc();

//  Task 05
function indexof(chr, str) {
    var str_arr = str.split("");
    return str_arr.indexOf(chr);
}
indexof('i', 'This is a string');

//  Task 06
function removeVowels(str) {
    if (str.length > 25) {
        alert("length of the string must be less then 25.");
    } else {
        str = str.replace(/[aeiou]/gi, "")
        alert(str);
    }
}
removeVowels("This is a Sentance");

//  Task 07
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

console.log(findOccurrences());

//   Task 08
var distanceInKm = parseFloat(prompt('Enter the distance between 2 cities in KiloMeter: '));

function kmToM() {
    return (`${distanceInKm} Kilometers in Meters are ${distanceInKm*1000}`);
}

function kmToFt() {
    return (`${distanceInKm} Kilometers in Feet are ${distanceInKm* 3281}`);
}

function kmToIn() {
    return (`${distanceInKm} Kilometers in Inches are ${distanceInKm*39370}`);
}

function kmToCm() {
    return (`${distanceInKm} Kilometers in Centimeter are ${distanceInKm*100000}`);
}
document.write(`${kmToM()}<br> ${kmToFt()} <br> ${kmToIn()} <br> ${kmToCm()}`);

//  Task 09
var working_hours = prompt('Please Enter Working Hours: ');
if (working_hours > 40) {
    over_time = working_hours - 40;
    over_time_pay = over_time * 12.00;
    alert(over_time_pay)
} else {
    alert("You have to work for more than 40 hours to get over time pay");
}

//  Task 10
var enter_amount = parseInt(prompt('Please Enter Amount You Want To Withdraw: '));
document.write(`<br> You Will Have ${Math.floor(enter_amount / 100)} Hundred notes, ${Math.floor((enter_amount % 100) / 50)} Fifty Notes and ${Math.floor((((enter_amount % 100) % 50) / 10))} ten Notes`)
