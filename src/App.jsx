import { useEffect, useState } from "react";
import Form from "./components/Form";
import EmployeeList from "./components/EmployeeList";
import { ToastContainer, toast } from "react-toastify";

const App = () => {

  const [staff, setStaff] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("staffData")) || [];
    setStaff(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("staffData", JSON.stringify(staff));
  }, [staff]);

  const removeStaff = (id) => {
    setStaff(staff.filter((emp) => emp.id !== id));
    toast.error("Employee Deleted");
  };

  const editStaff = (id) => {
    setEditMode(true);
    setEditId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <ToastContainer />

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-8">
          Employee Management System
        </h1>

        <Form
          staff={staff}
          setStaff={setStaff}
          editMode={editMode}
          setEditMode={setEditMode}
          editId={editId}
          setEditId={setEditId}
        />

        <EmployeeList
          staff={staff}
          removeStaff={removeStaff}
          editStaff={editStaff}
        />

      </div>

    </div>
  );
};

export default App;