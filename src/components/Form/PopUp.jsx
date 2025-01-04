import React from "react";
import '../Form/css/popUp.css';

export default function PopUp({openAndClosedPopUp, handleInputChange, product, addProduct, setProduct}) {
    const handleSubmit = (e) => {
        e.preventDefault();  
        addProduct();        
    };

    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <h1>Formulário</h1>
                <div>
                    <div className="inputs">
                        <input 
                            onChange={handleInputChange}
                            value={product.nome}
                            type="text" 
                            name="nome" 
                            id="nome" 
                            placeholder="Nome do produto" 
                            required 
                            />
                        <input 
                            onChange={handleInputChange}
                            value={product.valor}
                            type="number" 
                            name="valor" 
                            id="valor" 
                            placeholder="Valor" 
                            required 
                            />
                    </div>
                    <textarea 
                        onChange={handleInputChange} 
                        value={product.descricao}
                        name="descricao" 
                        id="descricao" 
                        placeholder="descrição" 
                        required 
                        ></textarea>
                </div>
                <div>
                    <h3>Disponível para venda</h3>
                    <div className="input-radio">
                        <div>
                            <input
                            onChange={() => setProduct({ ...product, disponivel: true })}
                            value={true} 
                            type="radio"
                            name="disponivel"
                            id="available-yes"
                            checked={product.disponivel === true}
                            />
                            <label htmlFor="available-yes">Sim</label>
                        </div>
                        <div>
                            <input
                            onChange={() => setProduct({ ...product, disponivel: false })}
                            value={false} 
                            type="radio"
                            name="disponivel"
                            id="available-no"
                            checked={product.disponivel === false}
                            />
                            <label htmlFor="available-no">Não</label>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn-cancelar" onClick={() => openAndClosedPopUp()}>
                        Cancelar
                    </button>
                    <button className="btn-salvar" type="submit">Adicionar
                    </button>
                </div>
            </form>
        </div>
    )
}