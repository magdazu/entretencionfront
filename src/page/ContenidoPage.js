import React from "react";
import { useEffect, useState } from "react";
import TablaContenido from "../component/tablaContenido/TablaContenido";
import { getAll, contenidoAdd, contenidoEdit, contenidoDelete } from "../services/ContenidoService";



const ContenidoPage = () =>{
    const [contenido, setContenido]=useState([]);
    const [contenidoEditado, setContenidoEditado] = useState(null);
    
    const obtenerContenido=async()=>{
        setContenido(await getAll());
    }

    const agregarContenido = async(contenido) =>{
        await contenidoAdd(contenido);
        obtenerContenido();
    }

    const editarContenido = async ()=>{
        await contenidoEdit();
        obtenerContenido();
        setContenidoEditado();
    }

    const eliminarContenido = async()=>{
        await contenidoDelete();
        obtenerContenido();
    }
    useEffect(()=>{
        obtenerContenido();
    },[contenido])
    return (<div className="container mt-4">
                <div className="row">
                    <TablaContenido
                        contenido={contenido}
                        eliminarContenido={eliminarContenido}
                        setContenidoEditado={setContenidoEditado}/>
                </div>
            </div>);
};

export default ContenidoPage;