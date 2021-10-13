import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "@material-ui/core";
import logoNUTRICION1 from "../aguacate.gif";
import logoNUTRICION from "../aguacuate2.gif";

import iconface from "../faceicon.png";

import React from "react";
import {Helmet} from "react-helmet";

//import ReactPlayer from 'react-player'

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="App-content">
        
            <Helmet>
                <script src="code.tidio.co/kwzqcn7i5i3zegf54pdewop87bzwcvhk.js""></script>
                <script>try{Typekit.load({ async: true });}catch(e){}</script>
            </Helmet>
      
        <Container maxWidth="sm">
          <Link to="/capacitacion">
            <Button variant="contained" color="default">
              Capacitación
            </Button>
          </Link>
          
          {/* &nbsp;&nbsp;
          <div>
          <Link to="/evaluacion">
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
              Prototipo
            </Button>
          </Link> */}
          
          &nbsp;&nbsp;
          <div>
          <Link to="/map">
            <Button variant="contained" color="default">
            {/* <button onClick={() => hashHistory.push(`https://www.google.com.mx/maps/search/huertas+de+aguacate/@19.0864891,-103.8412686,7z`)}></button>  */}
              Geolocalización
            </Button>
          </Link>
          </div>
          <div>
          <Link to="/videos">
            <Button variant="contained" color="default">
              Videos
            </Button>
          </Link>
          </div>
          <img src={logoNUTRICION1} className="App-logo" alt="aguacate" />
          <img src={logoNUTRICION} className="App-logo" alt="aguacate2" />
      
      //<script data-ad-client="ca-pub-8173422656251440" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<br></br>

<a title="Zapotlán Ecológico" href="https://www.facebook/ZapotlanEcologico/"><img src={iconface} alt="zapotlan" /></a>
<br></br>
<a href="http://zapotlanecologico.blogspot.com/">Interactúa con otros aguacateros</a> 
        </Container>
      </div>
    );
  }
}

export default Content;
