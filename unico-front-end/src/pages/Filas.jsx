import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilaCard from "../components/filaCard";
import { useSearchResults } from "../context/filas.context";

 
export default function Filas() {
  const { results } = useSearchResults(); 

    return (
      <section className= " bg-primary-900 text-white  w-screen px-[10%] ">


        <div className="w-full ">
          <h1>Filas encontradas: {results?.total }</h1>
          {results?.total > 0 ? (

          <div className="flex w-full gap-8">
            <div className="w-full">
              <h1>Filas Conectadas</h1>
              {results.connected.map((fila) => (
                <FilaCard key={fila.id} fila={fila}></FilaCard>
              ))}
            </div>

            <div className="w-full">
              <h1>Filas Desconectadas</h1>
              {results.disconnected.map((fila) => (
                <FilaCard key={fila.id} fila={fila}></FilaCard>
              ))}
            </div>

          </div>
        
      ) : (
        <p>Nenhuma fila encontrada.</p>
      )}
    </div>
      </section>
    );
  }