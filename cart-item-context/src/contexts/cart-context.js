import { useState } from "react";
import { createContext, useContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";
const virtualApi = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1651786573231-f0e683d9f350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1651828786618-afc219ab6e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    isLike: false,
  },
];

const cartContext = createContext();
function CartProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", virtualApi);
  const { storedValue: cartStored, setValue: setCartValue } = useLocalStorage(
    "cart",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(cartStored);
  const [likeList, setLikeList] = useState([]);
  function toggleLike(photoId) {
    const updatedValue = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updatedValue);
    setValue(updatedValue);
  }
  //Function addToCart
  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        setCartValue([...prevItems]);
        return [...prevItems];
      }
      setCartValue([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }
  function removeCart(itemId) {
    console.log("work");
    cartItems.map((item, index) => {
      if (item.id === itemId) {
        cartItems.splice(index, 1);
      }
    });
    setCartItems((prevItems) => [...prevItems]);
    setCartValue((prevItems) => [...prevItems]);
  }
  // Create value for Provider
  const value = {
    photos,
    cartItems,
    likeList,
    setPhotos,
    setCartItems,
    setLikeList,
    toggleLike,
    addToCart,
    removeCart,
  };
  return <cartContext.Provider value={value} {...props}></cartContext.Provider>;
}

function useCart() {
  const context = useContext(cartContext);
  if (typeof context === "undefined") {
    throw new Error("useContext must be used inside the CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
