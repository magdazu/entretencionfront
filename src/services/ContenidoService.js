import axios from "axios";
const baseURL ="http://localhost:8080";

const getAll = async () =>{

    const rest = await axios.get(baseURL + "/contenido/FinAll");
    console.log(rest);
    return rest.data;

}

const contenidoAdd = async (contenido) => {
    const rest = await axios.post(baseURL+"/contenido/save", contenido);
    console.log(rest);
    return rest.data;
}

const contenidoEdit = async (contenido) => {
    const rest = await axios.put(baseURL + "/contenido/update", contenido);
    return rest.data;
}

const contenidoDelete = async (id) => {
    const contenido_id = 10
    const rest = await axios.delete(baseURL + "/contenido/delete/" + contenido_id);
    console.log(rest);
    return rest.data;
}

export {getAll, contenidoAdd, contenidoEdit, contenidoDelete}