import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

// import {
//   GoogleMap,
//   withScripts,
//   withGoogleMap,
//   withScriptjs
// } from 'react-google-maps';
//import ReactPlayer from 'react-player'


class ActividadView extends Component {
  render() {
    return (
      <div className="css-actividad">
        <Link to="/capacitacion">
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<HomeIcon />}
          >
            Regresar
          </Button>
        </Link>

        <font size="6" face="Gabriola" color="black">Un indicador es un dato o información que sirve para conocer o valorar la efectividad de una acción realizada previamente y  para determinar su evolución futura. Un indicador me permite saber si algo está bien o va por mal camino, a partir de esta información debo tomar los correctivos necesarios para encaminar esta situación hacia mis objetivos propuestos. 


El primer indicador en es conocer cómo va mi producción en un periodo de tiempo determinado. En aguacate se pueden dar 1, 2 o varias cosechas en el año, de acuerdo a las condiciones climáticas de mi cultivo, por eso yo debo tener claro cuántas toneladas de aguacate debo producir en 1 año (enero a diciembre). Debo conocer en tiempo real cuánta producción llevamos en el año y cuánto nos falta para cumplir nuestro objetivo propuesto. Debemos registrar fecha y cantidad de fruta vendida, cada mes sumamos las ventas y anotamos lo que llevamos en el año, solamente implementando esta recomendación empiezo a conocer y entender dónde estoy y para donde voy.  En el tercer indicador hay un ejemplo guía de producción por variedad para ajustar según la densidad.
Segundo indicador busca  conocer cuántos kilos debe producir 1 árbol en el año, para calcularlo divido el rendimiento sobre el número de árboles establecidos por Ha, para obtener Kg/Árbol. El éxito es lograr que todos los arboles tengan producciones similares.
Tercer indicador número de frutos/árbol, no debo esperar a la cosecha para saber cómo me fue, conociendo el peso promedio del fruto, puedo calcular cuántos aguacates necesito para los Kg estimados por árbol. Luego de 2 meses de floración puedo realizar un conteo de frutos por árbol y así realizo una proyección de producción y tomo acciones de ser necesario. Ejemplo en el papel deseo 90kg/árbol, con un peso promedio de 500gr, necesitaría 180 frutos y en aguacate Hass 80 kg/Árbol, con un peso promedio de 250 gr (calibre 18) necesitaría 320 frutos. En aguacates oscuros con 160kg/Ha y un peso promedio de 700 gr, estamos hablando de 228 frutos.
Cuarto indicador es el número de frutos/Inflorescencia. Busca conocer el proceso de floración y cuajado de fruto.  Luego de 10 días de apertura de la flor puedo diagnosticar cómo estuvo el “cuajado” del fruto; para esto selecciono unos árboles en el lote y cuento el número frutos cuajados  por inflorescencia; en cada árbol evalúo 20 inflorescencias y saco el promedio por árbol. Si obtengo por inflorescencia más de 5 frutos (voy muy bien) y es muy probable que supere la producción deseada; si tengo entre 1 a 3 frutos (voy bien) es probable es que obtenga la producción estimada; pero si obtengo 0 frutos por inflorescencia (voy mal) debe ser una alarma, no alcanzare la producción objetivo.</font> 

        {/* <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:34.397, lng:158.644}}
        /> */}

        </div>


    );
  }
   }



export default  ActividadView;

