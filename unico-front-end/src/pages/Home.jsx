import axios from "axios";
import Form from "../components/Form";
import { useState } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useSearchResults } from "../context/filas.context";

export default function Home() {

  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const { updateResults } = useSearchResults();

  const handleFormSubmit = async (form) => {
    let BASE_URL = 'http://localhost:8000'
    let url = 'https://ambientesdetesteunicocontato.atenderbem.com'
    let key = 'f59f332a2c5827556c9782e1c3b3c0a6'

    try {
      setIsloading(true)
      const response = await axios.get(`${BASE_URL}/filas`, {
        params: { url, key },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log()
      updateResults(response.data);

      navigate('/filas')
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsloading(false);
    }

  };

  return (
      <div className="flex flex-col items-center  h-screen bg-primary-900">

        <Form 
          onSubmit={handleFormSubmit} 
          isLoading={isLoading}
        />
      </div>

  );
}