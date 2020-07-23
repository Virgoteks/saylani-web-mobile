// CHAPTER 21 - 25
// Task (1)

var first_name = prompt("enter first name")
var last_name = prompt("enter last name")
var full_name = first_name + " " + last_name

console.log(full_name)
alert("Your Fullname is: " + full_name)

// Task (02)

var mob = prompt("Your favororite mobile phone model")​

document.write("My Favorite phone is: " + mob + "," + " length of sting: " + mob.length)

// Task (03)

var pak = "Pakistan"
var len = pak.indexOf('n')

document.write("String: " + pak + "<BR> Index of 'n': " + len)

// Task (04)

var tex = "Hello world"
var lent = tex.lastIndexOf('l')

document.write("String: " + tex + "<BR> Last Index of 'l': " + lent)

// Task (05)

var pak1 = "Pakistani"
var char = pak1.charAt(3);

document.write("String: " + pak1 + "<BR> Charactor at Index of 'i': " + char)

// Task (06)

var first_name1 = prompt("enter first name")
var last_name1 = prompt("enter last name")
var full_name1 = first_name1.concat(' ' + last_name1)

alert("Your Full name is: " + full_name1)



// Task (07)

var city = "hyderabad"

var rep = city.replace('hyder', 'islam')

document.write("City: ", city, "<BR> After replacement: ", rep)

// Task (08)

var message = "Ali and Sami are best friends. They play cricket and football together."

message.split("and").join("&")



// Task (09)

var word = "472"

document.write("Value: ", word, "<BR>", "Type: ", typeof (word), "<BR>", "Value: ", word = +word, "<BR>", "Type: ", typeof (word), )


// Task (10)

var inp = "peanuts"
var upr = inp.toUpperCase()

document.write("User input: ", inp, "<BR>", "Upper case: ", upr)




// Task (11)

var userInput1 = prompt("enter your name")
var firstletter = userInput1[0].toUpperCase()

console.log(firstletter + userInput1.slice(1))


// Task (12)

// method (1)

var num = prompt('enter a dotted number')
var rslt = num.split('.').join("")

document.write("Number: " , num , "<BR> Result: " , rslt )

// method (2)

var numb = prompt('enter a dotted number')
var reslt = numb.replace('.', "")

document.write("Number: " , numb , "<BR> Result: " , reslt )



// Task (13)

var a = 0 ;
var name = prompt("enter your name" , "! , . @ not allowed");
var namelen = name.length;

for(i = 0; i < name.length ; i++){
    if(name.slice(i,i+1).charCodeAt() === 33 || name.slice(i,i+1).charCodeAt() === 33 || name.slice(i,i+1).charCodeAt() === 44 || name.slice(i,i+1).charCodeAt() === 46 || name.slice(i,i+1).charCodeAt() === 64 ){
        a++
    }
    
}
if(a === 1 ){
    alert('invalid')
}
else{
    alert("valid")
}





// Task (14)

alert("Welcome To ABC Bakery")

var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}



// Task (15)

var password = prompt('Enter password must be alphanumeric.');
if (password.length < 6 || (password.charCodeAt(0) > 48 && password.charCodeAt(0) < 58)) {
    alert('Enter valid password.');
}
else { 
    alert("ok")
}




// Task (16)

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    document.write(uni[i] , "<BR>" );
}



// Task (17)

var userinput = prompt();
var checkLastInput = userinput.slice(userinput.length - 1)

document.write("User input " + userinput +"<BR>" + "Last character of input: " + checkLastInput)




// Task (18)

var a = "“The quick brown fox jumps over the lazy dog"
a = a.toLowerCase()
a = a.match(/the/g)
var b = a.length
document.write("there are ", b ," occurrences of word “the”." )






//********************-------------------*****************  CHAPTER 26 - 30 *******************-------------------*****************//


// Task (01)


var userInput = +prompt("Enter a Possitive Numbers")

document.write("Number: " + userInput + "<BR>")
document.write("floor value " + Math.round(userInput)+ "<BR>")
document.write("floor value " + Math.floor(userInput)+ "<BR>")
document.write("ceil value " + Math.ceil(userInput)+ "<BR>")




// Task (02)


var userInput3 = +prompt("Enter a Negative floating numbers")

document.write("Number: " + userInput3 + "<BR>")
document.write("floor value " + Math.round(userInput3) + "<BR>")
document.write("floor value " + Math.floor(userInput3) + "<BR>")
document.write("ceil value " + Math.ceil(userInput3) + "<BR>")

// Task (03)

var userInput4 = +prompt("Enter a number for Absolute value")

document.write("The Absolute value of: " + userInput4 + " is " + Math.abs(userInput4))


// Task (04)

var diceValue = Math.floor(6 * Math.random() + 1)

document.write("Random dice value: " + diceValue)



// Task (05)

var coinValue = Math.floor((Math.random()*2) + 1)

if (coinValue === 2) {
    alert(coinValue + " Random coin value: Head")
} else if (coinValue === 1) {
    alert(coinValue + " Random coin value: Tail")
}



// Task (06)

var ran = Math.floor((Math.random()*100) + 1)

document.write("Random number between 1 and 100: " + ran)



// Task (07)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

console.log("the weight of user is " + weight[0] + " Kilograms")


// Task (08)

var num = +prompt("enter your choosen number you have only 5 attempts")

var guess = Math.floor((Math.random() * 10) + 1);

for (i = 1; i < 10; i++){ 
 if (num === guess){
    alert("you guessed the number " + num + ", is correct")
    alert("congratulations you win this game by " + i + " times attempts" )
    break
 }
 
 else if (i >= 5){
     alert("game over you loss")
     break
    }
    
else if (num === +" "){
        alert("please enter number")
        break
    }
else {
    num = +prompt('Please try again... </br>'  + "attemped No." + i )
 }
 
}



//********************-------------------*****************  CHAPTER 31 - 34 *******************-------------------*****************//



// Task (01)

var date = new Date();
document.write(date)


// Task (02)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var a = new Date()
var b = a.getMonth()
document.write("current Month : " + month[a.getMonth()])




// Task(03)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
document.write("today is : " , days[b] + "<Br>")
var c = days[b].slice(0,3)
document.write("today is : " , c)

// Task (04)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
var c = days[a.getDay()]

if (c === "Sunday" || c === "Saturday" ){
        alert("its funday")
        
}
else if (c === "Tuesday"){
        alert("Today is " + '"' + c +  '"' + " So please Go to work")
        
}

//With Loop
var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ] 
var a = new Date()
var b = a.getDay()
var c = days[a.getDay()]


for ( i = 0 ; i < c.length; i++ ){
    if (c === "Sunday" || c === "Saturday" ){
        alert("its funday")
        break
    }
    else if (c === "Tuesday"){
        alert("Today is " + '"' + c +  '"' + " So please Go to work")
        break
    }
}


// Task (05)

var a = new Date()
var b = a.getDate()

if (b >= 1 && b <= 15 ){
    alert("First fifteen days of month")
}
else if (b >= 16 && b <= 30 ){
    alert("Last fifteen days of month")
}



// Task (06)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = myDate.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + myDate + "<BR>")
document.write("Elapsed miliseconds since January 1,1970 : " + min * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + min * 365 * 24 * 60);


// Task (07)

var currTime = new Date()

currTime = currTime.getHours()
if (currTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}


// Task (08)

var laterDate = new Date("12/31/20")

document.write("Later Date: " + laterDate)



// Task (09)

var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff /(1000 *60 *60 *24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015" )




// Task (10)

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beinning of 2015"
)



// Task (11)

var checkTime = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var oldhund = new Date(oldHour)

document.write("Curent Date: " + checkTime + "<BR> 1 hour ago, it was " + oldhund)



// Task (12)

var oneYr = new Date();
var oldyear = oneYr.setYear(oneYr.getFullYear() - 100);
var oldhund = new Date(oldyear)

document.write("Curent Date: " + oneYr + "<BR> 100 Year back, it was " + oldhund)



// Task (13)

var currentYear = new Date()
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy")
var userDate = new Date(getUserdate)
var diff = currentYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365)
var bdYear = currentYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))



// Task (14)

// a)

var name = "Hafiz Syed Ahsan Hussain";


// b)

var date = new Date()
var month = date.getMonth()


// c)

var unit = 410


// d)

var chargesUnit = 16


// e)

var netAmount = unit * chargesUnit


// f)

var dueDateCharge = 500


// g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name " + name + "<BR>")
document.write("Month " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount ) 



//********************-------------------*****************  CHAPTER 35 - 38 *******************-------------------*****************//



// Task (01)


function date() {
    document.write(new Date())
}
date()


// Task (02)

function num() {
    var firstname = prompt("enter your first name")
    var secondname = prompt("enter your second name")
    alert("greetings " + firstname + " " + secondname) 
}
num()


// Task (03)

function sum(a,b) {
    var s = a + b
    return s
}

var add = sum(+prompt("enter 1st sum"),+prompt("enter 1st sum"))

document.write("sum of addition is " + add)





// Task (04)

function calc(num1,opr,num2){
    if(opr === "+"){
        return (num1 + num2)
    }
    else if(opr === "-"){
        return (num1 - num2)
    } 
    else if(opr === "*"){
        return (num1 * num2)
    }
    
    else if (opr === "/"){
        return (num1 / num2)
    }
    else{
        return "Incorrect Operator!"
    }
}

var num1 = +prompt("enter 1st number")
var opr = prompt("enter operator")
var num2 = +prompt("enter 2nd number")
 

document.write(calc(num1,opr,num2))



// Task (05)

function square(a) {
    var b = Math.sqrt(a)
    document.write(b)
}

square(+prompt("enter number"))



// Task (06)

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
 var a =  factorialize(5);
 document.write(a)




// Task (07)

function num(start,end) { 
    for(i = start; i <= end ; i++){
     document.write(i + "<br>");   
    }
};

num(
+prompt("enter the starting point"),
+prompt("enter the ending point")
);



// Task (08)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



// Task (09)

(variable)
function areaRectangle(width, height) {
    return width * height
}
var a = areaRectangle(4, 5)
document.write(a )

(value)
function areaRectangle(width, height) {
    var a = width * height
    document.write(a)
}
areaRectangle(4, 5)


// Task (10)

function isPalindrome(text) {
    var reverseText = text.split('').reverse().join('')

    if (reverseText === text) {
        alert(text + " is palindrome")
    } else {
        alert(text + " is not palindrome")
    }
}
isPalindrome(prompt("enter"))

// Task (11)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))


// Task (12)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// Task (13)
function count(str,word){
    var arr1 = str.split('')
    count = 0
    for(x=0;x<arr1.length;x++){
        if(arr1[x]===word){
            count += 1
        }
    }return count
    
}
var str=prompt("Enter a string");
var wrd=prompt("Enter a word to count from the string");
document.write(wrd+" occur "+count(str, wrd)+" times in '"+str+"'")



// Task (14)

function calcCircumference(radius){
    cir = 2*3.142*radius;
    return ("The circumference is "+cir);
}
function calcArea(radius){
    area = 3.142*(radius**2);
    return ("<br>The area is "+area);
}

document.write(calcCircumference(5));
document.write(calcArea(8));
