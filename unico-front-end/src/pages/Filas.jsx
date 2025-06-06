import FilaCard from "../components/FilaCard";
import Header from "../components/Header";
import * as XLSX from "xlsx";
import { useFilas } from "../context/Filas.context";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { formatBrazilianDateTime } from "../utils/formatBrazilianDateTime.js";
import OpenWarningModal from "../components/SweetModal.jsx";

export default function Filas() {
  const { filas } = useFilas();
  const navigate = useNavigate();

  const handleGoBackPage = () => {
    navigate("/");
  };

  const handleExportCSV = () => {
    try {
      let dataSheet = translateListKeys([
        ...filas.connected,
        ...filas.disconnected,
      ]);

      let orderedList = dataSheet.sort((a, b) => {
        return a.Id - b.Id;
      });

      let workBook = XLSX.utils.book_new(orderedList);
      let sheet = XLSX.utils.json_to_sheet(orderedList);
      XLSX.utils.book_append_sheet(workBook, sheet, "");
      XLSX.writeFile(workBook, "listagem-de-filas.xlsx");

      OpenWarningModal({ message: "Arquivo exportado com sucesso!" });
    } catch (error) {
      console.error(error);
      OpenWarningModal({ message: "" });
    }
  };

  const translateListKeys = (dataList) => {
    const translateKeys = {
      id: "Id",
      name: "Nome",
      connected: "Conectada",
      chatsOnQueue: "Chats",
      status: "Status",
      instance: "Instância",
      verification_date: "Data de Verificação",
      connected_date: "Data de Conexão",
    };

    if (!Array.isArray(dataList)) {
      return [];
    }

    let translatedList = dataList.map((itemOriginal) => {
      const newItem = {};
      for (const key in itemOriginal) {
        if (Object.prototype.hasOwnProperty.call(itemOriginal, key)) {
          const newKey = translateKeys[key] || key;
          let value = itemOriginal[key];

          if (key === "connected") {
            value = value ? "Sim" : "Não";
          }

          if (key === "connected_date") {
            value = formatBrazilianDateTime(value);
          }

          newItem[newKey] = value;
        }
      }
      return newItem;
    });
    return translatedList;
  };
  return (
    <section className="bg-primary-900 text-white w-full lg:h-dvh">
      <Header />
      <nav className="w-full flex  px-[2%] lg:px-[10%] justify-between items-center gap-2 py-[6px] bg-blue-950">
        <p>Filas encontradas: 22 </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleExportCSV()}
            className="flex h-[2rem] pr-2 text-sm w-22 p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800"
          >
            Exportar <FontAwesomeIcon icon={faDownload} />
          </button>
          <button
            onClick={() => handleGoBackPage()}
            className="flex h-[2rem] pr-2 text-sm w-22 p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800"
          >
            Voltar
          </button>
        </div>
      </nav>
      <div className="w-full px-[2%] lg:px-[10%] mt-2">
        {filas?.connected.length !== 0 && filas?.disconnected.length !== 0 ? (
          <div className="w-full  gap-8 flex md:flex flex-col lg:flex-row">
            <div className="w-full ">
              <h1 className="text-center text-lg font-bold">
                filas Conectadas: {filas.connected.length}{" "}
              </h1>
              <div className="w-full overflow-y-scroll h-[700px] ">
                {filas.connected.map((fila) => (
                  <FilaCard key={fila.id} fila={fila}></FilaCard>
                ))}
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-center text-lg font-bold">
                Filas Desconectadas: {filas.disconnected.length}
              </h1>
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
