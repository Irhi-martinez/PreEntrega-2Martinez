import React, { useEffect, useState } from 'react';
import { getProductById } from '../Services/products.service';

export const useItemsById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false)); // Asegúrate de que esta línea esté correctamente escrita
    }, [id]);

    return { product, loading };
};
