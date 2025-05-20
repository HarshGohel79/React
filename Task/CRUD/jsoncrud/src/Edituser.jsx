import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const nav = useNavigate();
    const { eId } = useParams();

    useEffect(() => {
        fetch('http://localhost:8000/users/' + eId)
            .then((res) => { return res.json() })
            .then((data) => {
                setName(data.name)
                setEmail(data.email)
            })
    }, [eId])
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = { name, email }

        fetch('http://localhost:8000/users/' + eId, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res) {
                    alert('Updated..!')
                    nav('/')
                }
            })
    }
    return (
        <>
            <div className="container mx-auto w-50 border">
                <div className="row">
                    <div>
                        <h2 className="text-center">EDIT USER</h2>
                        <p className="text-end">
                            <Link to="/" className="btn btn-secondary">
                                Go back
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Id</label>
                                <input
                                    type="text"
                                    value={eId}
                                    disabled={true}
                                    onChange={() => { setName("") }}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Enter name.."
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Enter name.."
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Enter email.."
                                />
                            </div>
                            <div className="mb-3">
                                <button type="button" className="btn btn-primary" disabled={name==="" | email===""}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditUser;