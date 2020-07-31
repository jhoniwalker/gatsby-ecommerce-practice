import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import { CartContext } from "../context"
export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  const getTotal = () => {
    setTotal(cart.reduce((acum, current) => acum + current.quantity, 0))
  }

  //useEffect lo usamos para ejecutar getTotal cuando nuestro componente cargue en la vista
  //es un hook para el ciclo de vida de los componentes
  useEffect(() => {
    getTotal()
    console.log(total)
  }, [])
  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.sku}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} />
              </td>
              <td>USD {swag.metadata.price}</td>
              <td>{swag.quantity}</td>
              <td>{swag.quantity * swag.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>
            USD {total} Estoy contando la cantidad porque no hice un format del
            código
          </small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
