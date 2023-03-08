import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");

    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [cpassword, setcPassword] = useState("");

    const createUser = (e) => {
        const newUser = { firstName, lastName, email, password, cpassword };
    };

    const handleFirstName = (e) => {
        if (e.target.value.length !== 0) {
            setfirstName(e.target.value);
            if (e.target.value.length < 2) {
                setfirstNameError("First name must be at least 2 characters.");
            } else {
                setfirstNameError("");
            }
        } else {
            setfirstName("")
            setfirstNameError("");
        }
    };

    const handleLastName = (e) => {
        if (e.target.value.length !== 0) {
            setlastName(e.target.value);
            if (e.target.value.length < 2) {
                setlastNameError("Last name must be at least 2 characters.");
            } else {
                setlastNameError("");
            }
        } else {
            setlastName("");
            setlastNameError("");
        }
    };

    const handleEmail = (e) => {
        if (e.target.value.length !== 0) {
            setEmail(e.target.value);
            if (e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters.");
            } else {
                setEmailError("");
            }
        } else {
            setEmail("");
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        if (e.target.value.length !== 0) {
            setPassword(e.target.value);
            if (e.target.value !== cpassword) {
                setPasswordError("Passwords must match");
            } else {
                if (e.target.value.length < 8) {
                    setPasswordError("Password must be at least 8 characters.");
                } else {
                    setPasswordError("");
                }
            }
        } else {
            setPassword("");
            setPasswordError("");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {firstNameError ? <p>{firstNameError}</p> : ""}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {lastNameError ? <p>{lastNameError}</p> : ""}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail} />
                    {emailError ? <p>{emailError}</p> : ""}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {passwordError ? <p>{passwordError}</p> : ""}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handlePassword} />
                </div>
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cpassword}</p>
        </div>
    );
};

export default UserForm;
