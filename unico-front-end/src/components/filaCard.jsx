export default function FilaCard({fila}) {

    return(
        <div className="border-1  border-primary-800 bg-primary-700 flex rounded shadow mb-2 p-1 rounded-sm">
            <div className={ fila.connected ?  " rounded-sm bg-green-300 flex justify-center items-center p-2 text-black mr-2" : " rounded-sm bg-red-400 flex justify-center items-center p-2 text-black mr-2"}> {fila.id}</div>
            <div className="rounded-l-lg flex flex-col">
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
            </div>
        </div>
    )
}

