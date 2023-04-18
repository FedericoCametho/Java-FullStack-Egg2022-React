import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';

// export const Cards = ( {mascotas} ) => {    esta cabecera de la function component fue utilizada cuando se hacia el request a la api desde el main

export const Cards = () => {

    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {

        RickAndMortyService.getAllCharacters()
            .then((data) => { setMascotas(data.results) })
            .catch((error) => {console.log(error)});  
    }, [mascotas])

    const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} /> );

    return (
        <div className='container-cards'>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardList}
                    </div>
                </div>    
            </div>

        </div>
    )
}
