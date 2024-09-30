import React from 'react'
import { useItemsByCategory } from '../hooks'
import { ItemListContainer } from '../components'
import { useParams } from 'react-router-dom'

export const Category = () => {
    const {id} = useParams ();
  const [productsData,loading] = useItemsByCategory (id)

  return  loading ? <loader /> : <ItemListContainer products= {productsData}/>
  
}
