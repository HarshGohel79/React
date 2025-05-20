import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { employees } from "./Employees";

function Editemp() {
    
    const navigate = useNavigate();
    const { editId } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const crrEmployee = employees.find(emp => emp.id === parseInt(editId));
        if (crrEmployee) {
            setName(crrEmployee.name);
            setEmail(crrEmployee.email);
        }
    }, [editId]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Employee Details Updated..!!")
        navigate("/");
    };
    
    return (
        <>
            <div className="container border mt-5 w-50 mx-auto shadow p-5">
                <h2 className="text-center">Add Employee Details</h2>
                <p className="text-end">
                    <Link to="/" className="btn btn-warning">
                        Home Page
                    </Link>
                </p>
                
                <form className="border p-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Id</label>
                        <input type="text" value={editId} disabled={true} onChange={() => { setName("") }} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </>
    )
}

export default Editemp
