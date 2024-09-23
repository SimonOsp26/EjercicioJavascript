let num1 = Number (prompt("escriba el primer numero"));
let num2 = Number (prompt("Escriba el segundo numero"));
let operacion = (prompt("+,-,*,/"));

switch (operacion) {
    case "+":
    alert(num1+num2)
    break
    case "-" :
    alert(num1-num2)
    break
    case "*":
    alert(num1*num2)
    break
    case "/":
    alert(num1/num2)
    default:
    alert(error)

}