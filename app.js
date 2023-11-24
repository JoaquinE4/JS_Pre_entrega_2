const prodData = [
{
    id:1,
    producto: 'MACETA FRIDA',
    precio: 3000,
    descripcion: 'Maceta con forma de frita',
},
{
    id:2,
    producto: 'Maceta Gato',
    precio: 5000,
    descripcion: 'Maceta con forma de gato acostado',
},
{
    id:3,
    producto: 'Tutor Gato',
    precio: 2000,
    descripcion: 'Tutor con forma de gato',
},

{
    id:4,
    producto: 'acrobata',
    precio: 4000,
    descripcion: 'Maceta de mujer haciendo la vertical',
},
{
    id:5,
    producto: 'Vela gato',
    precio: 2000,
    descripcion: 'Porta velas con forma de gato',
},
];

class Producto {
constructor(id, producto, precio, descripcion) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.descripcion = descripcion;
}
}

const productoS = prodData.map(producto => new Producto(producto.id,producto.producto, producto.precio, producto.descripcion));





class Usuario {
constructor(nombre, email, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this.contraseña = contraseña;
}
}

class Carrito {
constructor() {
    (this.productos = []), (this.total = 0);
}


    aplicarDescuento() {
        const porcentajeDescuento = 0.15;
        if (this.total > 10000) {
            const descuento = this.total - this.total * porcentajeDescuento;
            console.log('Se aplicó un descuento del 15%');
            this.total = descuento;
        } else {
            console.log('No se aplicó descuento');
}
};
}




function registrarNuevoUsuario() {
const nombre = prompt('Ingrese su nombre:')
const email = prompt('Ingrese su correo electrónico:');
const contraseña = prompt('Ingrese su contraseña:');

const nuevoUsuario = new Usuario(nombre, email, contraseña);

alert(
    `Nuevo usuario registrado:\nNombre: ${nombre}\nEmail: ${email}\nContraseña: ${contraseña}`
);

return nuevoUsuario;
}



if (registrarNuevoUsuario()) {
const crarCarrito = confirm('Desea crear Carrito de compras?');
if (crarCarrito) {

    menu();

} else {
    alert('chao chao!');
}
}

function menu() {
const carrito = new Carrito();

while (true) {
    const opcion = prompt('¿Qué deseas hacer?\n1. Ver Catalogo Productos\n2. Agregar producto\n3. Ver carrito\n4. Pagar\n5. Salir');

    switch (opcion) {
    case '1':
        alert('lista de productos\n' +  productoS.map(p=> `${p.id} - ${p.producto} - $${p.precio}`).join("\n")
        )
        break;    
    case '2':
        const productoId = parseInt(prompt('Ingrese el id del producto que desea agregar:'));
        const productoElegido = productoS.find(producto => producto.id === productoId);

        if (productoElegido) {
            carrito.productos.push(productoElegido);
            alert(`el producto  se agrego a su carrito `)
        
        } else {
        alert('No se encontró el producto con el id ingresado');
        }
        break;
    case '3':
        alert('Productos en el carrito:');
    carrito.productos.forEach(producto => {
        alert(`Producto: ${producto.producto}, Precio: ${producto.precio}`);
        carrito.total += producto.precio; 
    });
    alert(`Total: ${carrito.total}`);
    break;
    case '4':
        carrito.aplicarDescuento();
        alert(`Total con descuento: $${carrito.total}`);
        break;
    case '5':
        alert('Gracias por comprar');
        return;

    default:
        alert('Opción no válida');
    }
}
}

