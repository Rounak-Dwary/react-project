import React, { useState, useEffect, useRef } from 'react'

import Header from './header'
import Admin from './Admin'
import Products from './Products'
import MyContext from './Provider'

import { Route, Routes } from 'react-router-dom'
const url = 'https://dummyjson.com/products?limit=22'

const Home = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const dataRef = useRef([])

  const getData = async () => {
    try {
      const response = await fetch(url)
      const responseJson = await response.json()
      dataRef.current = responseJson.products
      setData(dataRef.current)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const addToCart = () => {
    setCount(count + 1)
  }

  const handleSubmit = (product) => {
    console.log(product)
    let newData = [...dataRef.current, product]
    dataRef.current = newData
    setData(dataRef.current)
    console.log(dataRef.current)
  }
  return (
    <MyContext.Provider
      value={{
        addToCart,
        count,
        handleSubmit,
        dataRef,
        setData,
      }}
    >
      <div style={{ overflowY: 'hidden' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='admin' element={<Admin />}></Route>
        </Routes>
      </div>
    </MyContext.Provider>
  )
}

export default Home
