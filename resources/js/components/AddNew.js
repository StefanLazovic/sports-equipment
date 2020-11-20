import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Message from './Message'



const AddNew = () => {

  // success message for Message.js component
  const [message, setMessage] = useState('')
  

  // bootstrap 4 red and green frame colors for inputs
  const formErrors = (errors, property) => {
    if (JSON.stringify(errors) === '{}') {
      return ''
    } else if (errors[property] !== undefined) {
      return 'is-invalid'
    } else if (errors[property] === undefined) {
      return 'is-valid'
    }
  }


  const initialValues = {
    title: '',
    description: '',
    price: 0,
    category: ''
  }


  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    description: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    price: Yup.number().positive().required('Required'),
    category: Yup.string().oneOf(['soccer', 'basket', 'rugby']).required('Required'),
  })


  const cleanMessage = () => {
    setMessage('')
  }


  const onSubmit = (values, { setSubmitting, resetForm }) => {
    cleanMessage()
    axios.post('http://localhost:8000/api/products', values)
    .then(res => {
      setMessage(res.data.msg)
      resetForm()
      setSubmitting(false)
    })
    .catch(err => console.log(err))
  }


  const formikProps = {
    initialValues,
    validationSchema,
    onSubmit
  }


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h1 id="h1">Add New Product</h1>
      </div>
      <Message message={message} />
      <Formik {...formikProps}>
        {
          ({ isSubmitting, errors }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="title">Product Title</label>
                <Field type="text" name="title" className={`form-control ${formErrors(errors, 'title')}`} placeholder="Enter Title" id="title" />
                <ErrorMessage name="title" component="div" style={{ color: 'red' }}></ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <Field type="text" name="description" className={`form-control ${formErrors(errors, 'description')}`} placeholder="Enter Description" id="description" />
                <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
              </div>

              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <Field type="number" name="price" className={`form-control ${formErrors(errors, 'price')}`} placeholder="Enter Price" id="price" />
                <ErrorMessage name="price" component="div" style={{ color: 'red' }} />
              </div>

              <div className="form-group">
                <label htmlFor="category">Product Category</label>
                <Field as="select" name="category" className={`form-control ${formErrors(errors, 'category')}`} id="category">
                  <option value="" disabled hidden>Choose Category</option>
                  <option value="soccer">Soccer</option>
                  <option value="basket">Basket</option>
                  <option value="rugby">Rugby</option>
                </Field>
                <ErrorMessage name="category" component="div" style={{ color: 'red' }} />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )

}



export default AddNew

