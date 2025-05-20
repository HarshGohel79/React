import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Emplist() {
  // const [columns,setColumns] =  useState([]);
  const [users, setUsers] = useState([]);
  const { vId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleView = (id) => {
    navigate("/viewuser/" + id);
  };

  const handleEdit = (id) => {
    navigate('/edituser/' + id)
  }

  const handleDelete = (id) => {
    fetch('http://localhost:8000/users/' + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },

    })
      .then((res) => {
        if (res) {
          alert('Deleted..!')
          navigate('/')
        }
      })

  }

  return (
    <>
      <div className="container py-5">
        <h2 className="text-center">EMPLOYEE LIST</h2>
        <p className="w-75 mx-auto text-end">
          <button type="button" className="btn btn-primary">
            <Link to={"/adduser"} className="text-light">
              Add User
            </Link>
          </button>
        </p>
        <table className="w-75 mx-auto text-center border">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((val) => (
              <>
                <tr key={val.id} className="border">
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn rounded btn-info" onClick={handleView}>
                        View
                      </button>
                      <button type="button" className="btn rounded btn-warning mx-2" onClick={handleEdit}>
                        Edit
                      </button>
                      <button type="button" className="btn rounded btn-danger" onClick={handleDelete}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Emplist;
