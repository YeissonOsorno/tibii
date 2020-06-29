import React, { Fragment, useState, useEffect } from 'react';

// Importacion de estilos //
import './sigin.css'

// Importacion de imagenes //
import shop from '../../../assets/images/shop.svg';

// Importacion de componentes //
import NavBar from '../../../components/Navbar/index';
import FormClient from '../../../components/FormClient/index';
import FormCompany from '../../../components/FormCompany/index';



export default function Sigin() {

    const [dataCliente, setDataClient] = useState();
    const [dataCompany, setDataCompany] = useState();
    const [toggleForm, setToggleForm] = useState(false);

    useEffect(() => {
        if (dataCliente !== undefined) {
            setToggleForm(true);
        }
    }, [dataCliente])

    const onSubmitClient = (dataForm) => {
        setDataClient(dataForm);
    }

    const onSubmitCompany = (dataForm) => {
        setDataCompany(dataForm);
    }

    return (
        <Fragment>
            <NavBar config={{ optionsNavBar: false }} />
            <main id="cliente-login">
                <div className="row">
                    <div className="col s12 m5 l5 xl5">
                        <img className="responsive-img" src={shop} alt="shop" />
                        <h3>Bienvenido a tibii</h3>
                        <h5>Este es el lugar perfecto para tu negocio.</h5>
                        <ul className="mt10 left-align">
                            <li><span className="material-icons left">supervisor_account</span>Lleva un control de tus clientes.</li>
                            <li><span className="material-icons left">store</span>Controla el flujo de personas en tu tienda.</li>
                            <li><span className="material-icons left">local_mall</span>Gestiona productos y encargos.</li>
                            <li><span className="material-icons left">thumb_up</span>Fideliza a tus usuarios.</li>
                        </ul>
                    </div>
                    <div className="col s12 m7 l7 xl7">
                        {!toggleForm ?
                            <>
                                <h3>Crea tu cuenta</h3>
                                <p className="container grey-text text-darken-2 pt10">Registra tus datos como dueño del negocio, esta información sera de utilidad para accerder al panel de control.</p>
                                <FormClient onSubmitClient={onSubmitClient} />
                            </> :
                            <>
                                <h3>Datos del negocio</h3>
                                <p className="container grey-text text-darken-2 pt10">Registra los datos acerca de tu negocio, esta informacion sera vizta por las personas que deseen comprar tus productos.</p>
                                <FormCompany onSubmitCompany={onSubmitCompany} toggleForm={toggleForm} />
                            </>
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

