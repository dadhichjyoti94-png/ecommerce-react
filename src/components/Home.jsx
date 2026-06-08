import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Productcard from './common/Productcard'
import Footer from './common/Footer'

export default function Home() {
    const [products, setproducts] = useState([])

    const [womenproducts, setwomenProducts] = useState([])

    
    console.log(products)
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/mens-shirts?limit=4')
            .then((result) => {
                setproducts(result.data.products)
            })
            .catch(() => {
                toast.error('somthing went wrong')

            })

    }, [])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/womens-bags?limit=4')
            .then((result) => {
                setwomenProducts(result.data.products)
            })
            .catch(() => {
                toast.error('somthing went wrong')

            })

    }, [])
    // axios.get('https://dummyjson.com/products')
    // .then((result) =>{
    //     setProducts(result.data.products)

    // })
    // .catch(() =>{
    //     toast.error('somthing went wrong')

    // })
    return (

        <>
        

            <Header />
            
            
            












            {/* <div class="container bg-white">
                <nav class="navbar navbar-expand-md navbar-light bg-white">
                    <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
                        <div class="collapse navbar-collapse" id="myNav">
                            <div class="navbar-nav ms-auto"> <a class="nav-link active" aria-current="page" href="#">All</a> <a class="nav-link" href="#">Women's</a> <a class="nav-link" href="#">Men's</a> <a class="nav-link" href="#">Kid's</a> <a class="nav-link" href="#">Accessories</a> <a class="nav-link" href="#">Cosmetics</a> </div>
                        </div>
                    </div>
                </nav> */}
                <div class="row">

                    {
                        products.map((value, index) => {
                            return (
                                <Productcard key={index} product={value} />

                            )

                        })
                    }
                </div>
                <div class="row">

                    {
                        womenproducts.map((value, index) => {
                            return (
                                <Productcard key={index} product={value} />

                            )

                        })
                    }
                </div>
                <Footer/>
        
            {/* //         < div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3" >
            //     <div class="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //         <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //             <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //             <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //             <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //         </ul>
            //     </div>
            //     <div class="tag bg-black">out of stock</div>
            //     <div class="title pt-4 pb-1">Denim Dresses</div>
            //     <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //     <div class="price">$ 55.0</div>
            // </div >
            // <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //     <div class="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //         <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //             <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //             <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //             <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //         </ul>
            //     </div>
            //     <div class="tag bg-green">new</div>
            //     <div class="title pt-4 pb-1"> Empire Waist Dresses</div>
            //     <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //     <div class="price">$ 70.0</div>
            // </div>
            // <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //     <div class="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //         <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //             <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //             <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //             <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //         </ul>
            //     </div>
            //     <div class="title pt-4 pb-1">Pinafore Dresses</div>
            //     <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //     <div class="price">$ 60.0</div>
            // </div>
            // </div >
            //         <div class="row">
            //             <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //                 <div class="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //                     <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //                         <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //                         <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //                         <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //                     </ul>
            //                 </div>
            //                 <div class="tag bg-red">sale</div>
            //                 <div class="title pt-4 pb-1">Winter Sweater</div>
            //                 <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //                 <div class="price">$ 60.0</div>
            //             </div>
            //             <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //                 <div class="product"> <img src="https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //                     <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //                         <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //                         <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //                         <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //                     </ul>
            //                 </div>
            //                 <div class="tag bg-black">out of stock</div>
            //                 <div class="title pt-4 pb-1">Denim Dresses</div>
            //                 <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //                 <div class="price">$ 55.0</div>
            //             </div>
            //             <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //                 <div class="product"> <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //                     <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //                         <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //                         <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //                         <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //                     </ul>
            //                 </div>
            //                 <div class="title pt-4 pb-1"> Empire Waist Dresses</div>
            //                 <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //                 <div class="price">$ 70.0</div>
            //             </div>
            //             <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            //                 <div class="product"> <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            //                     <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            //                         <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
            //                         <li class="icon mx-3"><span class="far fa-heart"></span></li>
            //                         <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            //                     </ul>
            //                 </div>
            //                 <div class="tag bg-green">new</div>
            //                 <div class="title pt-4 pb-1">Pinafore Dresses</div>
            //                 <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
            //                 <div class="price">$ 60.0</div>
            //             </div>
            //         </div>
            // </div > */}
        </>
    )

}
