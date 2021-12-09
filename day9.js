let numbers = new Set()
.add("1")
.add("2")
.add("3")
.add("4")
.add("5")
.add("6")
.add("7")
.add("8")
.add("9")
.add("10")
.add("11")
.add("12")
.add("13")
.add("10")
.add("14")
.add("15")
.add("16")
.add("17")
.add("18")
.add("19")
.add("20")
.add("21")
.add("22")
.add("23")
.add("24")
.add("25")
.add("26")
.add("27")
.add("28")
.add("29")
.add("30")

let called = Array.from(numbers);

let display = new Array();


function getRandomNum()
{
function rando()
{
for (let i = called.length - 1; i > 0; i++) 
{
    const j = Math.floor(Math.random() * called.length);
    const number = called[i];
    called[i] = called[j];
    called[j] = number;
    return number;

    //let show = called[Math.floor(Math.random() * called.length)];
    //return show;
}
//document.getElementById('bingo').innerHTML = display[0];
}
let index = rando();
document.getElementById('bingo').innerHTML = index;
display.push(index);


}
function show()
{
for(let n = 0; n < display.length; n++)
{
document.getElementById('reveal').innerHTML += "<br/>" + display[n] + "<br/>";
}
} 
