import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  
  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/products')
    .then(res => setProducts(res.data.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchProducts()
  }, [products])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Choose & buy whatever you want!</h1>
        {
          products.map(product => (
            <table className="table" key={product.id}>
              <tbody>
                <tr>
                  <th scope="row">{product.id}</th>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </table>
          ))
        }
      </div>
    </div>
  )
}

export default Home
