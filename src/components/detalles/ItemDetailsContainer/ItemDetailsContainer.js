import { useEffect, useState } from "react";
import Itemdetails from "../Itemdatails/Itemdetails"
import detalle from "./mock-data"
const ItemDetail = ({ ItemDetail }) => {

    return (
        <>
            {
             ItemDetail.map((detail) => {
                return (
                    <Itemdetails
                        key={detail.id}
                        price={detail.price}
                        description={detail.description}
                        image={detail.image} 
                        />
                );
            })
            }
        </>
    );
}

const ItemDetailsContainer = ({greeting}) => {
    const[item, setItem] = useState([]);

    const getDetalle = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detalle)
        }, 2000)
    })

    useEffect(() => {
        getDetalle.then((result) => {
            setItem(result);
            console.log(result)
        })
    }, [])
    return (<>
        <ItemDetail ItemDetail={Itemdetails} />
      </>)
}

export default ItemDetailsContainer;