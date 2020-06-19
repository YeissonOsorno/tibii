import React from 'react';

import './index.css';


export default function Navbar(props) {
    return (
        <header>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <a href="#!" className="brand-logo">tibii</a>
                        {props.config.optionsNavBar &&
                            <ul className="right hide-on-med-and-down">
                                <li className="mt10 mr20"><h6><b>Escoge que tiendas quieres ver</b></h6></li>
                                <li><a className="waves-effect waves-light" href="#!"><i className="material-icons left">pets</i>Mascotas</a></li>
                                <li><a className="waves-effect waves-light" href="#!"><i className="material-icons left">face</i>Peluqueria</a></li>
                                <li><button className="waves-effect waves-light btn-small ml10 mr30">Ingresar</button></li>
                            </ul>
                        }
                    </div>
                </nav>
            </div>

            <ul id="slide-out" className="sidenav">
                <li className="ml30"><h4>tibii</h4></li>
                <li><div className="divider"></div></li>

                <li><a className="waves-effect" href="#!"><i className="material-icons">add_business</i>Trabaja con nosotros</a></li>
                <li><a className="waves-effect waves-light btn-small">Ingresar</a></li>
                <li><div className="divider"></div></li>

                <li className="subheader"><a className="subheader">Acerca de nosotros</a></li>
                <li><a className="waves-effect" href="#!"><i className="material-icons">business</i> Quienes somos</a></li>
                <li><a className="waves-effect" href="#!"><i className="material-icons">contact_support</i>Soporte</a></li>
            </ul>
        </header>
    );
}
