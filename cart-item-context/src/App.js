import { ThemeProvider } from "styled-components";
import CartList from "./components/cart/CartList";
import PhotoList from "./components/cart/PhotoList";
import Header from "./components/Header/Header";
import { CartProvider } from "./contexts/cart-context";
import { GlobalStyles } from "./styles/GlobalStyles";
const theme = {};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <CartProvider>
          <Header></Header>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
