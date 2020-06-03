// Task no 1:
// var studentLiteral = [];


// Task no 2:
// var studentObject = new Array();

// Task no 3:
// var stringAArray = ["ashar","ali"];

// Task no 4:
// var numberArray=[2,3,3];

// Task no 5:
// var boolArray=[true,false];

// Task no 6:
// var mixedArray=[1,"ashar",3,'d'];

// Task no 7:
// var qualification = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for (let i = 1; i <= qualification.length; i++) {
//     document.write(i+") "+qualification[i-1]+"<br>");
// }

// Task no 8:
// var students = ["Ashar","Ali","Faizan"];
// var marks = [450,451,350];
// var percentange=[];
// for (let i = 0; i < marks.length; i++) {
//     percentange[i]=(marks[i]/500 )* 100;
// }

// for (let i = 0; i < students.length; i++) {
//     document.write(students[i]+" obtained "+marks[i]+" with "+percentange[i]+"%<br> ");
// }

// Task no 9;
// var color = ["red","green","blue"];
// task 9(a)
// for (let i = 0; i < color.length; i++) {
//     document.write(color[i]+"<br>");
// }
// Task 9(b)
// var newColor=prompt("enter a new color name:");
// color.unshift(newColor);
// for (let i = 0; i < color.length; i++) {
//          document.write(color[i]+"<br>");
//      }


// Task 9(c);
// var newColor=prompt("Enter a color name");
// color.unshift(newColor);
//  newColor=prompt("Enter a color name");
// color.unshift(newColor);
    //    for (let i = 0; i < color.length; i++) {
    //             document.write(color[i]+"<br>");
    //         }
    
// Task 9(d):
// color.shift();
// for (let i = 0; i < color.length; i++) {
// document.write(color[i]+"<br>");
// }

// Task 9(e);
// color.pop(color.length-1);
// for (let i = 0; i < color.length; i++) {
//     document.write(color[i]+"<br>");
// }

// Task 9(f):
// var index =+prompt("enter at which position [1-3] do you want to insert new color")-1;
// var name =prompt("enter color name:");
// color.splice(index,0,name);
// for (let i = 0; i < color.length; i++) {
// document.write(color[i]+"<br>");
// }

// Task 9(g):
// var index =+prompt("enter from which position [1-3] do you want to delete  color")-1;
// var count =+prompt("how many element do you want to delete out of 3:");
// color.splice(index,count);
// if(color.length==0)
// {
//    document.write("color is empty"); 
// }else
// {
// for (let i = 0; i < color.length; i++) {
// document.write(color[i]+"<br>");
// }
// }

// Task 10:
// var marks =[];
// for (let index = 0; index <5; index++) {
//     marks[index]=+prompt("enter marks of student");
// }
// document.write("<h2>Before Sort</h2>")
// for (let index = 0; index <5; index++) {
//     document.write(marks[index]+"<br>") ;
// }

// document.write("<h2>After Sort</h2>")
// marks.sort();
// for (let index = 0; index <5; index++) {
//    document.write(marks[index]+"<br>") ;
// }

// Task no 11:
// var cities =["Karachi","Lahore","Quetta","Peshawar","Hyderabad"];
// document.write("<h1>All cities</h1><br>");
// for (let index = 0; index <cities.length; index++) {
// document.write(cities[index]+"<br>") ;
// }
// var selectedCities = cities.slice(2,5);
// document.write("<h1>All Selected cities</h1><br>");
// for (let index = 0; index <selectedCities.length; index++) {
// document.write(selectedCities[index]+"<br>") ;
// }

// Task no 12:
// var sentanceArray = ["This","is","a","cat"];
// document.write("<h1>Array</h1><br>")
// for (let i = 0; i < sentanceArray.length; i++) {
//     document.write(" \""+sentanceArray[i]+"\" <br>");    
// }

// var sentance= sentanceArray.join();
// sentance=sentance.replace("\," , " ");
// sentance=sentance.replace("\," , " ");
// sentance=sentance.replace("\," , " ");
// sentance=sentance.replace("\," , " ");
// document.write("<h1>"+sentance+"</h1>");


// Task no 13:
// var fifo =[];
// for (let index = 0; index < 5; index++) {
//     fifo.unshift(prompt("Enter a computer device name"));
// }
// for (let index = 0; index < 5; index++) {
//     document.write(fifo[index]+"<br>");
// }
// for (let index = 0; index < 5; index++) {
//     fifo.pop(fifo.length-1);

//     document.write("<br><h1>After Removing element</h1><br>"); 
//     for (let j = 0; j < fifo.length; j++) {
//         document.write(fifo[j]+"<br>"); 
        
//     }
// }

// Task no 14:
// var fifo =[];
// for (let index = 0; index < 5; index++) {
//     fifo.push(prompt("Enter a computer device name"));
// }
// for (let index = 0; index < 5; index++) {
//     document.write(fifo[index]+"<br>");
// }
// for (let index = 0; index < 5; index++) {
//     fifo.shift();
//     document.write("<br><h1>After Removing element</h1><br>"); 
//     for (let j = 0; j < fifo.length; j++) {
//         document.write(fifo[j]+"<br>"); 
//     }
// }

// // Task 15:
// var phone =["Apple","Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];
// for (let index = 0; index < phone.length; index++) {
//     document.write("* . "+phone[index]+"<br>");    
// }