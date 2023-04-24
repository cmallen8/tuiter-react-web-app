import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registerThunk } from "../users/users-thunk"

function Register() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = async () => {
        try {
            await dispatch(registerThunk({ username, password, firstName, lastName, email, userType }));
           // navigate("/final-project/profile");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="form-group">
                <label>First Name: </label>
                <input
                    type="test"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {
                        setfirstName(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input
                    type="test"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {
                        setlastName(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>

            <div>
                {currentUser && (
                    <div>
                        <h2>{currentUser.username}</h2>
                        <h2>{currentUser.password}</h2>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Register;