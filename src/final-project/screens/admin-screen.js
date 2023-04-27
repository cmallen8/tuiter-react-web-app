import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as userService from "../users/users-service"
function AdminScreen() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});
    const getUsers = async () => {
        const users = await userService.findUsers();
        setUsers(users);
    };
    const createUser = async () => {
        const createdUser = await userService.createUser(newUser);
        setUsers([...users, createdUser]);
    };
    const deleteUser = async (id) => {
        await userService.deleteUser(id)
        setUsers(users.filter((user) => user._id !== id));
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div className="col-12 bg-light shadow mb-5 p-3 border border-1 border-primary rounded-2">
            <h4 className="text-secondary">
                Admin
            </h4>
            <hr />

            <h5 className="text-secondary">
                Create User
            </h5>

            <div className="row">
                <div className="col-6">
                    <div className="form-group mb-3 text-secondary">
                        <label>Username: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={newUser.username}
                            onChange={(e) =>
                                setNewUser({ ...newUser, username: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="col-6 mb-3">
                    <div className="form-group text-secondary">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={newUser.password}
                            onChange={(e) =>
                                setNewUser({ ...newUser, password: e.target.value })
                            }
                            value={newUser.password}
                        />
                    </div>
                </div>



            <div className="form-group mb-3 text-secondary">
                <label>First Name: </label>
                <input
                    type="text"
                    className="form-control"
                    value={newUser.firstName}
                    onChange={(e) =>
                        setNewUser({ ...newUser, firstName: e.target.value })
                    }
                />
            </div>
            <div className="form-group mb-3 text-secondary">
                <label>Last Name: </label>
                <input
                    type="text"
                    className="form-control"
                    value={newUser.lastName}
                    onChange={(e) =>
                        setNewUser({ ...newUser, lastName: e.target.value })
                    }
                />
            </div>
            <div className="form-group mb-3 text-secondary">
                <label>Email: </label>
                <input
                    type="text"
                    className="form-control"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                />
            </div>

            <div className="form-group mb-3 text-secondary">
                Favorite Genre:<br/>
                <div className="row">
                    <div className="col-4 text-secondary">
                        <input
                            type="radio"
                            id="Action" name="userType"
                            value={newUser.userType}
                            onChange={(e) =>
                                setNewUser({ ...newUser, userType: e.target.value })
                            }
                        />
                        <label htmlFor="Action">&nbsp;Action</label>
                    </div>
                    <div className="col-4">
                        <input
                            type="radio"
                            id="Comedy" name="userType"
                            value={newUser.userType}
                            onChange={(e) =>
                                setNewUser({ ...newUser, userType: e.target.value })
                            }
                        />
                        <label htmlFor="Comedy">&nbsp;Comedy</label>
                    </div>
                    <div className="col-4">
                        <input
                            type="radio"
                            id="Family" name="userType"
                            value={newUser.userType}
                            onChange={(e) =>
                                setNewUser({ ...newUser, userType: e.target.value })
                            }
                        />
                        <label htmlFor="Family">&nbsp;Family</label>
                    </div>
                </div>

            </div>
                <div className="row mb-3">
                    <div>
                    <button
                    onClick={() => createUser()}
                    className="btn btn-primary"
                >
                    Create New User </button></div>
                </div>
            </div>
            <hr />
            <div className="row mt-3">


            <h5 className="text-secondary">
                Delete User
            </h5>

            <table className="table">
                <thead>
                <tr>
                    <th className="text-secondary">User Name</th>
                    <th className="text-secondary">Action</th>
                </tr>
                </thead>
                <tbody>

                {users.map((user) => (
                    <tr key={user._id}>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            <button
                                onClick={() => deleteUser(user._id)}
                                className="btn btn-primary"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default AdminScreen;