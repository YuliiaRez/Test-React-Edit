import React, { Component } from "react";
// import { gql } from "@apollo/client";
// import { client } from "../client";
// import { Routes, Route } from "react-router-dom";
// 
// import { GET_ALL_PRODUCTS, GET_ALL_CURRENCIES } from "../query";
// import { Container } from "./HomePageStyled";
// 
// import Navbar from "../components/Navbar/Navbar";
// import CategoryPage from "../components/ProductsList/CategoryPage";
// import CartPage from "../components/Cart/CartPage";
// import CartMini from "../components/Cart/CartMini";
import React, { Component } from 'react'
import Navbar from "../Navbar/Navbar";

export class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            currentCategoryName: "ALL",
        }
    }

  render() {
    return (
      <div>
      <Navbar/>
      </div>
    )
  }
}

export default Homepage