import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFilas } from "../context/Filas.context";
import Header from "../components/Header";
import FilaCard from "../components/filaCard";

 
export default function Filas() {
  const { filas } = useFilas(); 

    return (
      <section className= "bg-primary-900 text-white  h-dvh w-full ">

        <Header />
        <div className="w-full px-[10%] mt-6">

          {filas?.total > 0 ? (

          <div className="flex w-full   gap-8">
            <div className="w-full ">
              <h1 className="text-center text-lg font-bold">filas Conectadas: {filas.connected.length} </h1>
              <div className="w-full overflow-y-scroll h-[700px] ">
                {filas.connected.map((fila) => (
                  <FilaCard key={fila.id} fila={fila}></FilaCard>
                ))}
              </div>
            </div>

            <div className="w-full ]">
              <h1 className="text-center text-lg font-bold">Filas Desconectadas: {filas.disconnected.length}</h1>
              <div className="w-full overflow-y-scroll h-[700px] ">
                {filas.disconnected.map((fila) => (
                  <FilaCard key={fila.id} fila={fila}></FilaCard>
                ))}
              </div>
            </div>
          </div>
        
      ) : (
        <p className="text-center">Nenhuma fila encontrada.</p>
      )}
    </div>
      </section>
    );
  }