
import Form from "../components/Form";
import Header from "../components/header";

export default function Home() {


  return (
      <div className="flex flex-col items-center bg-primary-800 w-screen h-screen ">
        <Header />
        <Form />
      </div>

  );
}