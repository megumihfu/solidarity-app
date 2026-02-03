import NavBar from "../components/common/NavBar";
import InfoForm from "../components/infos/InfoForm";
import { createInfo } from "../services/infoService";
import { useNavigate } from "react-router-dom";

const CreateInfoPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (form) => {
    await createInfo(form);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <main className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create an info</h1>
        <InfoForm onSubmit={handleCreate} />
      </main>
    </>
  );
};

export default CreateInfoPage;
