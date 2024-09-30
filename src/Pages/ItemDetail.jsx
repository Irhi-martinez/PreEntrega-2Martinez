import React from 'react'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { useItemsById } from '../hooks';
import { useParams } from 'react-router-dom';

export const ItemDetail = () => {
const {id} = useParams();

  const {product,loading} = useItemsById ();

  return loading ? <loader /> : < ItemDetailContainer item={product}/>;
  
}
