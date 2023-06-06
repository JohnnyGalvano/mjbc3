let pedirNombre = prompt (`Bienvenido/a ingresa tu nombre:`)
let pedirEdad = parseInt(prompt (`Ingresa tu edad:`))
function saludar(nombre, edad) {
    
    if (edad >= 18) {
        alert (`Bienvenido/a ${nombre}!`)
        alert (`Podes ingresar al sitio`)
    } else {
        alert (`Lo sentimos ${nombre} no podes ingresar al sitio`)
    }
}
saludar(pedirNombre, pedirEdad)


    let ususario = prompt (`ingrese su usuario para comprar en el sitio`)
    let contrasenia = prompt (`Bienvenido ${ususario} ingrese su contraseña:`)
    while (contrasenia != `maquillaje`) {
        alert (`Contraseña invalida, intentelo de nuevo`)
        contrasenia = prompt (`Bienvenido ${ususario} ingrese su contraseña:`)
    }
    alert (`Bienvenido ${ususario} ya podes adquirir nuestros productos!`)