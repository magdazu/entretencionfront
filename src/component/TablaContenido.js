import React from "react";

const TablaContenido = ({contenido}) =>{
    return <div>
            <h1>Lista Contenido</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Fecha Estreno</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {contenido.map(contenido =>(
                        <tr>
                        <th>
                            <td>{contenido.titulo}</td>
                            <td>{contenido.fecha}</td>
                            <td>{contenido.descripcion}</td>
                            <td>{contenido.categoria}</td>
                            <td>{contenido.genero}</td>
                        </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
};

export default TablaContenido;
