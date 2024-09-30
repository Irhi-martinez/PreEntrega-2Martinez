import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayouts } from "./Layouts";
import {MainRouter} from "./router";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/";

const App = () => {

  const products = [
    { id: 1, name: "Nice Chair, pink", price: 57, originalPrice: 199, quantity: 2},
    { id: 2, name: "Nice Chair, blue", price: 67, originalPrice: 219, quantity: 3 },
    { id: 3, name: "Elegant Table", price: 150, originalPrice: 300, quantity: 1 },
    { id: 4, name: "Stylish Sofa", price: 500, originalPrice: 700, quantity: 1 },
    { id: 5, name: "Modern Lamp", price: 35, originalPrice: 50, quantity: 4 },
    { id: 6, name: "Wall Art", price: 75, originalPrice: 120, quantity: 2 },
  ];

  return <ChakraProvider>
    <NavBar/>
    <ItemListContainer products={products} />  </ChakraProvider>;

};


export default App;
