const productos = [
    { nombre: "veganesa", precio: 280 },
    { nombre: "seitán", precio: 600 },
    { nombre: "tofu", precio: 1200 },
    { nombre: "leche de almendras", precio: 410 },

];
let carrito =[]

let seleccion = prompt("Hola bienvenido a Vegancoder, desea comprar algún producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, desea comprar algún producto si o no?")
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto)=>producto.nombre + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
}else if (seleccion == "no"){   
    alert("Muchas gracias por su visita, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    if(producto == "veganesa" || producto == "seitán" || producto == "tofu" || producto == "leche de almendras"){
        switch (producto) {
            case "veganesa":
            precio = 280;
            break;
            case "seitán":
            precio = 600;
            break;
            case "tofu":
            precio = 1200;
            break;
            case "leche de almendras":
            precio = 410;
            break;
        }

        let unidades = parseInt(prompt("Cuantas unidades desea comprar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No disponemos de tal producto")
    }
    seleccion = prompt("Desea continuar con su compra?")

    while(seleccion === "no"){
        alert("Muchas gracias por su compra y hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }   
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(carrito)
console.log(`El total a pagar por su compra es de: ${total}`)
