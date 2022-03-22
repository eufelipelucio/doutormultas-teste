import React from 'react'
import { useState, useEffect } from 'react';
import carApi from '../api/apiCarros'

export default function Carros(){

  const {carros} = carApi();
  
  const useModelApi = () => {
    const [modelos, setModelos] = useState([]);  
    const [name,setName] = useState();
    
  useEffect( () => {
    async function fetchApi(){
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${name}/modelos`);
    const data = await response.json();
  
    setModelos(data.modelos);
  }
  fetchApi();
  },[name]);  
   
  return{
    modelos
  };
  
  };
  const { modelos } = useModelApi();

  return(
    <>  
      <div className='card-items'>
        <div className='list-items'>
          {carros.map(index => (
              <p key={index.codigo}>
                <button name={index.codigo} onClick={(e) =>{
                  const valor = e.target.name;
                  setName(valor)
                }} key={index.codigo}>
                {index.nome}
              </button> 
              </p>               
          ))}
        </div>
        <div className='list-items-modelos'>       
          {modelos?.map(index => (
            <p key={index.codigo}>{index.nome}</p>
          ))}
        </div> 
      </div>
    </>
  )
}