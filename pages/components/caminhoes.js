import React from 'react'
import { useState, useEffect } from 'react';
import useCamiApi from '../api/apiCaminhoes'

export default function Caminhoes(){

  const {caminhoes} = useCamiApi([]);
  const [name,setName] = useState([]);        

  
  const useModelApi = () => {
    const [modelos, setModelos] = useState([]);  
    const value = name
    
  useEffect( () => {
    async function fetchApi(){
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${name}/modelos`);
    const data = await response.json();
  
    setModelos(data.modelos);
  }
  fetchApi();
  },[value]);  
   
  return{
    modelos
  };
  
  };
  const { modelos } = useModelApi();

  return(
    <>  
      <div className='card-items'>
        <div className='list-items'>
          {caminhoes?.map(index => (
            <p key={index.codigo}>
                <button name={index.codigo} 
                    onClick={(e) =>{
                        const valor = e.target.name;
                        setName(valor)
                }}  key={index.codigo}>
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