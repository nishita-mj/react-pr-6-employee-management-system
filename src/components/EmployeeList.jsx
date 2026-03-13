const EmployeeList = ({ staff, removeStaff, editStaff }) => {

    if (staff.length === 0) {
        return <p className="text-center mt-10">No Employees</p>;
    }

    return (
        <div className="grid md:grid-cols-3 gap-6 mt-10">

            {staff.map((emp) => (

                <div key={emp.id} className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-xl font-bold">{emp.name}</h3>

                    <p>{emp.email}</p>

                    <p>Department : {emp.department}</p>
                    <p>Salary : {emp.salary}</p>

                    <div className="flex gap-3 mt-4">

                        <button
                            onClick={() => editStaff(emp.id)}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => removeStaff(emp.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default EmployeeList;