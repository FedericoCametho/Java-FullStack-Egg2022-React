import React, { useEffect, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {


  const { id } = useParams();

  // const { pathname } = useLocation();

  // el buscar por unico id me estaba trayendo un html y no el dato que queria asique utilice la busqueda de todos los caracteres y traerme el del id -1 paara la posicon
  // con el metodo de traer todas las mascotas, funciono un par de veces y luego fallo, puede que la api este media cagada o algo este paando que no se .

  const [mascota, setMascota] = useState({});


/* DADO QUE EL ID UNA VEZ QUE VIENE DE LA URL NO VA  A CAMBIAR, NO ES NECESARIO EL UseEffect PORQUE NO ES NECESARIO QEU ESTE PENDIENTE
DE ESTA VARIABLE PARA PODER ACTUALIZAR ALGUN*/

 // RickAndMortyService.getCharacterById(id).then(data => setMascota(data));   ESTO PODRIA SER UNA SOLUCION PERO SE HACEN CONSTANTES PETICIONES

 // ENTONCES MEJOR METER EN EL USE EFFECT EL ARRAY VACIO PARA QUE NO ESTE ATENTO A LA ESCUCHA DEL CAMBIO EN LA VARIABLE ID

  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
      .then((data) => setMascota(data))
      .catch((error) => { console.log(error) });
      console.log(mascota);
  }, [])


 


  // Estilos para pasarle a como se va a mostrar la ifnormacion luego como atributo de una etiqueta html
  const detailCard = {
    width: '80%',
    margin: 'auto',
    background: 'white'
  }

  return (
    <div className="card mb-3" style={{ 'background': 'gainsboro' }}>
      <div className="row g-0 mt-4 mb-4" style={detailCard}>
        <div className="col-md-3">
          <img src={mascota.image} className="img-fluid rounded-start imgDetalle" alt="img del personaje" />
        </div>
        <div className="col-md-8 detallePersonaje">
          <div className="card-body">
            <h5 className="card-title">{mascota.name}</h5>
            <p className="card-text"><small className=""> Specie: {mascota.species}</small></p>
            <p className="card-text"><small className=""> Status: {mascota.status}</small></p>
            <p className="card-text"><small className=""> Gender: {mascota.gender}</small></p>
            <p className="card-text"><small className=""> Created: {mascota.created}</small></p>
          </div>
          <div className="btn-group" style={{ 'marginLeft': '15px' }}>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              <Link to={'/'} className="nav-link px-2 text-success">Volver</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
