import React from "react";
import { useEffect, useState } from "react";
import {FormData} from "../component";
import { getAll, contenidoAdd, contenidoEdit, contenidoDelete } from "../services/ContenidoService";
import TablaContenido from "../component/TablaContenido";


const AdminPage = () =>{
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

    return(
        <div className="container mt-4">
            <div className="row">
                <TablaContenido
                    contenido={contenido}
                    eliminarContenido={eliminarContenido}
                    setContenidoEditado={setContenidoEditado}/>
                <FormData 
                    agregarContenido={agregarContenido}
                    contenidoEditado={contenidoEditado}
                    setContenidoEditado={setContenidoEditado}
                    editarContenido={editarContenido}
                />
            </div>
            
        </div>
    );

};

export default AdminPage;