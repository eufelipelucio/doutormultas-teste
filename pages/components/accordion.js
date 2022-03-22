import React from 'react';
import { Accordion } from 'react-bootstrap';
import Carros from './carros';
import Motos from './motos'
import Caminhoes from './caminhoes'

export default function Acordion() {
  return (
   <>
        <Accordion className='Card' >
            <Accordion.Item eventKey="0">
                <Accordion.Header >Carros</Accordion.Header>
                <Accordion.Body>
                <Carros />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Motos</Accordion.Header>
                <Accordion.Body>
                <Motos/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Caminhões</Accordion.Header>
                <Accordion.Body>
                <Caminhoes/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
