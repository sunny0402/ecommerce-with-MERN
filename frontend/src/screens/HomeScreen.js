import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
        <Row>
            {products.map(
                (product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* Product component will have a prop of product */}
                    {/* product is an invidual product from the product list */}
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
