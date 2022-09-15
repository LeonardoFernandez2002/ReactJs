import './style.css'
import { arregloProductos } from '../baseDatos/baseDatos';
import data from './mock-data';
import ItemList from '../Products/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => { 

  const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    console.log('categoryId', categoryId)

    const [productos, setProductos] = useState([])

  const getData = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve(data)
    }, 2000);

  })

    useEffect(() => {
      getData.then((result) => {
        if(categoryId) {
          const newProducts = result.filter(item=>item.categoria === categoryId);
        setProductos(newProducts);
        } else {
          setProductos(result)
        }
         
      })
    }, [categoryId])

  return (<>
    <ItemList itemList={items} />
  </>)
};

export default ItemListContainer;