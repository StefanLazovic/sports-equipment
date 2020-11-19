import React, { useState, useEffect } from 'react'



const Message = ({ message }) => {

  const [show, setShow] = useState({ display: 'none' })



  // show success message right after post request
  const showMessage = () => {
    if (!message) {
      return
    } 
    setShow({ display: '' })
    setTimeout(() => {
      setShow({ display: 'none' })
    }, 1500)
  }
  


  // re-render the component every time message occurs
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