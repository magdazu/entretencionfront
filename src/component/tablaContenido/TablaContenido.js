import React from "react";
import "./tablaContenido.css"

const TablaContenido = ({contenido}) =>{
    return <section>
            <h1>Lista Contenido</h1>
            <table class= "tabla">
                
                <tbody>
                    {contenido.map(contenido =>(
                        <tr>
                            <th scope="row">{contenido.imagen}</th>
                            <td>{contenido.titulo}</td>
                            <td>{contenido.fecha}</td>
                            <td>{contenido.descripcion}</td>
                            <td>{contenido.categoria}</td>
                            <td>{contenido.genero}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
};

export default TablaContenido;
