import axios from "axios";

import {
    GET_PROFESORES,
    GET_PROFESOR_ID,
    PUT_PROFESORES,
    POST_PROFESORES,
    DELETE_PROFESORES,
    FILTER_PRECIO,
    FILTER_PUNTUACION,
} from "../types/typesProfesor";

export function getProfesorById(id){
    return async function(dispatch){
        try {
            const prof = await axios.get(`http://localhost:3001/profesores/${id}`)
            return dispatch({
                type:GET_PROFESOR_ID,
                payload: prof.data
            })
        } catch (error) {
            return error.message
        }
    }
}

export function postProfesor(payload){
    return async function(dispatch){
        try {
            const prof = await axios.post(`http://localhost:3001/profesores`, payload)
            return dispatch({
                type: POST_PROFESORES,
                payload: prof
            })
        } catch (error) {
            return error.message
        }
    }
}

export function putProfesor(id, payload){
    return async function(dispatch){
        try {
            const prof = await axios.put(`http://localhost:3001/profesores/${id}`, payload)
            return dispatch({
                type: PUT_PROFESORES,
                payload:prof
            })
        } catch (error) {
            return error.message
        }
    }
}

export function deleteProfesor(id){
    return async function(dispatch){
        try {
            const prof = await axios.delete(`http://localhost:3001/profesores/${id}`)
            return dispatch({
                type: DELETE_PROFESORES,
                payload:prof
            })
        } catch (error) {
            return error.message
        }
    }
}

export function filterPrecio(payload){
    return{
        type:FILTER_PRECIO,
        payload
    }
}

export function filterPuntuacion(payload){
    return{
        type:FILTER_PUNTUACION,
        payload
    }
}

export function allProfes (){
    
  return async function(dispatch){
    let info = await axios.get("http://localhost:3001/profesores");

    return dispatch({
      type:GET_PROFESORES,
      payload : info.data
    })
  }
      

};

export function filterProfes (filtros){ 
      return {
        type:'FILTER_ORDER',
        payload : filtros
      }   
  
  };


export function clear () {
    return {
        type: 'CLEAR'
    }
}