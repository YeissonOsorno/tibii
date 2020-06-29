import React from 'react'

export default function Form() {
    return (
        <form id="form-hook" className="container mt30">
            <div className="row">
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Nombre" type="text" className="validate" />
                    <label htmlFor="first_name">Nombre de la empresa</label>
                </div>
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Apellidos" type="text" className="validate" />
                    <label htmlFor="last_name">Direccion de la empresa</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m12">
                    <input placeholder="ejemplo@email.com" type="email" className="validate" />
                    <label htmlFor="last_name">Sector de la empresa</label>
                </div>
            </div>
            <div className="row left-align">
                <div className="input-field col s12 m12">
                    <input placeholder="Contraseña" type="password" className="validate" />
                    <label htmlFor="last_name">Logotipo de la empresa</label>
                </div>
                <a href="!#"> <i className="material-icons left">navigate_before</i>Ya tengo una cuenta</a>
            </div>
            <div className="row">
                <div className="col s12 m12 right-align">
                    <button className="waves-effect waves-light btn"> <i className="material-icons right">navigate_next</i>Registrarse</button>
                </div>
            </div>
        </form >
    );
}

