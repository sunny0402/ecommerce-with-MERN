import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

//instead of props.product._id
//use destructuring Product = ({product})
const Product = ({product}) => {
    return (
    //bootstrap card
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </a>
        <Card.Body>
        <a href={`/product/${product._id}`}>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </a>

        <Card.Text as='div'>
            <Rating value={product.rating} 
            text={`${product.numReviews} reviews`}
            />
            {/* <div className="my-3">
                {product.rating} from {product.numReviews} reviews
            </div> */}
        </Card.Text>

        <Card.Text as='h3'>
                ${product.price}
        </Card.Text>



        </Card.Body>
    </Card>
    );
};

export default Product
