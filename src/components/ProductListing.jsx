import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import Productcard from './common/Productcard'
import { useParams } from 'react-router'

export default function ProductListing() {
    const [products, setProducts] = useState([])
    const [url,seturl] = useState('https://dummyjson.com/products');
    const param = useParams();
    useEffect(()=>{
        console.log('hello')
        if(param.slug==undefined){
        seturl('https://dummyjson.com/products')
    }else{
        seturl('https://dummyjson.com/products/category/'+param.slug)
    }
    console.log('param')

    },[param]);

    useEffect(() => {
        axios.get(url)
            .then((result) => {
                setProducts(result.data.products)
            })
            .catch(() => {
                toast.error('Something went wrong')
            })
    }, [url]);

    return (
        <>
            <Header />

            <div className="container bg-white">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand text-uppercase fw-800" href="#">
                            <span className="border-red pe-2"></span>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#myNav"
                            aria-controls="myNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fas fa-bars"></span>
                        </button>

                        {/* <div className="collapse navbar-collapse" id="myNav">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link active" aria-current="page" href="#">All product</a>
                                <a className="nav-link" href="#">Women's</a>
                                <a className="nav-link" href="#">Men's</a>
                                <a className="nav-link" href="#">Kid's</a>
                                <a className="nav-link" href="#">Accessories</a>
                                <a className="nav-link" href="#">Cosmetics</a>
                            </div>
                        </div> */
                        }
                    </div>
                </nav>

                <h2 className="section-title w-100 text-center"><span>PRODUCT LISTING</span></h2>

                <div className="row">
                    {
                        products.map((value, index) => {
                            return <Productcard key={index} product={value} />
                        })
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}





























// import React, { useEffect, useState } from 'react'

// import Header from './common/Header'
// import Footer from './common/Footer'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import Productcard from './common/Productcard'

// export default function Productlisting() {
//     const [products, setProducts] = useState([])
//     console.log(products)
//     useEffect(() => {
//         axios.get('https://dummyjson.com/products')
//             .then((result) => {
//                 setProducts(result.data.products)
//             })
//             .catch(() => {
//                 toast.error('somthing went wrong')

//             })

//     }, [])
//     return (
//         <>
//             <Header />
//             <div class="container bg-white">
//                 <nav class="navbar navbar-expand-md navbar-light bg-white">
//                     <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
//                         <div class="collapse navbar-collapse" id="myNav">
//                             <div class="navbar-nav ms-auto"> <a class="nav-link active" aria-current="page" href="#">All product</a> <a class="nav-link" href="#">Women's</a> <a class="nav-link" href="#">Men's</a> <a class="nav-link" href="#">Kid's</a> <a class="nav-link" href="#">Accessories</a> <a class="nav-link" href="#">Cosmetics</a> </div>
//                         </div>
//                     </div>
//                 </nav>
//                 <h2 className='section-title w-100 text-center'>PRODUCT LISTING</h2>
//             </div>   <div class="row">



//                 {
//                     products.map((value, index) => {
//                         return (
//                             <Productcard key={index} product={value} />

//                         )

//                     })
//                 }
//             </div>



//             <Footer />





//         </>
//     )
// }
