import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function cancelacion() {
  return (
    <div>
      <SEO title="Compra Cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Sentimos que no hayas podido realizar realizar la compra</p>
        <p>Te esperamos de vuelta, no pares de aprender</p>
        <span role="img" arial-label="emoji">
          💔
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
