//funciones

//crear cuenta
function crearCuenta() {
    let usuario = prompt("Escribi tu nombre de usuario");
    let gmail = prompt("Escribi tu gmail"); 
    let contraseña = prompt("Escribi tu contraseña");
    
    return {usuario, gmail, contraseña};
}


//login
function login(cuenta) {
    let nombre = prompt("Ingrese su nombre");
    
    if(validarNombre(nombre, cuenta)) {
      return nombre; 
    } else {
      alert("Nombre invalido");
      return login(cuenta);
    }
}
  
function validarNombre(nombre, cuenta) {
    return nombre === cuenta.usuario;
}
  
function validarContraseña(contraseña, cuenta) {
    return contraseña === cuenta.contraseña; 
}

//calculo
function calcularInteresAnual(deposito) {
  let interes = deposito * 0.017;
  return parseFloat(deposito) + interes;
}

function calcularInteresTotal(deposito, anos) {
  let interesAnual = calcularInteresAnual(deposito);
  let interesTotal = interesAnual;
  
  for(let i=1; i<anos; i++) {
    interesTotal += interesTotal * 0.017;
  }
  
  return parseFloat(deposito) + interesTotal;
}


//inicio
alert("Bienvenido a banca pirulo");
  
let cuenta = crearCuenta();
  
alert("Vamos a iniciar sesion");
  
let nombre = login(cuenta);
  
  let contraseña2 = prompt("Ingrese su contraseña");
  
if(validarContraseña(contraseña2, cuenta)) {
    alert("Bienvenido " + nombre);
} else {
    alert("Contraseña incorrecta");
}

let deposito = prompt("Deposito inicial?");

let depositoAnual = calcularInteresAnual(deposito);  

alert("Deposito anual: " + depositoAnual);

let anos = prompt("Años a calcular?");  

let depositoTotal = calcularInteresTotal(deposito, anos);

alert("Deposito total después de " + anos + " años: " + depositoTotal);