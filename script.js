// push is add in last element
var subjects = ["Physics", "Chemistry", "Biology", "Aeronatics"]; 
document.getElementById("sample").innerHTML = subjects;

function addSubject()
 { 
    subjects.push("Mathematics");
document.getElementById("sample").innerHTML = subjects;
}

// remove the last element

function removeSubject()
 { 
    subjects.pop("Mathematics");
document.getElementById("sample").innerHTML = subjects;
}

//shift is remove first element
var numbers = [1,2,3];
document.getElementById("3").innerHTML = numbers;

function shift()
 { 
    numbers.shift(numbers);
document.getElementById("3").innerHTML = numbers;
}

//unshift is add in first element

var num = [1,2,3];
document.getElementById("4").innerHTML = num;

function unshift()
{
    num.unshift(4);
    document.getElementById("4").innerHTML = num;
}

// reduce executes a reduce in single element
var number = [275,25,50];
document.getElementById("5").innerHTML = number;

function myfunc(total,num)
{
    return total - num;
}

function reducee()
{
    document.getElementById("5").innerHTML = number.reduce(myfunc);
}

// values list of values in array

var list = ['muhajir',25,50];

function values()
{
    list.values();
    document.getElementById("6").innerHTML = list;
}

//slice 

var list = ['muhajir',25,50,5,6,7,8];

function slice()
{
    l =  list.slice(1,3); // give a output
    document.getElementById("7").innerHTML = l;
}

//cookies

// var cookie = document.querySelector('cookie');
// var button = document.querySelector('.btn');

// button.addEventListener('click',()=>{
//      //console.log("hi");
//      cookie.classList.remove('active');
// });

//  setTimeout(()=>{
//     cookie.classList.add('active');
//  },2000);


// some 
 
var ages =[10,20,18,50];
document.getElementById("8").innerHTML = ages;

function checkadult(age)
{
        return age > 18;
}
function som()
{
    document.getElementById("8").innerHTML = ages.some(checkadult);
}

// sort alphabatic

var alpha = ["t","u","a","b","c"];
document.getElementById("9").innerHTML = alpha;

function sor()
{
    document.getElementById("9").innerHTML = alpha.sort();
}

// to string display the string

let text_ = "Asslamu Alaikum Wrtwbt";
let result = text_.toString();

function string()
{
    document.getElementById("10").innerHTML = result;
}

// forEach() calls a function for each element in an array:

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("11").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}

// includes check the values

var news = "today is smoothly rain going on";


document.getElementById("12").innerHTML = news;

function include()
{
    document.getElementById("12").innerHTML = news.includes("smoothly");
}

// index place

var news = "today is smoothly river going on";


document.getElementById("13").innerHTML = news;

function index()
{
    document.getElementById("13").innerHTML = news.indexOf("river");
}

// return a string

var joins = ["muha","aha","jir"];

document.getElementById("14").innerHTML = joins;

function jon(){
    document.getElementById("14").innerHTML = joins.join();
}

// key value

var check = ['m','u','h'];

document.getElementById("15").innerHTML = check;

function kee(){
    document.getElementById("15").innerHTML = Object.keys(check);
}

//last index

var last = "today is smoothly river going on";

document.getElementById("16").innerHTML = last;

function lasindex(){
    document.getElementById("16").innerHTML = last.lastIndexOf("on");
}

// map in math function

var num = [4,16,144,25];

document.getElementById("17").innerHTML = num;

function ma(){
    document.getElementById("17").innerHTML = num.map(Math.sqrt);
}

// reverse value

var num = [4,16,144,25];

document.getElementById("17").innerHTML = num;

function rev(){
    document.getElementById("17").innerHTML = num.reverse();
}

// concat

var arr = ["Assalamu Alaikum Wrtwbt"];
var arr1 = ["How Are U"];

function con(){
    document.getElementById("18").innerHTML = arr.concat(arr1);
}

// copywithin 0  to 3

var copy = ["b","c","f","h"];

document.getElementById("19").innerHTML = copy;

function copwith(){
    document.getElementById("19").innerHTML = copy.copyWithin(3,0);
}

//enteries 

var list = ["muhajir","ahmadh","mca"];

var l = list.entries();

for (let x of l){
    document.getElementById("20").innerHTML += x+ "<br>";
}

//every

var age = ["22","21","33"];

document.getElementById("21").innerHTML = age;

function checkage(age){
    return age > 18;
}

function ever(){
    document.getElementById("21").innerHTML = age.every(checkage);
}

// fill of array

var arr = ["w","2","1"]

document.getElementById("22").innerHTML = arr;

function fil(){
    document.getElementById("22").innerHTML = arr.fill("bee");
}

// filter the value

var ages_ = [12,4,2,30];

document.getElementById("23").innerHTML = ages;

function check_(age){
    return age >= 15;
}
function filt(){
    document.getElementById("23").innerHTML = ages_.filter(check_);
}

// find the age in first array

var ages_1 = [12,42,67,30];

document.getElementById("24").innerHTML = ages_1;

function check_1(age_1){
    return age_1 > 45;
}
function fin(){
    document.getElementById("24").innerHTML = ages_1.find(check_1);
}

// find indes
var ages_2 = [12,42,67,30];

document.getElementById("25").innerHTML = ages_2;

function check_2(age_2){
    return age_2 > 45;
}
function finindex(){
    document.getElementById("25").innerHTML = ages_1.findIndex(check_2);
}