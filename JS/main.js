// function first(){
//     console.log('first');
//     second();
// }

// function second(){
//     console.log('second');
//     third();
// }
// function third(){
//     console.log('third');
//     fourth();
// }

// function fourth(){
//     console.log('fourth');
    
// }

// alert("hello world");
// [1,2].forEach(alert);

// let age = 15;
// console.log(age);

// let age = NaN;
// console.log(age);

// alert(NaN ** 3);

// let x = Infinity;
// console.log(x,  typeof x);

// let isGreater =  -4 > 1;
// alert(isGreater);

// let y;
// console.log(y , typeof y);
// console.log(typeof null); 

// let a = prompt("How old are you" , 25);

// alert(`you are ${a} years old`);

// let isGreater = confirm('is 4 greater than 1');
// alert(isGreater);

// document.write('this is a statement')

// let a = '';
// console.log(typeof a);
// a  = Number(a);
// a += 1;
// alert(a);

// let x , y , z;
// console.log(x , y ,z);
// x = Number(1);
// y = Number(2);
// z = Number(3);
// console.log(x,y,z);


//  BASIC OPERATIONS 
// let x ;
// let y ;
// let z;

// x = String(3.14);
// console.log(x , typeof x);

// y = Boolean('');
// console.log(y , typeof y);

// z = Number(1);
// console.log(z, typeof z);

// let a = document.getElementsByName("click").value;

// function typeConversion(){
//     let num = document.getElementById("userinput").value;
//     console.log(+num , typeof +num);
// }

// let x = "this is first string" + "this is second string"; 
// console.log(x/2);

// let num = 2;
// console.log(++num);
// console.log(num);

// console.log(num++);
// console.log(num);

// console.log(1||0&&0  , 0&&1||0&&1);



let sum=0;
while(true){
    let x= prompt('Enter the number')
    if(x==0){
        alert(sum);
        break;
    }

    else
    sum+=x;
}