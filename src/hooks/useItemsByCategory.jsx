import React, { useState, useEffect } from 'react';

export const useItemsByCategory = (categoryId) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsByCategory(categoryId);
        setProductsData(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); 
  }, [categoryId]);

  return { productsData, loading };
};


