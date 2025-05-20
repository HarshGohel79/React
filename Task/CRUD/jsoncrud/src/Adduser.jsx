import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Adduser() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email })

    fetch('http://localhost:8000/users')
      .then((res) => { return res.json() })
      .then((data) => {
        data.map((v) => {
          if (v.email === email) {
            alert("already exists..!")
          }
        })
      })

    if (name === "" && email === "") {
      alert("Empty...!")
    }
    else {
      const user = { name, email }
      fetch('http://localhost:8000/users', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
      })
        .then((res) => {
          if (res) {
            alert("User added...!");
            nav('/')
          }
        })
    }
  }
  return (
    <>
      <div className="container shadow p-3 border mt-3 w-50 mx-auto">
            <h2 className="text-center">ADD USER</h2>
            <p className="text-end">
              <Link to="/" className="btn btn-secondary">
                Go back
              </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="formGroupExampleInput" placeholder="Enter name.." />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="formGroupExampleInput" placeholder="Enter email.." />
              </div>
              <p class="mb-3">
                <button type="submit" className="btn btn-primary" disabled={name==="" | email===""}>Add</button>
              </p>
            </form>
      </div>
    </>
  );
}

export default Adduser;