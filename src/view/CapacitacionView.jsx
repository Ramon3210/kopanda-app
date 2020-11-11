import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
//import ReactPlayer from 'react-player'

class CapacitacionView extends Component {
  state = {};
  render() {
    return (
      <div className="css-actividad">
        <Link to="/">
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<HomeIcon />}
          >
            Regresar
          </Button>
        </Link>

        <Container maxWidth="sm">
          <Link to="/datos">
            <Button variant="contained" color="default">
              Planeación
            </Button>
          </Link>
          
          &nbsp;&nbsp;
          <div>
          <Link to="/poda">
            <Button variant="contained" color="default">
              Poda
            </Button>
          </Link>
          </div>
          
     
          <div>
          <Link to="/crecimiento">
            <Button variant="contained" color="default">
              Crecimiento
            </Button>
          </Link>
          </div>
          
         
          <Link to="/comidas">
            <Button variant="contained" color="default">
              Nutrición
            </Button>
          </Link>
          
          &nbsp;&nbsp;
          <div>
          <Link to="/actividad">
            <Button variant="contained" color="default">
              Indicadores
            </Button>
          </Link>
          </div>
        </Container>

      </div>
        


    );
  }
}

export default CapacitacionView;