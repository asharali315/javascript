// Task no 1:
// var a= +prompt("Enter a number:");
// document.write("The value of a is : "+a+"<br>");
// document.write("................................<br>")
// document.write("The value of ++a is : "+(++a)+"<br>");
// document.write("now value of a is : "+a+"<br>");

// document.write("The value of a++ is : "+(a++)+"<br>");
// document.write("now value of a is : "+a+"<br>");

// document.write("The value of --a is : "+(--a)+"<br>");
// document.write("now value of a is : "+a+"<br>");

// document.write("The value of a-- is : "+(a--)+"<br>");
// document.write("now value of a is : "+a+"<br>");

// Task no 2:
// document.write("var a = 2, b = 1;<br>");
// document.write("var result = --a - --b + ++b + b--;<br> ");
// document.write("               1 -  0 +    1 + 1;<br> ");
// document.write("result is  3<br> ");
// document.write("Explain the output at each stage:<br>");
// document.write("--a;<br>");
// document.write(" 1");
// document.write("--a - --b;<br>");
// document.write("1 - 0<br>");
// document.write("--a - --b + ++b;<br>");
// document.write("1 - 0 + 1<br>");
// document.write("--a - --b + ++b + b--;<br>");
// document.write("1 - 0 + 1 + 1<br>");
// document.write("result is 3");
 
// Task no 3:
// var name= prompt("What is your name?");
// alert("Welcome to js land "+name);

// Task no 5:"
// var input = +prompt("Enter a number");
// if(input>=0 || input <0)
// {
//     for (let i = 1; i <=10; i++) {
//         document.write(input+" x "+i+" = "+(input*i)+"<br>");
//     }
// }
// else
// {
//     for (let i = 1; i <=10; i++) {
//         document.write(5+" x "+i+" = "+(5*i)+"<br>");
//     }        
// }

// Task no 7:
// var sub1 ="Engish";
// var sub2 ="Islamiat";
// var sub3 ="Physics";
// var sub1Mark =+prompt("Enter 1st subject mark:");
// var sub2Mark =+prompt("Enter 2nd subject mark:");
// var sub3Mark =+prompt("Enter 3rd subject mark:");
// var totalMarks = 100;

// var percentage1 = (sub1Mark/totalMarks)*100;
// var percentage2 = (sub2Mark/totalMarks)*100;
// var percentage3 = (sub3Mark/totalMarks)*100;

// var averageMarks = (sub1Mark + sub2Mark + sub3Mark)/3;
// var averagePercentage = (percentage1 + percentage2 + percentage3)/3;
// document.write("<b>Subject</b> &nbsp &nbsp<b>Total Marks</b> &nbsp &nbsp<b>Obtained Marks</b> &nbsp &nbsp &nbsp &nbsp<b>Percentage</b><br>");
// document.write("<b>"+sub1+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp<b>&nbsp"+totalMarks+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>&nbsp"+sub1Mark+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>"+percentage1+"%</b><br>");
// document.write("<b>"+sub2+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp<b>&nbsp"+totalMarks+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>&nbsp"+sub2Mark+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>"+percentage2+"%</b><br>");
// document.write("<b>"+sub3+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp<b>&nbsp"+totalMarks+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>&nbsp"+sub3Mark+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>"+percentage3+"%</b><br>");
// document.write("<b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</b> &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp<b>&nbsp"+totalMarks+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>&nbsp"+averageMarks+"&nbsp</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<b>"+averagePercentage+"%</b><br>");