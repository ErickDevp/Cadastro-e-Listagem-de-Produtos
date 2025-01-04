import React from "react";
import "../css/products.css";
import { FaTrashCan } from 'react-icons/fa6';

export default function Products({nameProduct, price, available,index, deleteProduct}){
    return (
        <li className="products">
            <span className={`available ${available? "disponivel":"nao-disponivel" }`}></span>
            <div className="infos">
                <span>{nameProduct}</span>
                <span>R$ {price},00</span>
            </div>
            <button onClick={(e) => deleteProduct(index)}>
                <FaTrashCan/>
            </button>
        </li>
    )
}