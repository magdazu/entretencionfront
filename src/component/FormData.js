import React, { useEffect, useState } from "react";

const contenidoInit = {
    contenido_id: 0,
    titulo: "",
    fecha_estreno: "",
    descripcion: "",
    categoria: "",
    genero: "",
};


const FormData = ({agregarDato, onSubmit, contenidoEditado, setContenidoEditado, editarContenido}) => {
    

    const [contenido, setContenido] = useState(contenidoInit);

    const{
        titulo,
        fecha_estreno,
        descripcion,
        categoria,
        genero,
    } = contenido;

    const handleInputChange =(e) => {
        const handleFromValue = {
            ...contenido,
            [e.target.titulo]: e.target.value,
        };
        setContenido(handleFromValue);
    }
    useEffect(()=> {
        if (contenidoEditado !== null){
            setContenido(contenidoEditado);
        }
        else{
            setContenido(
                {
                    "titulo": "",
                    "fecha_estreno":"",
                    "descripcion": "",
                    "categoria": "",
                    "genero": ""
                }
            )
        }
    },[contenidoEditado])

    return(
        <div class="formBody">
            {contenidoEditado !== null ?(<h1>Editar Contenido</h1>) : (<h1>Formulario</h1>)}
            <div className="formData">
                <h1>Ingreso de Datos</h1>
                <div class="titulo">
                    <label for="inputtitulo" class="formLabel"></label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Titulo"
                        id="titulo"
                        value={titulo}
                        onChange={handleInputChange} />
                </div>
                <div class="fecha_estreno">
                    <label for="inputFecha_estreno" class="formLabel"></label>
                    <input
                        type="date"
                        class="date form-control"
                        placeholder="Fecha estreno"
                        id="fecha"
                        name="fecha_estreno"
                        value={fecha_estreno}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="descripcion">
                    <label for="inputdescripcion" class="formLabel"></label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Descripcion"
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="categoria">
                    <label for="inputcategoria" class="formLabel"></label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Categoria"
                        id="categoria"
                        name="categoria"
                        value={categoria}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="genero">
                    <label for="inputgenero" class="formLabel"></label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Genero"
                        id="genero"
                        name="genero"
                        value={genero}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            
            
        </div>);
};

export default FormData;