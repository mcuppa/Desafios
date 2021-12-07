import React from 'react'

const Footer = () => {
    return (
        <div className="row">
    <div className="col-md-12 well">
      <footer className="text-light piePagina">
        <div className="container">
          <div className="row">


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h3>¿Donde nos encontramos?</h3>
              <ul className="list-unstyled">
                <li>Dirección:</li>
                <li>Arenales 1190</li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h3>Redes</h3>
              <ul className="list-unstyled">
                <li><a href="http://www.instagram.com">
                    <i className="fa fa-instagram" aria-hidden="true">Instagram</i>
                  </a></li>
                <li><a href="http://www.twitter.com">
                    <i className="fa fa-twitter" aria-hidden="true">Twitter</i>
                  </a></li>
                <li><a href="http://www.facebook.com">
                    <i className="fa fa-facebook" aria-hidden="true">Facebook</i>
                  </a></li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3">
              <h3>Contacto</h3>
              <ul className="list-unstyled">
                <li><i className="fa fa-home mr-2"></i>Mezato</li>
                <li><i className="fa fa-envelope mr-2"></i> insumos@mezato.com.ar</li>
                <li><i className="fa fa-phone mr-2"></i> 011 4756 9902</li>
                <li><i className="fa fa-print mr-2"></i> 011 4865 3325</li>
              </ul>
            </div>
            <div className="col-12 text-center copyright mt-3">
              <p>© 2021 Copyright Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
    )
}

export default Footer
