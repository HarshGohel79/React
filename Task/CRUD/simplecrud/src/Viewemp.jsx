import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { employees } from './Employees';

function Viewemp() {

    const { viewId } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const crrEmployee = employees.find(emp => emp.id === parseInt(viewId));
        if (crrEmployee) {
            setName(crrEmployee.name);
            setEmail(crrEmployee.email);
        }
    }, [viewId]);

    return (
        <>
            <div className="container border mt-5 w-50 mx-auto shadow p-5">
                <h2 className="text-center">Add Employee Details</h2>
                <p className="text-end">
                    <Link to="/" className="btn btn-warning">
                        Home Page
                    </Link>
                </p>
                <form className="border p-3">
                    <div className="mb-3">
                        <label className="form-label">Id</label>
                        <input readOnly type="text" value={viewId} disabled={true} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input readOnly type="text" value={name} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input readOnly type="email" value={email} className="form-control" aria-describedby="emailHelp" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Viewemp
