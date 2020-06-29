import React, { Fragment, useState } from 'react';

// Importacion de estilos //
//import './orders.css'

// Importacion de componentes //
import NavBar from '../../../components/Navbar/index';
//import Form from '../../../components/FormSigin/index';
import MUIDataTable from "mui-datatables";

export default function Orders() {

    const [data, setData] = useState();

    const onSubmit = (dataForm) => {
        setData(dataForm);
    }
    const columns = ["Titulo", "Cliente", "Valor", "Fecha y hora"];

    const datas = [
        ["Corte de barba", "Jhon cina", "10.000", "2020-28-05-05-04-00"],
        ["Lavada de Carro", "Alpa chino", "15.120","2020-28-05-05-04-00"],
        ["Corte de barba", "Jhon cina", "10.000", "2020-28-05-05-04-00"],
        ["Lavada de Carro", "Alpa chino", "15.120","2020-28-05-05-04-00"],
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <Fragment>
            <NavBar config={{ optionsNavBar: false }} />
            <div className="container">
                <MUIDataTable
                    title={"Pedidos"}
                    data={datas}
                    columns={columns}
                    options={options}
                />
                </div>
        </Fragment>
    );
}

