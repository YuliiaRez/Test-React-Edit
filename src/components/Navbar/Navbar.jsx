import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import brandIcon from "../../images/BrandIcon.svg";
import { GET_ALL_CATEGORIES } from "../../queries";


import {
  NavbarDiv,
  Left,
  Center,
  Right,
  Category,
  Image,
  CartCounterAndImg,
  Counter,
} from "./NavbarStyle";

export class Navbar extends Component {
  render() {
    return <div>Navbar</div>;
  }
}

export default Navbar;

// import cart from "../../images/Cart.svg";

// import CurrenciesSelect from "../CurrenciesSelect/CurrenciesSelect";

export default class Navbar extends Component {
  constructor(props){
    super(props)
      this.state={
        categoriesNames:[],

    }
  }
  getAllCategories = () => {
    client
      .query({
        query: gql`
          ${GET_ALL_CATEGORIES}
        `,
      })
      .then(({ data: { categories } }) => {
        this.setState({categoriesNames:categories})
        console.log(categories);
        console.log('this.state.categoriesNames', this.state.categoriesNames)
      });
  };
componentDidMount(){
  getAllCategories(); 
}

  render() {
    // const {
    //   currenciesTypes,
    //   currentCurrensyType,
    //   setCurrentCurrencyType,
    //   currentCategoryName,
    //   setCategoryName,
    //   productsInCart,
    //   getIdClickedProductCard,
    //   setTotalPriceOfCart,
    // } = this.props;

    const {categoriesNames} = this.state;
    return (
      <>
        <NavbarDiv>
          <Left>

            {categoriesNames.map((item) => (
              <Link key={uuidv4()} to="/*">
                <Category
                  key={item}
                  // onClick={() => {
                  //   setCategoryName(item);
                  //   getIdClickedProductCard("");
                  // }}
                  // style={{
                  //   color: currentCategoryName === item ? "#53D97C" : "#333",
                  // }}
                >
                  {item}
                </Category>
              </Link>
            ))}
          </Left>
          <Center>
            <Image src={brandIcon} />
          </Center>
        </NavbarDiv>
      </>
    );
  }
}
