import './MensClothing.css'

import { useEffect, useState } from "react"


import ProductCart from "../../components/ProductCart/ProductCart"
import React from 'react'

const MensClothing = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setError()
      })
      .catch(err => setError(err))
  }, [])
  return (
    <div className="container mt-3">
      {error && <h2 className="mt-3"> No Products To Show</h2>}
      <div className="row">
        {products?.map((product, index) => {
          return (<div className='col-md-3' key={index}><ProductCart items={product} /></div>)
        })}

      
        
      </div>
    </div>
  )
}

export default MensClothing
