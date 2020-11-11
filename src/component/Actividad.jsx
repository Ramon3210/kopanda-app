import React from 'react'
import Header from './Header';
import ActividadView from '../view/ActividadView';
import Footer from './Footer';
//import credentials from './credentials';

class Actividad extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="INDICADORES" />
                <ActividadView 
                // googleMapURL:`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`,
                 />
                <Footer />
            </div>
         );
    }
}
 
export default Actividad;