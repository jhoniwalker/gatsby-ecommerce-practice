import React from "react"
import { Link } from "gatsby"
//import formatprice from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

export default function Products({ products }) {
  return (
    <div>
      <StyledProducts>
        <h2>Productos</h2>
        <section>
          {products.map(({ node }) => {
            //const price = formatprice(node.price)
            return (
              <article key={node.id}>
                <img src={node.metadata.img} alt={node.name} />
                <p>{node.name}</p>
                <small>USD {node.metadata.price}</small>
                <Link to={`/${node.id}`}>
                  Comrar ahora{" "}
                  <span role="img" arial-label="Flecha">
                    →
                  </span>
                </Link>
              </article>
            )
          })}
        </section>
      </StyledProducts>
    </div>
  )
}
