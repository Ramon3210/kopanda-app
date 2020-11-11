import React from 'react'
import Header from './Header';
import CapacitacionView from '../view/CapacitacionView';
import Footer from './Footer';

class Capacitacion extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="CAPACITACIÓN" />
                <CapacitacionView />
                <Footer />
            </div>
         );
    }
}
 
export default Capacitacion;