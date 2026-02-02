import NavBar from "../components/common/NavBar";
import AssociationForm from "../components/associations/AssociationForm";
import { createAssociation } from "../services/associationService";
import { useNavigate } from "react-router-dom";

const CreateAssociationPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (form) => {
    await createAssociation(form);
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <main className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create an association</h1>
        <AssociationForm onSubmit={handleCreate} />
      </main>
    </>
  );
};

export default CreateAssociationPage;
