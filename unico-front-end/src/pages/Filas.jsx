import { useFilas } from "../context/Filas.context";
import Header from "../components/Header";
import FilaCard from "../components/filaCard";
import { useNavigate } from "react-router-dom";

 
export default function Filas() {
  const { filas } = useFilas(); 
  const navigate = useNavigate();

  const handleGoBackPage = () => {
    navigate('/')
  }

    return (
      <section className= "bg-primary-900 text-white w-full lg:h-dvh">

        <Header />
        <div className="w-full px-[2%] lg:px-[10%] mt-6">

          { (filas?.connected.length !== 0 && filas?.disconnected.length !== 0)  ? (

          <div className="w-full  gap-8 flex md:flex flex-col lg:flex-row">
            <div className="w-full ">
              <h1 className="text-center text-lg font-bold">filas Conectadas: {filas.connected.length} </h1>
              <div className="w-full overflow-y-scroll h-[700px] ">
                {filas.connected.map((fila) => (
                  <FilaCard key={fila.id} fila={fila}></FilaCard>
                ))}
              </div>
            </div>

            <div className="w-full">
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
      <footer className="w-full flex justify-end pt-3.5 ">
        <button
          onClick={()     =>handleGoBackPage()} 
          className="flex h-[2rem] pr-2 text-sm p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800">Voltar
        </button>
      </footer>

    </div>
      </section>
    );
  }