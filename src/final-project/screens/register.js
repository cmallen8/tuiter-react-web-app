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
           navigate("/final-project/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="row">
            <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">
                <h4 className="text-secondary mb-3"><i className="bi bi-pencil-square"></i> Register</h4>
            <div className="row">
                <div className="col-6">
                    <div className="form-group mb-3 text-secondary">
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
                <div className="col-6 mb-3">
                    <div className="form-group text-secondary">
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


            <div className="form-group mb-3 text-secondary">
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
            <div className="form-group mb-3 text-secondary">
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
            <div className="form-group mb-3 text-secondary">
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

            <div className="form-group mb-3 text-secondary">
                Favorite Genre:<br/>
                <div className="row">
                    <div className="col-4 text-secondary">
                        <input type="radio" id="Family" name="userType" value={userType}
                               onChange={(e) => {
                                   setUserType(e.target.id);
                               }}/>
                        <label for="Family">&nbsp;Family</label>
                    </div>
                    <div className="col-4">
                        <input type="radio" id="Comedy" name="userType" value={userType}
                               onChange={(e) => {
                                   setUserType(e.target.id);
                               }}/>
                        <label for="Comedy">&nbsp;Comedy</label>
                    </div>
                    <div className="col-4">
                        <input type="radio" id="Action" name="userType" value={userType}
                               onChange={(e) => {
                                   setUserType(e.target.id);
                               }}/>
                        <label for="Action">&nbsp;Action</label>
                    </div>
                </div>

            </div>


            <button onClick={register} className="btn btn-primary">
                Register
            </button>


            </div>
        </div>
    );
}

export default Register;