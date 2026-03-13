import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Form = ({ staff, setStaff, editMode, setEditMode, editId, setEditId }) => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        salary: "",
        department: "",
        joiningDate: "",
        gender: ""
    });

    useEffect(() => {
        if (editMode) {
            const emp = staff.find((e) => e.id === editId);
            if (emp) setInput(emp);
        }
    }, [editMode]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.name || !input.email) {
            toast.error("Fill all fields");
            return;
        }

        if (editMode) {

            const updated = staff.map((emp) =>
                emp.id === editId ? { ...input, id: editId } : emp
            );

            setStaff(updated);
            setEditMode(false);
            setEditId(null);
            toast.success("Employee Updated");

        } else {

            setStaff([...staff, { ...input, id: Date.now() }]);
            toast.success("Employee Added");

        }

        setInput({
            name: "",
            email: "",
            salary: "",
            department: "",
            joiningDate: "",
            gender: ""
        });
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

                <input name="name" placeholder="Name"
                    value={input.name} onChange={handleChange}
                    className="border p-3 rounded-lg" />

                <input name="email" placeholder="Email"
                    value={input.email} onChange={handleChange}
                    className="border p-3 rounded-lg" />

                <input name="salary" placeholder="Salary"
                    value={input.salary} onChange={handleChange}
                    className="border p-3 rounded-lg" />

                <input name="department" placeholder="Department"
                    value={input.department} onChange={handleChange}
                    className="border p-3 rounded-lg" />

                <input type="date" name="joiningDate"
                    value={input.joiningDate} onChange={handleChange}
                    className="border p-3 rounded-lg" />

                <select name="gender"
                    value={input.gender} onChange={handleChange}
                    className="border p-3 rounded-lg">
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>

                <button className="md:col-span-2 bg-cyan-600 text-white p-3 rounded-lg">
                    {editMode ? "Update Employee" : "Add Employee"}
                </button>

            </form>

        </div>
    );
};

export default Form;