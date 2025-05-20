import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const i = 3 ;

const Addemp = ({addEmployee}) => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {id:i+1,name,email};
        addEmployee(newEmployee);
        navigate("/");
    };

    return (
        <>
            <div className="container text-start mx-auto shadow py-3">
                <h4>Add New Employee</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                    </div>
                    <p className="text-end">
                    <button type="submit" className="btn btn-primary" disabled={name === "" || email === ""}>
                        Add
                    </button>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Addemp