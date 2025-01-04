import React, { useState, useEffect } from "react";
import './App.css'
import Products from "./components/Products";
import { FaPlus } from 'react-icons/fa';
import PopUp from "./components/Form/PopUp";

export default function App() {
  const [isPopUp, setIsPopUp] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ nome: "", valor: "", descricao: "", disponivel: true});

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
      if (products.length > 0) {
          localStorage.setItem("products", JSON.stringify(products));
      }
  }, [products]);

  const deleteProduct = (indexToDelete) => {
    setProducts((prevProducts) => prevProducts.filter((_, index) => index !== indexToDelete));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const addProduct = (e) => {
    if (product.nome && product.valor && product.descricao) {
      setProducts((prev) => [...prev, product]);
      openAndClosedPopUp();
    }
  };

  // Tela de popUp abrir e fechar
  const openAndClosedPopUp = (e) => {
    setProduct({ nome: "", valor: "", descricao: "", disponivel: true}); 
    setIsPopUp((prevState) => !prevState);
  }

  return (
    <div className="app">
      {isPopUp ? <PopUp 
        handleInputChange={handleInputChange} 
        openAndClosedPopUp={openAndClosedPopUp}
        addProduct={addProduct}
        product={product}
        setProduct={setProduct}
        /> : ''}
      <h1 className="title-products">Produtos</h1>
      <main>
        <ul>
          {[...products]
              .sort((a, b) => a.valor - b.valor)
              .map((product, index) => (
                <Products 
                  key={index} 
                  nameProduct={product.nome} 
                  price={product.valor} 
                  available={product.disponivel}
                  index={index}
                  deleteProduct={deleteProduct}
                />
            ))}
        </ul>
      </main>
      <div className="btn-listagem" onClick={() => openAndClosedPopUp()}>
        <FaPlus/>
      </div>
    </div>
  )
}