import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  NavItem,
  Col,
  Badge,
  Navbar,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import MyContext from './Provider'

const handleClick = () => {
  console.log('clicked')
}
const Header = () => {
  const [popoverOpen, setPopOverOpen] = useState(false)
  const onHover = () => {
    setPopOverOpen(true)
  }
  const onHoverLeave = () => {
    setPopOverOpen(false)
  }
  return (
    <MyContext.Consumer>
      {({ count, dataRef }) => (
        <Navbar color='dark'>
          <Col xs='auto'>
            <NavItem>
              <Link to='/'>
                <Badge color='primary' style={{ fontSize: 16 }}>
                  Products
                </Badge>
              </Link>
            </NavItem>
          </Col>
          <Col>
            <NavItem>
              <Link to='/admin'>
                <Badge color='primary' style={{ fontSize: 16 }}>
                  Admin
                </Badge>
              </Link>
            </NavItem>
          </Col>

          <Badge
            pill
            color='primary'
            style={{ marginRight: '1rem', size: '25' }}
            id='totalProducts'
            onMouseEnter={onHover}
            onMouseLeave={onHoverLeave}
          >
            {dataRef.current.length}
          </Badge>
          <Popover
            placement='bottom'
            isOpen={popoverOpen}
            target='totalProducts'
          >
            <PopoverHeader>Total Items.</PopoverHeader>
            <PopoverBody>
              Currently there are {dataRef.current.length} items being
              displayed.
            </PopoverBody>
          </Popover>

          <Button color='primary' size='sm' onClick={handleClick}>
            <img
              alt='Not found'
              src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png'
              style={{
                height: 40,
                width: 40,
              }}
            />
            <Badge pill>{count}</Badge>
          </Button>
        </Navbar>
      )}
    </MyContext.Consumer>
  )
}

export default Header
