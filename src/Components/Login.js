import React, { useState, useEffect } from 'react'
import "./Register.css"
import { useHistory } from "react-router-dom";
export default function Login() {
    let history = useHistory();
    const loginData_schema = {
        email: "",
        password: "",
    }
    var [check, setCheck] = useState(0);
    var [loginData, setloginData] = useState(loginData_schema);
    const inputHandler = (e) => {
        e.preventDefault();
        var { name, value } = e.target;
        setloginData({
            ...loginData, [name]: value
        });
    }
    const inputCheck = () => {
        check ? setCheck(0) : setCheck(1);
        console.log(check);
    }
    useEffect(() => {
        var local_loginData = localStorage.getItem("login_detail");
        local_loginData = local_loginData ? JSON.parse(local_loginData) : false;
        if (local_loginData != undefined) {
            setloginData(local_loginData);
        }


    }, [])
    const Loginbtn = () => {
        alert("Login Successful");
        if (check) {
            localStorage.setItem('login_detail', JSON.stringify(loginData));
        }
    }
    return (
        <div className="form-container">
            <div className="form-left-container">
            </div>
            <div className="form-right-container">
                <h1>Login</h1>
                <form>
                    <div className='form-inputs'>
                        <input type="email" id="email" name="email" value={loginData.email} onChange={inputHandler} />
                        <label for="email">Email</label>
                    </div>
                    <div className='form-inputs'>
                        <input type="password" id="pass" name="password" value={loginData.password} onChange={inputHandler} />
                        <label for="pass">Password</label>
                    </div>
                    <div className="remember">
                        <input type="checkbox" name="rememberCheck" value={check} onChange={inputCheck} />
                        <label>Remember me</label>
                    </div>

                    <input type="submit" value="Login" className="btn" onClick={Loginbtn} />
                </form>
                <h5 className="hint">Not having Account?<a className="login" onClick={() => { history.push("/") }}>Register Here</a></h5>
                <h6 className="terms">Terms and Privacy Policy</h6>

            </div>

        </div>
    )
}
