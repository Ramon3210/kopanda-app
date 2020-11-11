import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
//import ReactPlayer from 'react-player'

class PodaView extends Component {
  state = {};
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
        <font size="6" face="Gabriola" color="black">El tema de podas genera muchas inquietudes porque existen muchos tipos de podas, los nombres diferentes para cada una de ellas varían según la región donde se encuentre el productor, el tipo de asesor técnico y la variedad de aguacate; por eso este tema es tan complejo y en mi criterio uno de los más retadores y críticos para la producción.

La primera poda que debemos implementar en un huerto de aguacate es la poda de formación, cuyo objetivo principal es desarrollar y preparar el árbol para la producción de aguacate según la densidad de siembra implementada. Para densidades altas requiero podas de formación más frecuentes, esto significa entrar al lote más seguido. Con densidades bajas puede ser menor la frecuencia; en promedio recomiendo entrar al lote cada 60 días a efectuar esta labor.

Cuando el árbol alcanza una copa representativa, alrededor del 3 año aproximadamente, debo garantizar una adecuada aireación en las calles del cultivo. En el interior del árbol debo eliminar ramas secas, ramas y hojas con crecimiento hacia el interior del árbol, con presencia de enfermedad o que no tienen la luz adecuada. Recuerden siempre, los frutos de aguacate se producen en las ramas con yemas productivas de donde surge la inflorescencia, esto ocurre en las ramas externas y nunca en el interior del árbol, por esto no  debo realizar podas que tengan como objetivo eliminar grandes áreas de hojas en la parte alta del árbol bajo el criterio de que entre luz al interior del árbol, pues  puedo estar afectando hasta en 30% del área foliar y la capacidad de producción del árbol. Sí debemos garantizar pequeñas ventanas que permitan un flujo moderado del aire en el interior del árbol, y esto se  logra  podando ramas secas, las que presentan pocas yemas productivas y si es necesario eliminar algunas ramas con hojas para generar pequeñas ventanas en el árbol.</font>
      </div>
 
    );
  }
}

export default PodaView;
