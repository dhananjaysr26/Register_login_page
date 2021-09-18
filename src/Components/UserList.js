import React from 'react'
import "./Register.css"
import { useHistory } from "react-router-dom";
export default function UserList() {
    let history = useHistory();
    const local_userData = localStorage.getItem("userList");
    var userData = local_userData ? JSON.parse(local_userData) : true;
    const { name, email, mobile, } = userData;
    return (
        <div className="form-container">
            <div className="form-left-container">
            </div>
            <div className="form-right-container">
                <h1>User List</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Name">{name}</td>
                            <td data-label="Email">{email}</td>
                            <td data-label="Mobile Number">{mobile}</td>
                        </tr>
                    </tbody>
                </table>
                <input type="button" value="Back to home" className="btn" onClick={() => { history.push("/") }} />


            </div>
        </div>
    )
}
