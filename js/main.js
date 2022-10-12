function registro() {
    let usuario = prompt(`Ingresa tu nombre de ususario`)
    let contrasena = prompt(`Bienvenido ${usuario} ingresa la contraseña`);
    while (contrasena != `maquillaje`) {
        contrasena = prompt(`La contraseña no es la correcta. Por favor ingresala de nuevo`)
    }
    alert(`Bienvenido podes ingresar al sitio`)
}
registro()

class Producto {
    constructor(id, nombre, descripcion, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
    }
}

const producto1 = new Producto(
    001,
    `Ultrafluid Cover 24 Hs`,
    `Maquillaje concentrado en gotas. Libre de parabenos. Efecto “Soft Focus”`,
    1500
);
const producto2 = new Producto(
    002,
    `Stay Matte Make Up`,
    `Base de Maquillaje Efecto Mate`,
    2000
);
const producto3 = new Producto(
    003,
    `Corrector de tonos`,
    `Corrector con alto poder cubritivo`,
    500
);
const producto4 = new Producto(
    004,
    `Complete concealer & Blush set`,
    `Coleccion de correctores y rubores`,
    3000
);
const producto5 = new Producto(
    005,
    `Perfect Rouge HA`,
    `Labial mate hipoalergenico con acido hialuronico`,
    1500
);
const producto6 = new Producto(
    006,
    `Color Blush`,
    `Rubor compacto hidratante`,
    1000
);
const producto7 = new Producto(
    007,
    `Velvet Matte Lipstick`,
    `Labial Mate Brillante Aterciopelado. Ultra fijación`,
    1500
);
const producto8 = new Producto(
    008,
    `Matte Blur Make Up`,
    `Base de maquillaje blur effect. Matifica el tono de la piel.`,
    2500
);

const listaDeProductos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
]

function simuladorDeTienda() {
    let opciones = prompt (`Elija una de las siguientes opciones para continuar:
                            1- Listar productos
                            2- Buscar productos
                            3- Agregar producto al catalogo`)
    switch (opciones) {
        case `1`:
            alert (`eligio listar productos`)
            const imprimible = listaDeProductos.join(`#`)
            console.log(imprimible)
            
            break;
        case `2`: 
            alert (`Eligio buscar producto`)

            break;
        case `3`:
            alert (`Eligio agregar un producto al catalogo`)
            let idNuevo = prompt (`Ingrese el ID del nnuevo producto`)
            let nombreNuevo = prompt (`Ingrese el nombre del producto nuevo`)
            let descripNuevo = prompt (`Ingrese descrpcion del producto nuevo`)
            let precioNuevo = prompt (`Ingrese precio del producto`)
            const productoNuevo = new Producto (idNuevo, nombreNuevo, descripNuevo, precioNuevo);
            listaDeProductos.push(productoNuevo)
            console.log(listaDeProductos)
            break;
        
    
        default:
            alert (`Ingrese una opcion valida`)
            simuladorDeTienda()
            break;
    }
    
}
simuladorDeTienda()

