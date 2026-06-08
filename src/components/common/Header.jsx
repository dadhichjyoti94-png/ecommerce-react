import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify/unstyled'

export default function Header() {
  const [category,setcategory]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
   .then((result)=>{
     setcategory(result.data)

   })
   .catch(()=>{
    toast.error('somthing went wrong')
   })

  },[])
  // axios.get('https://dummyjson.com/products/categories')
  // .then((result)=>{
  //   setcategory(result.data)

  // })
  // .catch(()=>{
  //   toast.error('somthing went wrong')
  // })

  return (
    <>
      <div class="container bg-white">
        <nav class="navbar navbar-expand-md navbar-light bg-white">
          <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
            <div class="collapse navbar-collapse" id="myNav">
              <div class="navbar-nav ms-auto"> <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              {
              category.map((v,i)=>{
                return(
                (i<4)
                ?
                <Link class="nav-link" to={`/products/${v.slug}`}>{v.name}</Link>
                :
                ''
                )

              })
              }
            
               {/* <a class="nav-link" href="#">Women's</a> <a class="nav-link" href="#">Men's</a> <a class="nav-link" href="#">Kid's</a> <a class="nav-link" href="#">Accessories</a> <a class="nav-link" href="#">Cosmetics</a> */}
              <Link class="nav-link" to="/about-us">about us</Link>
              <Link class="nav-link" to="/contact-us">contact us</Link>
              <Link className='nav-link'to="/products"> all product</Link>
              
              
              
              
               </div>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
