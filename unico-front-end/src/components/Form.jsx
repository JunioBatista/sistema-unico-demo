import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Form() {

    const [formData, setFormData] = useState({ url: "", key: "" });
    const [error, setError] = useState("");

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.url.trim() || !formData.key.trim()) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        setError("");
        alert(`URL: ${formData.url}, Key: ${formData.key}`);
    };
    


    return (
        <form onSubmit={handleSubmit} className= "bg-primary-400 border-1 border-white-100 w-2xl flex flex-col items-center gap-4 p-6 rounded shadow">

        <div className="flex flex-col ">
            <label htmlFor="url" className="mb-1">URL da API:</label>
            <input
                type="text"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="border border-primary-800 p-2 rounded"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="key" className="mb-1">API Key:</label>
            <input
                type="text"
                id="key"
                name="key"
                value={formData.key}
                onChange={handleChange}
                className="border  border-primary-800 p-2 rounded"
            />
        </div>
        {error && <p className="text-red-500 font-medium text-sm">{error}</p>}

        <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary-800 text-white py-2 px-4 rounded hover:bg-primary-600">
            Buscar 
            <FontAwesomeIcon icon={faArrowRight} />
        </button>

        </form>
    )
}
