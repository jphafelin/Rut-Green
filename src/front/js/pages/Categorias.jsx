import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Enrolled } from "./Enrolled.jsx"
import { useNavigate  } from "react-router-dom";

export const Categorias = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    function eventoSenderismo(e) {
        navigate( "/eventos-senderismo")
    }
    function eventoRunning(e) {
        navigate( "/eventos-running")
    }
    function eventoTriatlon(e) {
        navigate( "/eventos-triatlon")
    }
    function eventoCiclismo(e) {
        navigate( "/eventos-ciclismo")
    }
    if (store.isAdmin) {
        return (
            <Enrolled />
        )
    }
    else {
        return (
            <div className="container-fluid d-flex divEventos">
                <div className="row justify-content-evenly mx-md-4 mt-2 mb-2">
                    <div className="col"><button type="button" className="btn btn-rounded justify-content-right mx-md-2 mt-1 mb-1 btn-categoriasLf" onClick={eventoRunning} >RUNNING</button> </div>
                    <div className="col"><button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-categoriasRg" onClick={eventoSenderismo} >SENDERISMO</button> </div>
                    <div className="col"><button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-categoriasLf" onClick={eventoTriatlon} >TRIATLON</button> </div>
                    <div className="col"><button type="button" className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1 btn-categoriasRg" onClick={eventoCiclismo} >CICLISMO</button> </div>
                </div>
                <div className="container-fluid justify-content-evenly mx-md-4 mt-2 mb-2 divCategorias">CATEGORÍAS</div>
            </div>
        )
    }
}
