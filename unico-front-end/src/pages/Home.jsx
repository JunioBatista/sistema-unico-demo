import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilas } from "../context/Filas.context";
import { getListOfFilas } from "../HTTPClient/config";

export default function Home() {
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const { updateFilas } = useFilas();

  const handleFormSubmit = async (formData) => {
    try {
      let response = await getListOfFilas(formData);
      updateFilas(response);
      navigate("/filas");
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center  h-screen bg-primary-900">
      <Header />
      <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
    </div>
  );
}
