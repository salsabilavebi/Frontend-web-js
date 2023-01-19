import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useNavigate } from 'react-router-dom';

//import axios
import axios from 'axios';

function Login() {

    //define state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   

    //define history
    const navigate = useNavigate();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost:5000/login', formData)
        .then((response) => {

            //set token on localStorage
            localStorage.setItem('token', response.data.token);

            //redirect to dashboard
            navigate.push('/karyawan');
        })
        .catch((error) => {

            //assign error to state "validation"
           
        })
    };

    return (
      
        <section className="Auth-form-container ">
            <div className="Auth-form">
                <div className="container">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <form onSubmit={loginHandler}>
                                <div className="form-group mt-3">
                                    <label className="label">Email or Username</label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter email"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
        
        </section>
       
    )
}

export default Login