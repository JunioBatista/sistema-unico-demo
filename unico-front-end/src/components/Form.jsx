import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Form({ onSubmit, isLoading }) {
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
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mt-5 bg-primary-800 text-white border-1 border-white-100 lg:w-3xl md:full sm:full flex flex-col items-center gap-4 p-6 rounded shadow"
    >
      <div className="flex flex-col w-full ">
        <label
          htmlFor="url"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          URL da API:
        </label>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="key"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          API Key:
        </label>
        <input
          type="text"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="key"
          name="key"
          value={formData.key}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 font-medium text-sm ">{error}</p>}

      <button
        type="submit"
        className=" w-48  flex items-center justify-center gap-2 bg-text-900 text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        {isLoading ? "" : "Consultar Filas"}
        <FontAwesomeIcon icon={isLoading ? faSpinner : faArrowRight} />
      </button>
    </form>
  );
}
