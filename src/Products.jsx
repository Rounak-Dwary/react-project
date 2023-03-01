import React, { useContext, useState } from 'react'
import { Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import MyContext from './Provider'
import { useRef } from 'react'

const Products = () => {
  const { dataRef } = useContext(MyContext)

  // const [searchInput, setSearchInput] = useState('')
  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setSearchInput(e.target.value)
  //   const filteredData = data.filter((product) => {
  //     if (searchInput === '') return product
  //     else {
  //       return product.title.toLowerCase().includes(searchInput.toLowerCase())
  //     }
  //   })
  //   dataRef.current = filteredData
  // }

  return (
    <>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label
          htmlFor='search'
          style={{
            marginInlineStart: '0.8rem',
            marginRight: '1rem',
          }}
        >
          Search:
        </label>
        <input
          type='text'
          id='search'
          // value={searchInput}
          // onChange={handleChange}
        />
      </div>

      <Row style={{ paddingLeft: '8px' }}>
        {dataRef.current.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </Row>
    </>
  )
}

export default Products
