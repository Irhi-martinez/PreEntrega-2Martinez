import React, { useEffect, useState} from "react";
import { useItems } from "../hooks/useItems";
import { ItemListContainer, Loader } from "../components";
import { PropTypesClass } from "../components/PropTypesClass/PropTypesClass";
import { getAllProducts } from "../Services/products.service"; // Asegúrate de que esta ruta sea correcta

export const Home = () => {
    const { productsData, loading,setProductsData } = useItems();
    
    useEffect(() => {
        getAllProducts()
            .then((res) => {
                console.log(res.data.products);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};
