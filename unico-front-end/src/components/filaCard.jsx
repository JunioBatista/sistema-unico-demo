import { useState } from "react";
import { useFilas } from "../context/Filas.context";
import { deleteFilaById, updateFilaById } from "../HTTPClient/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenWarningModal from "./SweetModal";

export default function FilaCard({fila}) {
    const { updateFilas, filas } = useFilas();
    const [isConnecting, setIsConnecting] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleConnectBtn = async (id) => {
        try {
            setIsConnecting((state => !state))
            let response = await updateFilaById(id);
            let connectedItem = response.item[0];
            setIsConnecting((state => !state))
            
            updateFilas(prevFilasState => {
                const newDisconnected = prevFilasState.disconnected.filter(item => item.id !== connectedItem.id);
                const newConnected = [...prevFilasState.connected, connectedItem];

                return {
                    ...prevFilasState,
                    disconnected: newDisconnected,
                    connected: newConnected,
                };

            });
            OpenWarningModal(response)
            
        } catch (error) {
            
        }
    }



    const handleDeleteBtn = async (id) => {


      setIsDeleting((state => !state))
      let response = await deleteFilaById(id)
      console.log(response)
      setIsDeleting((state => !state))
      
      updateFilas(prevFilasState => {
          const newDisconnected = prevFilasState.disconnected.filter(item => item.id !== id);

          return {
              ...prevFilasState,
              disconnected: newDisconnected,
          };
      });

      OpenWarningModal(response)
    }

    const formatDate = (dataIso) => {
        if (!dataIso) return ''; 
    
        const data = new Date(dataIso); 
    
        const opcoes = {
          year: 'numeric', 
          month: '2-digit',
          day: '2-digit', 
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Sao_Paulo' 
        };
    
        return data.toLocaleString('pt-BR', opcoes);
    };


    return(
        <div className="border-1  border-primary-800 bg-primary-700 flex rounded shadow mb-2 p-1">
            <div className={ fila.connected ?  " rounded-sm bg-green-300 flex justify-center items-center p-2 text-black mr-2" : " rounded-sm bg-red-400 flex justify-center items-center p-2 text-black mr-2"}> {fila.id}</div>
            <div className="rounded-l-lg flex flex-col grow-1">
                <div className="flex gap-2">
                    <span className="font-semibold text-sm">Nome:</span> 
                    <span className="text-sm">{fila.name}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold text-sm">Instancia:</span> 
                    <span className="text-sm">{fila.type}</span>
                </div >
                <div className="flex gap-2">
                    <span className="font-semibold text-sm">Status:</span> 
                    <span className="text-sm">{fila.connected? 'Conectada':'Desconectada'}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold text-sm">Quantidade de chats:</span> 
                    <span className="text-sm">{fila.chatsOnQueue}</span>
                </div>

                {
                    fila.connected_date && (
                        <div className="flex gap-2">
                            <span className="font-semibold text-sm">Data de conexão:</span> 
                            <span className="text-sm">{formatDate(fila.connected_date)}</span>
                        </div>
                    ) 
                }

            </div>
            {!fila.connected && (
            <div className="flex items-center gap-2 mr-2">
                <button 
                    onClick={() =>handleConnectBtn(fila.id)} 
                    className="flex h-[2rem] text-sm p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800">
                    {isConnecting ? <FontAwesomeIcon icon={faSpinner} /> : "Conectar"}
                </button>
                <button 
                    onClick={()     =>handleDeleteBtn(fila.id)} 
                    className="flex h-[2rem] text-sm p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800">
                    {isDeleting ? <FontAwesomeIcon icon={faSpinner} /> : "Deletar"}
                </button>
            </div>
            )}
        </div>
    )
}

