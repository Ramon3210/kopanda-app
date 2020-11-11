import React from 'react'
import Header from './Header';
import Mapa from '../view/Mapa';
import Footer from './Footer';
import credenciales from './Credenciales';

const mapURL = `https://maps.googleapis.com/maps/api/js?
v=3.exp&key=${credenciales.mapsKey}`;

class Map extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="MAPA" />
                <Mapa 
                    googleMapURL={mapURL}
                    containerElement={<div style={{height:'400px'}}/>}
                    mapElement={<div style={{height:'100%'}}/>}
                    loadingElement={<p>Cargando...</p>}

                  />  

                
                <Footer />
            </div>
         );
    }
}
 
export default Map;