import { useState } from "react";
import { useFilas } from "../context/Filas.context";
import { deleteFilaById, updateFilaById } from "../HTTPClient/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenWarningModal from "./SweetModal";
import { formatBrazilianDateTime } from "../utils/formatBrazilianDateTime";

export default function FilaCard({ fila }) {
  // eslint-disable-next-line no-unused-vars
  const { updateFilas, filas } = useFilas();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConnectBtn = async (id) => {
    try {
      setIsConnecting((state) => !state);
      let response = await updateFilaById(id);
      let connectedItem = response.item[0];
      setIsConnecting((state) => !state);

      updateFilas((prevFilasState) => {
        const newDisconnected = prevFilasState.disconnected.filter(
          (item) => item.id !== connectedItem.id,
        );
        const newConnected = [...prevFilasState.connected, connectedItem];

        return {
          ...prevFilasState,
          disconnected: newDisconnected,
          connected: newConnected,
        };
      });
      OpenWarningModal(response);
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  const handleDeleteBtn = async (id) => {
    setIsDeleting((state) => !state);
    let response = await deleteFilaById(id);

    setIsDeleting((state) => !state);

    updateFilas((prevFilasState) => {
      const newDisconnected = prevFilasState.disconnected.filter(
        (item) => item.id !== id,
      );

      return {
        ...prevFilasState,
        disconnected: newDisconnected,
      };
    });

    OpenWarningModal(response);
  };

  return (
    <div className="border-1  border-primary-800 bg-primary-700 flex rounded shadow mb-2 p-1">
      <div
        className={
          fila.connected
            ? " rounded-sm bg-green-300 flex justify-center items-center p-2 text-black mr-2"
            : " rounded-sm bg-red-400 flex justify-center items-center p-2 text-black mr-2"
        }
      >
        {" "}
        {fila.id}
      </div>
      <div className="rounded-l-lg flex flex-col grow-1">
        <div className="flex my-0.5 gap-2">
          <span className="font-semibold text-sm text-[14px] leading-[14px]">
            Nome:
          </span>
          <span className="text-sm text-[14px] leading-[16.59px]">
            {fila.name}
          </span>
        </div>
        <div className="flex my-0.5 gap-2">
          <span className="font-semibold text-sm text-[14px] leading-[14px] ">
            Instancia:
          </span>
          <span className="text-sm text-[14px] leading-[16.59px]">
            {fila.instance}
          </span>
        </div>
        <div className="flex my-0.5 gap-2">
          <span className="font-semibold text-sm text-[14px] leading-[14px] ">
            Status:
          </span>
          <span className="text-sm text-[14px] leading-[16.59px]">
            {fila.connected ? "Conectada" : "Desconectada"}
          </span>
        </div>
        <div className="flex my-0.5 gap-2">
          <span className="font-semibold text-sm text-[14px] leading-[14px] ">
            Quantidade de chats:
          </span>
          <span className="text-sm text-[14px] leading-[16.59px]">
            {fila.chatsOnQueue}
          </span>
        </div>

        {fila.connected_date && (
          <div className="flex my-0.5 gap-2">
            <span className="font-semibold text-sm text-[14px] leading-[14px]">
              Data de conexão:
            </span>
            <span className="text-sm text-[14px] leading-[16.59px]">
              {formatBrazilianDateTime(fila.connected_date)}
            </span>
          </div>
        )}
      </div>
      {!fila.connected && (
        <div className="flex h-full flex-col lg:flex-row items-center self-center gap-2 mr-2">
          <button
            onClick={() => handleConnectBtn(fila.id)}
            className="flex h-[1.5rem] lg:h-[2rem] w-20 text-sm p-1 items-center justify-around gap-2 bg-text-900 text-white  rounded hover:bg-blue-800"
          >
            {isConnecting ? <FontAwesomeIcon icon={faSpinner} /> : "Conectar"}
          </button>
          <button
            onClick={() => handleDeleteBtn(fila.id)}
            className="flex h-[1.5rem] lg:h-[2rem] w-20 text-sm p-1 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800"
          >
            {isDeleting ? <FontAwesomeIcon icon={faSpinner} /> : "Deletar"}
          </button>
        </div>
      )}
    </div>
  );
}
