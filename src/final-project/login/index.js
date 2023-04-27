import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../users/users-thunk"

function Login() {
    const { currentUser } = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/final-project/profile");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">
        <h4 className="text-secondary mb-3"><i className="bi bi-pencil-square"></i> Login</h4>
            <div className="form-group text-secondary">
                <label>Username: </label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)
                    }/>
            </div>
            <div className="form-group text-secondary">
                <label>Password: </label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)
                    }
                />
            </div>
            <button onClick={login} className="btn btn-primary mt-3">
                Login
            </button>


        </div>
    );
}

export default Login;