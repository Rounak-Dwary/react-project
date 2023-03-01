import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap'
import MyContext from './Provider'

const Product = ({
  thumbnail,
  title,
  price,
  id,
  description,
  brand,
  category,
  rating,
}) => {
  return (
    <MyContext.Consumer>
      {({ addToCart }) => (
        <Card
          key={id}
          className='my-2'
          color='secondary'
          outline
          style={{
            width: '19rem',
            marginLeft: '0.8rem',
          }}
        >
          <CardImg
            alt='Product Image'
            src={thumbnail}
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null // prevents looping
            //   currentTarget.src =

            // }}
            style={{
              height: 200,
              width: 300,
              alignSelf: 'center',
            }}
          />
          <div style={{ display: 'inline-flex' }}>
            <CardText style={{ opacity: 0.4, width: '180px' }}>
              {category}-{brand}
            </CardText>
            <CardText
              style={{
                position: 'absolute',
                right: 0,
                opacity: 0.4,
                paddingRight: '0.5rem',
              }}
            >
              Rating:{rating}
            </CardText>
          </div>

          <CardBody>
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardSubtitle className='mb-2 text-muted' tag='h6'>
              ${price}
            </CardSubtitle>

            <CardText>{description}</CardText>
          </CardBody>
          <Button color='primary' size='sm' onClick={addToCart}>
            Add to cart
          </Button>
          <br />
        </Card>
      )}
    </MyContext.Consumer>
  )
}

export default Product
