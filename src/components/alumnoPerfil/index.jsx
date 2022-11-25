import React, { useEffect, useState } from "react";
import * as actions from "../../redux/Actions/Alumno.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const AlumnoPerfil = (props) => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("me monte al useEfect alumnoperfil");
    dispach(actions.getAlumnoFromAPI(props.id));
  }, []);
  let info = useSelector((state) => state.alumnos.alumno);
  const deleteAlumno = () => {
    alert("esta seguro de eliminar su cuenta de alumno");
    dispach(actions.deleteAlumno(props.id));
    navigate("/profile/1");
  };
  return (
    <div>
      {info.name ? (
        <div>
          <p>{info.id}</p>
          <div>
            <img src="./concluido.png" alt={info.picture} />
          </div>

          <br />
          <br />
          <div>
            <h2>Informacion del Alumno</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Nombre</th>
                  <td>{info.name}</td>
                </tr>
                <tr>
                  <th scope="row">Apellido</th>
                  <td>{info.lastname}</td>
                </tr>
                <tr>
                  <th scope="row">Edad</th>
                  <td colspan="2">{info.age}</td>
                </tr>
                <tr>
                  <th scope="row">Correo</th>
                  <td colspan="2">{info.email}</td>
                </tr>
                <tr>
                  <th scope="row">Pais</th>
                  <td colspan="2">{info.country.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={deleteAlumno}>Eliminar Cuenta</button>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};
