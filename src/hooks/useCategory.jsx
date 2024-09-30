import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../Services/products.service';

export const useCategory = () => {
  const [categories, setCategories] = useState([]); 
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data); 
      })
      .catch((error) => {
        console.log(error);
        setError(error); // Manejo del error
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga
      });
  }, []);

  return { categories, loading, error }; // Retorna loading y error
};



