import React from 'react'
import { Link } from 'react-router'

export default function Productcard({ product }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link
                to={`/product-details/${product.id}`}
                className="text-decoration-none text-dark"
            >
                <div className="d-flex flex-column align-items-center justify-content-center product-item my-3">
                    <div className="product w-100 text-center">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="img-fluid"
                        />

                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons mt-2">
                            <li className="icon">
                                <span className="fas fa-expand-arrows-alt"></span>
                            </li>
                            <li className="icon mx-3">
                                <span className="far fa-heart"></span>
                            </li>
                            <li className="icon">
                                <span className="fas fa-shopping-bag"></span>
                            </li>
                        </ul>
                    </div>

                    <div className="tag bg-red mt-2 px-2 py-1 text-white text-capitalize">
                        {product.category}
                    </div>

                    <div className="title pt-3 pb-1 text-center fw-bold">
                        {product.title}
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                    </div>

                    <div className="price mt-2 fw-semibold">
                        ₹ {product.price}
                    </div>
                </div>
            </Link>
        </div>
    )
}