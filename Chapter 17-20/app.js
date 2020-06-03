// Task no 1:
// var multiDimenstionalArray = [3][3];

// Task no 2;
// var array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//      document.write(array[i][j]+" ");   
//     }
//     document.write("<br>");
// }

// Task no 3:
// for (let index = 1; index <11 ; index++) {
//     document.write(index+"<br>");
// }

// Task no 4:
// var table=+prompt("Enter a number of table:");
// var index=+prompt("Enter a number upto which you want table to extend");

// for (let i = 1; i <= index; i++) {
//     document.write(table+" x "+i+" = "+(table*i)+"<br>");    
// }

// Task no 5:
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write("element at index"+i+" is "+fruits[i]+"<br>")
// }

// Task no 6:
// Task 6(a):
// var number=+prompt("enter the limit of counting");
// for (let index = 1; index <=number; index++) {
//     document.write(index);
//     if(index!=number)
//     document.write(" , ");
// }

// Task no 6(b):
// var number=+prompt("enter the limit for reverse counting");
// for (let index = number; index >=1; index--) {
//     document.write(index);
//     if(index!=1)
//     document.write(" , ");
// }

// Task no 6(c):
// var even=0;
// var number=+prompt("enter the no. of even number for printing");
// for (let index = 0; index <=number; index++) {
//     document.write(even);
//     even+=2;
//     if(index!=number)
//     document.write(" , ");
// }

// Task no 6(d):
// var odd=1;
// var number=+prompt("enter the no. of odd number for printing");
// for (let index = 0; index <=number; index++) {
    //     document.write(odd);
//     odd+=2;
//     if(index!=number)
//     document.write(" , ");
// }


// Task no 6(e):
// var even=2;
// var number=+prompt("enter the no. for series  for printing");
// for (let index = 0; index <=number; index++) {
//     document.write(even+"K");
//     even+=2;
//     if(index!=number)
//     document.write(" , ");
// }

// Task no 7:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input= prompt("Enter a food name").toLowerCase();
// var index=-1;
// for (let i = 0; i < A.length; i++) {
//     if(A[i]==input)
//     {
//     index=i;
//     break;
//     }
// }
// if(index== -1)
// document.write(input+" not found in array");
// else
// document.write(input+" found in array at"+index+" postion");

// Task no 8:
// var numbers=[];
// var greatestNumber=0;
// for(var i=0; i<5; i++)
// {
// numbers[i] = +prompt("Enter a number at index ["+i+"]: ");
// }
// for(var i=0; i<5; i++)
// {
//     document.write(numbers[i]);
//     if(i!=4)
//     document.write(",");
// }
// document.write("<br>");
// greatestNumber = numbers[0];

// for(var i=0; i<5; i++)
// {
//     if (numbers[i]>greatestNumber)
//     {
//     greatestNumber=numbers[i];   
//     }
// }
// document.write(" The largest number is : "+greatestNumber);

// Task no 9:
// var numbers=[];
// var lowestNumber=0;
// for(var i=0; i<5; i++)
// {
// numbers[i] = +prompt("Enter a number at index ["+i+"]: ");
// }

// for(var i=0; i<5; i++)
// {
//     document.write(numbers[i]);
//     if(i!=4)
//     document.write(",");
// }

// document.write("<br>");
// lowestNumber = numbers[0];

// for(var i=0; i<5; i++)
// {
//     if (numbers[i]<lowestNumber)
//     {
//     lowestNumber=numbers[i];   
//     }
// }
// document.write(" The smallest number is : "+lowestNumber);

// Task no 10:
// for (let i = 1; i  <=20; i++) {
//     document.write(5*i);
//     if(i!=20)
//     document.write(",");
// }

