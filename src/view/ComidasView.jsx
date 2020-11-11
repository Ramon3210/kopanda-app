import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class ComidasView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="css-comidas">
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

                <font size="6" face="Gabriola" color="black">Todo programa de nutrición vegetal debe iniciar con un análisis de suelo para ser precisos en el diagnóstico y la recomendación; existen algunas generalidades para el manejo nutricional del cultivo de aguacate pero pueden variar en cada zona, por tal motivo recuerde siempre realizar un programa de fertilización acompañado de un Ingeniero Agrónomo. En un principio la fertilización en el cultivo de aguacate en Colombia se manejó similar a la empleada en el cultivo de café, pero con el paso del tiempo se ha ido especializando el cultivo de aguacate y las labores que allí se realizan.


El primer concepto es frecuencia de aplicación. La frecuencia de aplicación debe ser cada 30 a 45 días si las condiciones de humedad en el suelo así lo permiten.  Con una frecuencia mensual, garantizamos la disponibilidad de nutrientes adecuados para todas las etapas de desarrollo del cultivo, además nos permite tomar medidas correctivas y de rápida acción para garantizar un adecuado llenado de la fruta. Calcule en promedio unas 8 -9 aplicaciones año.
El segundo concepto es la cantidad de fertilizante que debemos aplicar por árbol, esto se define en función de la densidad de árboles establecida en el lote, para densidades medias (150 a 250 árboles/Ha) debemos aplicar en promedio 800gr/árbol en intervalos de mes a mes y medio, cerca de 1.200 a 1.800 kg de fertilizante compuesto por Ha/Año para garantizar óptimos rendimientos. La cantidad de fertilizante aplicar por árbol debe ir en función de la producción, a mayor producción por árbol mayor cantidad de fertilizante debería utilizar. A medida que la fruta va creciendo debo ir aumentando la cantidad de fertilizante gradualmente hasta llegar a un máximo de 2 kg por árbol. En aquellos momentos donde el árbol no tiene fruto y está bien de follaje no recomiendo realizar aplicación de fertilizantes. Recuerde siempre que es más fácil prevenir que curar, debemos conocer qué requiere el árbol en cada etapa, para aportar estos nutrientes ojalá 30 días antes de que el árbol los requiera, de esta manera garantizamos que van a estar disponibles dentro de la planta para completar sus procesos fisiológicos. 
Como protejo mi cultivo de aguacate: para realizar 8-9 aplicaciones de fertilizantes al año de manera exitosa, debo garantizar que el plato esté libre de arvenses todo el tiempo, debo conservar un mulch de hojas secas en plato y sobre este aplicar el fertilizante. Con FINALE®  logro controlar todas las malezas, conservando la materia seca en el lote: FINALE® Dosis 1,5 L/Ha Dosis por Bomba (20 Litros agua) 150 c.c/Bomba.

El control de Trips y Antracnosis  es fundamental en el cultivo de aguacate, especialmente en la etapa de formación del fruto, pues estos 2 problemas fitosanitarios afectan directamente la producción de aguacate. Para controlar recomendamos NATIVO® y PROTEUS® en aplicación foliar en presencia del problema fitosanitario: NATIVO® Dosis (0,6 L/Ha) y PROTEUS® Dosis (0,8 L/Ha).

Un problema fitosanitario que cada vez toma mayor importancia es la Arañita Roja (ácaro) por sus altas dinámicas poblaciones y lo complejo del monitoreo al inicio de las poblaciones. Con OBERON SPEED® logramos cortar el ciclo a la arañita roja, OBERON SPEED® a dosis (0,5 L/Ha) garantizando siempre volúmenes de agua de 300 a 500 L de agua /Ha.</font>   
                
            </div>
         );
    }
}
 
export default ComidasView;
