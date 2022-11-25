import { ProfeCard } from "../ProfeCard/Profecard"
import './ProfeCards.css'
export const ProfeCards=({profes})=>{
  console.log(profes)
    return (
        <div  className="ProfeCardsCont">
            {profes && profes.length>0 ?  (
            profes?.map((e) => {
              return e.Error ? (
                <h4>profesor no encontrado</h4>
              ) : (
                <div className="homeProfeCard col-md-3" key={e.id}>
                  <ProfeCard
                    username={e.username}
                    nombre={e.nombre}
                    imagen={e.imagen}
                    pais={e.country?.flag}
                    descripcion={e.descripcion}
                    materias={e.materias}
                    puntuacion={e.puntuacion}
                    precio={e.precio}
                    
                  />
                </div>
              );
            })
          ) : (
            <div>
              <h1>Cargando...</h1>
            </div>
          )}
        </div>
    )
}