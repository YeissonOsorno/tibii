import React, { Fragment, useState } from 'react';

// Importacion de estilos //
import './sigin.css'

// Importacion de componentes //
import NavBar from '../../../components/Navbar/index';
import Form from '../../../components/FormSigin/index';


export default function Sigin() {

    const [data, setData] = useState();

    const onSubmit = (dataForm) => {
        setData(dataForm);
    }

    return (
        <Fragment>
            <NavBar config={{ optionsNavBar: false }} />
            <main id="cliente-login">
                <div className="row">
                    <div className="col s12 m5 l5 xl5">
                        <h3>Bienvenido</h3>
                        <h5>tibii es el lugar perfecto para tu negocio.</h5>
                        <ul className="mt30 left-align">
                            <li><span className="material-icons left">supervisor_account</span>Lleva un control de tus clientes.</li>
                            <li><span className="material-icons left">store</span>Controla el flujo de personas en tu tienda.</li>
                            <li><span className="material-icons left">local_mall</span>Gestiona productos y encargos.</li>
                            <li><span className="material-icons left">thumb_up</span>Fideliza a tus usuarios.</li>
                        </ul>
                    </div>
                    <div className="col s12 m7 l7 xl7">
                        <h3>Crea tu cuenta</h3>
                        <Form onSubmit={onSubmit} />
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

