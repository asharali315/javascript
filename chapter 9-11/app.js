    
// Task No 1:
// var cityName=prompt("Enter your city name:").toLowerCase();
// if(cityName ==="karachi")
// document.write("<h1>Welcome to the city of light</h1>");


// Task No 2:
// var gender=prompt("Enter your  Gender:").toLowerCase();
// if(gender ==="male")
// document.write("<h1>Good Morning Sir</h1>");
// else
// document.write("<h1>Good Morning Ma'am</h1>");

// Task no 3:
// var color = prompt("Select a colour from Red,Green,Yellow").toLowerCase();
// if(color ==="red")
// document.write("<h1>Must Stop</h1>")
// else if(color ==="green")
// document.write("<h1>Move Now</h1>")
// else if(color ==="yellow")
// document.write("<h1>Ready to move</h1>")

// Task no 4:
// var feul = +prompt("Enter amount of feul in your car in liters");
// if(feul<0.25)
// document.write("<h1>Please Refill the feul in your car</h1>");

// Task no 5:
// document.write("a. var a = 4;<br>");
// document.write(" if (++a === 5){<br>");
// document.write("++a mean it is 5 <br>");
// document.write(" alert(given condition for variable a is true);}<br>");
// document.write("so the alert will be played")


// document.write("b. var b = 82;<br>");
// document.write("if (b++ === 83){<br>");
// document.write("b++ mean incremented is done after line changed it is 82 <br>");
// document.write("alert(given condition for variable b is true);<br>");
// document.write("so the alert will not be played")

// document.write("c. var c = 12;<br>");
// document.write("if (c++ === 13){<br>");
// document.write("c++ mean incremented is done after line changed it is 12 <br>");
// document.write("alert(given condition for variable c is true);<br>");
// document.write("so the alert will not be played")

// document.write("if (c === 13){;<br>");
// document.write("alert(condition 2 is true);}<br>");
// document.write("alert will be played since c++ incremented c<br>");

// document.write("if (++c < 14){<br>");
// document.write("alert(condition 3 is true);}<br>");
// document.write("c was 13 and ++c set it to 14 so alert will not be displayed <br>");

// document.write("if(c === 14){<br>");
// document.write("alert(condition 4 is true);}<br>");
// document.write("c wes set to 14 14 so alert will  be displayed <br>");

// document.write("d. var materialCost = 20000;<br>var laborCost = 2000;<br>");
// document.write("var totalCost = materialCost + laborCost;<br>");
// document.write("if (totalCost === laborCost + materialCost){<br>");
// document.write("alert(The cost equals);}<br>");
// document.write("Alert will be displayed<br>");


// document.write("d. var materialCost = 20000;<br>var laborCost = 2000;<br>");
// document.write("var totalCost = materialCost + laborCost;<br>");
// document.write("e. if (true)<br>{<br>alert(True); <br>}<br>");
// document.write("alert will be displayed");
// document.write("e. if (false)<br>{<br>alert(False); <br>}<br>");
// document.write("alert will not  be displayed");


// document.write("f. if(car < cat)<br>{alert(car is smaller than cat);<br> }<br>");
//document.write("alert will be displayed because string car comes before cat  since in alphabetical order r comes before t")

// Task no 5 end

// Task no 6
// var sub1 = +prompt("Enter 1st subject mark");
// var sub2 = +prompt("Enter 2nd subject mark");
// var sub3 = +prompt("Enter 3rd subject mark");
// var AOne = "Excellent";
// var A = "Good";
// var B =" You need to Improve";
// var C ="Fail"
// var total= sub1+sub2+sub3;
// var Percentage=(total/300)*100;
// document.write("<h1>Mark Sheet</h1><br>");
// document.write("Total Marks : "+300+"<br>");
// document.write("Obtained Marks : "+total+"<br>");
// document.write("Percentage : "+percentage+"<br>");

// if(percentage>= 80 )
// {
//  document.write("Remarks : "+AOne);   
// } else if(percentage>= 70 )
// {
//  document.write("Remarks : "+A);   
// } else if(percentage>= 60 )
// {
//  document.write("Remarks : "+B);   
// }
// else 
// {
//     document.write("Remarks : "+C);   
// }

// Task no 7:
// var number =1;
// var input = +prompt("Enter a number between 1 to 10");
// if(input === number)
// {
//   document.write("Bingo!Correct choice");  
// } else if(input == (number+1))
// {
//    document.write("Close enough to the correct answer");
// }else
// {
//     document.write("Incorrect choice"); 
// } 


// Task no 8:
// var number=+prompt("Enter a number:");
// if(number%3 ===0)
// {
//   document.write("No. is divisible by 3")  
// }
// else{
// document.write("No. is not divisible by 3")  
// }

// Task no 9:
// var number=+prompt("Enter a number:");
// if(number%2 ===0)
// {
//   document.write("No. is even");  
// }
// else{
// document.write("No. is odd");
// }

// Task no 10:
// var number=+prompt("Enter a number:");
// if(number>40)
// {
//   document.write("It is too hot outside");
// }
// else if(number>30)
// document.write("The weather is normal today");  
// } else if(number >20)
// {
//   document.write("Todays weather is cool");   
// } else if(number >10)
// {
//   document.write("OMG! Todays weather is so cool");  
// }

// Task no 11:
// var num1 =+prompt("enter a number"); 
// var num2 =+prompt("enter a number");
// var result;
// var operator =prompt("enter any operator");
// if(operator ==='+')
// {
// result=num1+num2;
// document.write("The sum of "+num1+" and "+num2+" is : "+result);
// } 
// else if(operator === '-')
// {
//     result=num1-num2;
//     document.write("The differece of "+num1+" and "+num2+" is : "+result);
    
// } else if(operator === '*')
// {
//     result=num1*num2;
//     document.write("The product of "+num1+" and "+num2+" is : "+result);
    
// } else if(operator === '/')
// {
//     result=num1/num2;
//     document.write("The division of "+num1+" and "+num2+" is : "+result);
    
// } else if(operator ==='%')
// {
//     result=num1%num2;
//     document.write("The remainder of "+num1+" dividing by "+num2+" is : "+result);
    
// } else
// {
//   document.write("Wrong operator");  
// }

