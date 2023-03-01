import React from 'react'
const MyContext = React.createContext({
  handleAdd: () => {},
  count: 0,
  onSubmit: () => {},
})
export default MyContext
