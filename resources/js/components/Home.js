import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FavouriteButton from './FavouriteButton'
import Pagination from './Pagination'



const Home = () => {

  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({})
  

  // called only once after component render
  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/products')
    .then(res => {
      setProducts(res.data.data)
      setMeta(res.data.meta)
    })
    .catch(err => console.log(err))
  }


  // call, save, and show next portion of products (Pagination.js)
  const callPaginationProducts = (url) => {
    if (url === null) {
      return
    }
    axios.get(url)
    .then(res => {
      setProducts(res.data.data)
      setMeta(res.data.meta)
    })
  }


  useEffect(() => {
    fetchProducts()
  }, [])
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h1>Choose & buy whatever you want!</h1>
      </div>
      <div className="row py-5">
        {
          products.map(product => (
            <div className="col-lg-4 col-md-6 mb-5" key={product.id}>
              <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <small className="text-muted float-right">
                    <span className="align-text-top">{product.price} $</span><br/>
                    <span className="align-text-top">{product.category}</span>
                  </small>
                  <a href="#" className="card-link">Details</a>
                  <a href="#" className="card-link"><FavouriteButton product={product} /></a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        products.length === 0
        ? null
        : <Pagination meta={meta} callPaginationProducts={callPaginationProducts} />
      }
    </div>
  )

}



export default Home
