import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { employees } from './Employees';
import Addemp from './Addemp';

const Home = () => {

    const navigate = useNavigate();
    const {editId} = useParams();
    const [emplist, setEmplist] = useState([]);

    useEffect(() => {
        setEmplist(employees)
    }, [editId])
    
    const handleView = (id) => {
        navigate('/viewEmp/'+id)
    }
    
    const handleEdit = (id) => {
        navigate('/editEmp/'+id)
    }
    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure to remove this employee ?")) {
                const remove = emplist.filter(data => data.id !== id);
                setEmplist(remove);
            }
        }
    }

    const addEmployee = (newEmployee) => {
        setEmplist([...emplist, newEmployee]);
    };

    return (
        <div className="w-50 container text-center">
            <h1 className=''>Employee Data</h1>
            <Addemp addEmployee={addEmployee} />
            {/* <p className='text-end'> <Link to='/addEmp' className='btn btn-primary'>Add Employee</Link> </p> */}
            <table className="table table-dark table-hover mx-auto">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emplist && emplist.map((data) => (
                        <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => { handleView(data.id) }}>View</button>
                                <button className='btn btn-warning mx-2' onClick={() => { handleEdit(data.id) }}>Edit</button>
                                <button className='btn btn-danger' onClick={() => { handleDelete(data.id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Home
