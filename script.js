let sum = 0;
let n = prompt('Enter Number for n ');
n = Number.parseInt(n);
for(let i = 1; i<n; i++)
{
    sum+= (i+1);
    console.log(sum+1)
}
alert("Sum number is " + n + " Total Number is " + sum )

// for in loop

// let obj ={
//     Suvajit: 50,
//     Supratik: 70,
//     Gourav: 80,
//     Mimi: 90,
//     Sukanta: 100,
// }
// for(let a in obj){
//     console.log(a)
// }