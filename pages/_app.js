import "../styles/normalize.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  useEffect(()=>{
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    //dado que el useEffect se actualiza dos vces, la manera de controlarlo  es verificar que solamente ingrese el carrito  si efectivamente tiene productos, de esta manera evitamos que lo pase vacio, ya que nunca lo mete si la longitud es 0
    if (carritoLS.length !== 0 ) {
      setCarrito(carritoLS)
    }

 
  }, []);
 
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    // este if comprueba si el  carrito hay un elemento igual es el metodo some ya que es un objeto el que evaluaremos este metodo solo retorna true o false
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      // console.log("producto duplicado");
      // usamos el map para iterar en cada uno de los registros por que el de arriba "some" solo me retorna true o false
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      // console.log("nuevo producto");
      setCarrito([...carrito, producto]);
    }
  };

  const actualizarCantidad = (producto) => { 
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id =>{
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }

  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
