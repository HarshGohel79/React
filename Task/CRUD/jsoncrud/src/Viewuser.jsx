import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Viewuser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { vId } = useParams();
    console.log({ vId })

    useEffect(() => {
        fetch(`http://localhost:8000/users/${vId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setName(data.name);
                setEmail(data.email);
            });
    }, [vId]);
    return (
        <>
            <div className="container shadow p-3 border mt-3 w-50 mx-auto">
                <h3 className='text-center'>Employee Details</h3>
                <p className='text-end'>
                    <Link to='/' className='text-light btn btn-secondary'>Go Back</Link>
                </p>
                <table class="table">
                    <tbody>
                        <tr className='border'>
                            <td className='border'>Id :</td>
                            <td>{vId}</td>
                        </tr>
                        <tr className='border'>
                            <td className='border'>Name :</td>
                            <td>{name}</td>
                        </tr>
                        <tr className='border'>
                            <td className='border'>Email :</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Viewuser
