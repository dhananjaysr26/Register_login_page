import React, { useState, useEffect } from 'react'
import "./Register.css"
import { useHistory } from "react-router-dom";
export default function Register() {
    let history = useHistory();
    const userData_schema = {
        name: "",
        email: "",
        mobile: "",
        password: ""
    }
    const [nameEr, setNameEr] = useState("");
    const [mobileEr, setMobileEr] = useState("");
    const [passwoedEr, setPasswordEr] = useState("");
    const [emailEr, setEmailEr] = useState("");
    var [userData, setUserData] = useState(userData_schema);
    const inputHandler = (e) => {
        e.preventDefault();
        var { name, value } = e.target;
        setUserData({
            ...userData, [name]: value
        });
    }
    function formValidation() {
        var flag = 1;
        if (!isNaN(userData.name)) {
            flag = 0;
            setNameEr("Name Can't be Number");
        } else {
            setNameEr("");
        }
        if (userData.mobile.length != 10) {
            flag = 0;
            setMobileEr("Mobile Number Should be 10 Digit");
        } else {
            setMobileEr("");
        }
        if (userData.password.length < 8) {
            flag = 0;
            setPasswordEr("Password length should atlest 8 Character");
        } else {
            setPasswordEr("");
        }
        if (!userData.email.includes("@")) {
            flag = 0;
            setEmailEr("Email Not Valid");
        } else {
            setEmailEr("");
        }
        if (flag) {
            return 1;
        }
        return 0;

    }
    const onSubmitForm = () => {
        let formVal = formValidation();
        if (formVal) {
            console.log("User Data" + userData);
            localStorage.setItem('userList', JSON.stringify(userData));
            alert("Registration Successful");
            history.push("/user-list");
        }
    }
    return (
        <div className="form-container">
            <div className="form-left-container">
            </div>
            <div className="form-right-container">
                <h1>Register</h1>
                <form>
                    <div className='form-inputs'>
                        <input type="name" id="name" name="name" onChange={inputHandler} />
                        <label for="name">Name</label>
                    </div>
                    <div className='form-inputs'>
                        <input type="number" id="number" name="mobile" onChange={inputHandler} />
                        <label for="number">Mob Number</label>
                    </div>
                    <div className='form-inputs'>
                        <input type="email" id="email" name="email" onChange={inputHandler} />
                        <label for="email">Email</label>
                    </div>
                    <div className='form-inputs'>
                        <input type="password" id="pass" name="password" onChange={inputHandler} />
                        <label for="pass">Password</label>
                    </div>
                    <div className="">
                        <p className="error">{nameEr}</p>
                        <p className="error">{mobileEr}</p>
                        <p className="error">{emailEr}</p>
                        <p className="error">{passwoedEr}</p>
                    </div>
                    <input type="button" value="Register" className="btn" onClick={onSubmitForm} />
                </form>
                <h5 className="hint">Already have Account?<a className="login" onClick={() => { history.push("/login") }}>Login Here</a></h5>


            </div>

        </div>
    )
}
