import React, { useContext, useRef, useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import MyContext from './Provider'

const Admin = () => {
  const { dataRef } = useContext(MyContext)
  const [product, setProduct] = useState({
    title: '',
    brand: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    rating: 0.0,
    discount: 0,
  })
  const productRef = useRef(product)
  const [rating, setRating] = useState(0.0)
  const { title, brand, description, category, price, stock, discount } =
    productRef.current

  const handleChange = (e) => {
    const name = e.target.name
    const val = e.target.value
    let newProduct = { ...product, [name]: val }
    productRef.current = newProduct
    setProduct(productRef.current)
  }

  return (
    <MyContext.Consumer>
      {({ handleSubmit }) => (
        <div style={{ margin: '10px' }}>
          <Form
            style={{ padding: '10px' }}
            onSubmit={(e) => {
              e.preventDefault()
              let newProduct = {
                id: dataRef.current.length + 1,
                ...productRef.current,
                thumbnail:
                  'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
              }
              productRef.current = newProduct
              setProduct(newProduct)
              handleSubmit(productRef.current)
              alert('Submitted')
            }}
          >
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for='title'>Title</Label>
                  <Input
                    id='title'
                    name='title'
                    placeholder='eg.Iphone X,Macbook Air'
                    type='text'
                    value={title}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='brand'>Brand</Label>
                  <Input
                    id='brand'
                    name='brand'
                    placeholder='eg. Apple,Samsung'
                    type='text'
                    value={brand}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input
                id='description'
                name='description'
                type='textarea'
                placeholder='tell about the product,its features etc'
                value={description}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='category'>Category</Label>
              <Input
                id='category'
                name='category'
                placeholder='eg.Smartphones,Laptops,etc.'
                value={category}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for='price'>Price (in $)</Label>
                  <Input
                    id='price'
                    type='number'
                    name='price'
                    value={price}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for='stock'>Stock</Label>
                  <Input
                    id='stock'
                    name='stock'
                    type='number'
                    value={stock}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='rating'>Rating</Label>
              <Input
                id='rating'
                name='rating'
                type='range'
                required
                value={rating}
                onChange={(e) => {
                  let newRating = Math.round(e.target.value * 5) / 100
                  setRating(e.target.value)
                  productRef.current = {
                    ...productRef.current,
                    rating: newRating,
                  }
                  setProduct(productRef.current)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for='discount'>Discount percentage</Label>
              <Input
                id='discount'
                name='discount'
                type='number'
                max={100}
                min={0}
                value={discount}
                onChange={handleChange}
              />
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default Admin
