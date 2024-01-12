import React, { createContext, useState ,useEffect} from "react";
import axios from "axios";

const CartContext = createContext();


const ContextProvider = (props) => {
    const userEmail = localStorage.getItem('email')
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [user, setUser] = useState(null);
    const [totalCartPrice, setTotalCartPrice] = useState(0);

  //  get // 

  useEffect(() => {
  const getCartItems = async () => {
    try {
      if (!userEmail) {
        console.error("User not logged in. Unable to retrieve cart items.");
        return;
      }

      const response = await axios.get(
        `https://crudcrud.com/api/c60812f81ba841249c838f2f241cca5c/carts`
      );

      const retrievedCartItems = response.data
      setCartItems(retrievedCartItems);
      setCartItemCount(retrievedCartItems.length);
    } catch (error) {
      // Handle error
      console.log("Error retrieving cart items:", error);
    }
  };

    getCartItems();
  }, []);


  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity || 0),
      0
    );
  };

  useEffect(() => {
    setTotalCartPrice(calculateTotalPrice());
  }, [cartItems]);
 
  const addItemToCart = async (item) => {
    try {
      const existingItem = cartItems.find((cartItem) => cartItem.title === item.title);

      if (existingItem) {
        // If the item already exists, update the quantity
        const newQuantity = (existingItem.quantity || 0) + 1;
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.title === item.title ? { ...cartItem, quantity: newQuantity, totalPrice: cartItem.price * newQuantity } : cartItem
        );
        // increaseQuantity()

        setCartItems(updatedCartItems);
        await axios.put(
          `https://crudcrud.com/api/c60812f81ba841249c838f2f241cca5c/carts/${existingItem._id}`,
           { id: existingItem.id,
            title: existingItem.title,
            price: existingItem.price,
            imageUrl: existingItem.imageUrl,
            quantity: newQuantity,
            userEmail: existingItem.userEmail });
      } else {

        const newItem = { ...item, quantity: 1,totalPrice: item.price * item.quantity };
        console.log(newItem);
        setCartItems((prevItems) => [...prevItems, newItem]);
        const productWithUser = {
          ...item,
          quantity:1,
          userEmail: userEmail.replace(/[@.]/g, ""),
        };
    
        await axios.post(
          `https://crudcrud.com/api/c60812f81ba841249c838f2f241cca5c/carts`,
          productWithUser
        );
     
        // Item doesn't exist, add to cart
    }
  
      setCartItemCount((prevCount) => prevCount + 1);
  
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  
 

   
  const removeItemFromCart = async (_id) => {
    const itemToRemove = cartItems.find((item) => item._id === _id);
    

    if (!itemToRemove) {
      console.error("Item to remove is undefined.");
      return;
    }

    // Update local state
     setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));

  setCartItemCount((prevCount) => prevCount - 1);//  console.log(itemToRemove.id);
    try {
  
      await axios.delete(
        `https://crudcrud.com/api/c60812f81ba841249c838f2f241cca5c/carts/${_id}`
      );
      
      // await getCartItems();
      console.log("Item removed from cart on the server.");
    } catch (error) {
      // Handle error
      console.error("Error removing item from cart:", error);
    }
  };

  
  // console.log(cartItems);

    const clearCart = () => {
        setCartItems([]);
        setCartItemCount(0);
    };

    const loginUser = (userData) => {
        setUser(userData);
        console.log(userData);
      };

      const logoutUser = () => {
        setUser(null);
      };
    
      const increaseQuantity = (_id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item._id === _id ? { ...item, quantity: (item.quantity || 0 )+ 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (_id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item._id === _id ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) } : item
          )
        );
      };

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            clearCart,
            cartItemCount,
            user,
            loginUser,
            logoutUser,
            increaseQuantity,
            decreaseQuantity,
            totalCartPrice,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
export {ContextProvider, CartContext};