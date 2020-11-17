import React, { useState, useEffect } from 'react'

const Message = ({ message }) => {
  const [show, setShow] = useState({ display: 'none' })

  const showMessage = () => {
    if (message) {
      setShow({ display: '' })
    } 
    setTimeout(() => {
      setShow({ display: 'none' })
    }, 3000)
  }
  
  useEffect(() => {
    showMessage()
  }, [message])

  return (
    <div className="alert alert-success" role="alert" style={show}>
      {message}
    </div>
  )
}

export default Message