import { useFilas } from "../context/Filas.context";
import { deleteFilaById, updateFilaById } from "../HTTPClient/config";

export default function FilaCard({fila}) {
    const { updateFilas, filas } = useFilas();

    const handleConnectBtn = async (id) => {
        try {
            let response = await updateFilaById(id)
            updateResults(response);
        } catch (error) {
            
        }

    }

    const handleDeleteBtn = async (id) => {
      let response = await deleteFilaById(id)
      navigate('/filas')
    }

    return(
        <div className="border-1  border-primary-800 bg-primary-700 flex rounded shadow mb-2 p-1 rounded-sm">
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
            </div>
            {!fila.connected && (
            <div className="flex items-center gap-2 mr-2">
                <button onClick={() =>handleConnectBtn(fila.id)} className="flex h-[2rem] text-sm p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800">Conectar</button>
                <button onClick={() =>handleDeleteBtn(fila.id)} className="flex h-[2rem] text-sm p-2 items-center justify-center gap-2 bg-text-900 text-white  rounded hover:bg-blue-800">Deletar</button>
            </div>
            )}
        </div>
    )
}

