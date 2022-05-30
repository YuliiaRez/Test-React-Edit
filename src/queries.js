import { gql } from "@apollo/client";
export const GET_ALL_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
export const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;


export const GET_ALL_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        category
        name
        inStock
        gallery
        description
        brand
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
