import React, { useState, useEffect } from 'react';

// Importacion de materialize //
import M from 'materialize-css';

// Importacion de hooks //
import { useForm } from "react-hook-form";
import useApi from '../../hooks/useApi';



export default function Form({ onSubmitCompany, toggleForm }) {

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/tibii/image/upload';
    const CLOUDINARY_PRESET = 'clients_logo';
    const initialState = { company_name: "", company_address: "", company_category: "", company_logo: "https://image.flaticon.com/icons/svg/869/869636.svg" }

    const { register, handleSubmit, errors } = useForm();

    const [result, handleApi] = useApi('POST', CLOUDINARY_URL, { 'Content-Type': 'multipart/form-data' });

    const [data, setData] = useState(initialState);

    const onSubmitLogo = (event) => {
        const file = event.target.files[0];

        const dataImage = new FormData();
        dataImage.append('file', file);
        dataImage.append('upload_preset', CLOUDINARY_PRESET);

        handleApi(dataImage);
    }

    useEffect(() => {
        if (result.response) {
            setData({
                ...data,
                company_logo: result.response.url
            })
        }
    }, [result.response]);

    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.updateTextFields();
        M.FormSelect.init(elems, {});
    }, [toggleForm])

    return (
        <form onSubmit={
            handleSubmit(() => {
                onSubmitCompany(data);
            })
        }
            id="form-company" className="container mt30">
            <div className="row">
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Nombre del negocio"
                        type="text" className="validate" name="company_name"
                        onChange={(event) => {
                            setData({
                                ...data,
                                company_name: event.target.value
                            })
                        }}
                        defaultValue={data.company_name}
                        ref={
                            register({
                                required: { value: true, message: "Nombre del negocio obligatorio" }
                            })
                        }
                    />
                    <label htmlFor="name">Nombre del negocio</label>
                    {errors.company_name &&
                        <span className="new badge orange" data-badge-caption={errors?.company_name?.message} />
                    }
                </div>
                <div className="col s12 m6 l6 xl6 input-field">
                    <input placeholder="Direccion del negocio"
                        onChange={(event) => {
                            setData({
                                ...data,
                                company_address: event.target.value
                            })
                        }}
                        defaultValue={data.company_address}
                        ref={
                            register({
                                required: { value: true, message: "Direccion del negocio obligatoria" }
                            })
                        }
                        type="text" className="validate" name="company_address" />
                    <label htmlFor="lastname">Direccion del negocio</label>
                    {errors.company_address &&
                        <span className="new badge orange" data-badge-caption={errors?.company_address?.message} />
                    }
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m12">
                    <div className="input-field col s12 m12">
                        <select name="company_category"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    company_category: event.target.value
                                })
                            }}
                            defaultValue={data.company_category}
                            ref={
                                register({
                                    required: { value: true, message: "Debes escoger un sector" }
                                })
                            }
                        >
                            <option value="" disabled defaultValue>Escoge una opcion</option>
                            <option value="1">Mascotas</option>
                            <option value="2">Peluqueria</option>
                            <option value="3">Otro</option>
                        </select>
                        <label htmlFor="company_category" >Sector del negocio</label>
                    </div>

                    {errors.company_category &&
                        <span className="new badge orange" data-badge-caption={errors?.company_category?.message} />
                    }
                </div>
            </div>
            <div className="row left-align">
                <div className="col s12 m12 file-field input-field">
                    <div className="btn-small">
                        <span>Logotipo</span>
                        <input type="file" onChange={onSubmitLogo} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                {result.loading &&
                    <span className="new badge green" data-badge-caption={'Subiendo logo...'} />
                }
                {result.error !== null && !result.response &&
                    <span className="new badge red" data-badge-caption={'Hubo un error en subir el logo vuelve a intentarlo'} />
                }
                {result.response &&
                    <span className="new badge green" data-badge-caption={'Logo subido con exito!'} />
                }
                <a href="!#"> <i className="material-icons left">navigate_before</i>Ya tengo una cuenta</a>
            </div>
            <div className="row">
                <div className="col s12 m12 right-align">
                    <button className="waves-effect waves-light btn"> <i className="material-icons right">how_to_reg</i>Registrarme</button>
                </div>
            </div>
        </form >
    );
}

