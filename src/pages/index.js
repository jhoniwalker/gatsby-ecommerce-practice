import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from "../components"
//import styled from "styled-components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
          metadata {
            description
            img
            price
            wear
          }
        }
      }
    }
  }
`
/*const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
  }
`*/

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeProduct.edges} />
    </>
  )
}

export default IndexPage
