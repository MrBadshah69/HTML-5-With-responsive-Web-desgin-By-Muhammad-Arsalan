console.log("Lectureno3Operator")
document.write("<h1>Lecture no3 Operator</h1><br>")


num1=parseInt(prompt("Enter First Number"));
num2=parseInt(prompt("Enter First Number"));


answeradd=num1+num2
answersub=num1-num2
answerdiv=num1/num2
answermul=num1*num2
answerrem=num1%num2

document.write("Answer by Addition: "+num1+"+" +num2+"="+answeradd+"<br><br>");
document.write("Answer by Subtraction: "+num1+"-" +num2+"="+answersub+"<br><br>");
document.write("Answer by Division: "+num1+"/" +num2+"="+answerdiv+"<br><br>");
document.write("Answer by Multiplication:"+num1+"*" +num2+"="+answermul+"<br><br>");
document.write("Answer by Remainder: "+num1+"%" +num2+"="+answerrem+"<br><br>");