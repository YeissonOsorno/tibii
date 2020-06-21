import React, { useState } from 'react';

// Importacion de hooks //
import { useForm } from "react-hook-form";


export default function Form({ onSubmitClient }) {

    const { register, handleSubmit, errors } = useForm();
    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    });

    return (
        <form onSubmit={
            handleSubmit(() => {
                onSubmitClient(data);
            })
        }
            id="form-client" className="container mt30">
            <div className="row">
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Nombre"
                        type="text" className="validate" name="name"
                        onChange={(event) => {
                            setData({
                                ...data,
                                name: event.target.value
                            })
                        }}
                        defaultValue={data.name}
                        ref={
                            register({
                                required: { value: true, message: "Nombre obligatorio" }
                            })
                        }
                    />
                    <label htmlFor="name">Nombre</label>
                    {errors.name &&
                        <span className="new badge orange" data-badge-caption={errors?.name?.message} />
                    }
                </div>
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Apellidos"
                        onChange={(event) => {
                            setData({
                                ...data,
                                lastname: event.target.value
                            })
                        }}
                        defaultValue={data.lastname}
                        ref={
                            register({
                                required: { value: true, message: "Apellido obligatorio" }
                            })
                        }
                        type="text" className="validate" name="lastname" />
                    <label htmlFor="lastname">Apellidos</label>
                    {errors.lastname &&
                        <span className="new badge orange" data-badge-caption={errors?.lastname?.message} />
                    }
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m12">
                    <input placeholder="ejemplo@email.com"
                        onChange={(event) => {
                            setData({
                                ...data,
                                email: event.target.value
                            })
                        }}
                        defaultValue={data.email}
                        ref={
                            register({
                                required: { value: true, message: "Email obligatorio" }
                            })
                        }
                        type="email" className="validate" name="email" />
                    <label htmlFor="email">Email</label>
                    {errors.email &&
                        <span className="new badge orange" data-badge-caption={errors?.email?.message} />
                    }
                </div>
            </div>
            <div className="row left-align">
                <div className="input-field col s12 m12">
                    <input placeholder="Contraseña"
                        onChange={(event) => {
                            setData({
                                ...data,
                                password: event.target.value
                            })
                        }}
                        defaultValue={data.password}
                        ref={
                            register({
                                required: { value: true, message: "Contraseña obligatoria" },
                                minLength: { value: 6, message: "Como minimo debe tener 6 caracteres" },
                                pattern: { value: /[0-9]/g, message: "La contraseña debe tener numeros" }
                            })
                        }
                        type="password" className="validate" name="password" />
                    <label htmlFor="password">Contraseña</label>
                    {errors.password &&
                        <span className="new badge orange" data-badge-caption={errors?.password?.message} />
                    }
                </div>
                <a href="!#"> <i className="material-icons left">navigate_before</i>Ya tengo una cuenta</a>
            </div>
            <div className="row">
                <div className="col s12 m12 right-align">
                    <button className="waves-effect waves-light btn"> <i className="material-icons right">navigate_next</i>Siguiente</button>
                </div>
            </div>
        </form >
    );
}

