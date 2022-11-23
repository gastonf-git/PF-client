import axios from "axios";
import {
  GET_ALUMNO,
  DELETE_ALUMNO,
 } from "../types/typesAlumno";




  export function getAlumnoFromAPI(id) {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/alumnos/${id}`)
        .then((alumno) => {
          dispatch(setAlumno(alumno.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
  function setAlumno(payload) {
    return {
      type: GET_ALUMNO,
      payload,
    };
  }


  export function deleteAlumno(id) {
    return function (dispatch) {
      axios
        .delete(`http://localhost:3001/alumnos/${id}`)
        .then(() => {
          dispatch(destroyAlumno());
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
  function destroyAlumno() {
    return {
      type: DELETE_ALUMNO,
      
    };
  }