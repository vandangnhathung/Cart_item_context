import { createGlobalStyle, css } from "styled-components";
export const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap");
  body {
    font-family: "Poppins", sans-serif;
    height: 200vh;
  }
  //Header
  .header {
    width: 100%;
    height: 80px;
    box-shadow: 0 2px 10px 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_items-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .header_number {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .header_icon {
    position: relative;
  }
  .header_quantity {
    position: absolute;
    bottom: 50%;
    left: 70%;
    padding: 1px 8px;
    background-color: #fc2872;
    color: #fff;
    border-radius: 100%;
  }
  //PhotoList
  .wrapper {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 100px;
  }
  .cart_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  .cart_item {
    height: 400px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    &:hover .cart-button,
    &:hover .cart-like {
      visibility: visible;
      opacity: 1;
    }
  }

  .cart_item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cart-like {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s linear;
  }
  .cart-button {
    position: absolute;
    bottom: 10%;
    padding: 10px 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }
  //CartList.js Style
  .cart_items-wrapper {
    margin-top: 50px;
  }
  .cart_items {
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px;
  }
  .cart_items-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .cart_items-button {
    padding: 10px 30px;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
  }
`}
`;
