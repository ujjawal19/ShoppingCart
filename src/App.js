import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item =>{

    //how to check whther Item is there in cart or not
    const isAlreadyAdded = cartItem.findIndex((array =>{
      return array.id === item.id // whther the element which we try to add(array) is already present in cart or not(item)
    }))
    if(isAlreadyAdded !== -1){
      toast('already added in car',{
        type: 'error'
      })
    }
    setCartItem([...cartItem,item]);
  }

  // const buyNow 

  const buyNow = () =>{
    setCartItem([]);
    toast("Purchase Complete", {
      type: 'success'
    })
  }

  // Remove Item


  const removeItem = item =>{
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  }

  return (
    <div className="App">
      <BuyPage addInCart={{addInCart}}></BuyPage>
    </div>
  );
}

export default App;
