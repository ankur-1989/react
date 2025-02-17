import React, { Component } from "react"
import { DataConsumer } from "../../store"
import { Link } from "react-router-dom"
import { ButtonContainer } from "../Button"

export default class ProductDetails extends Component {
  render() {
    return (
      <DataConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by :{" "}
                    <span-text-uppercase>{company}</span-text-uppercase>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>€</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    product info:
                  </p>
                  <p className="text-muted lead">{info}</p>

                  <div>
                    <Link to="/products">
                      <ButtonContainer back>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </DataConsumer>
    )
  }
}
