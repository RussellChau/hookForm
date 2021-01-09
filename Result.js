import React from "react";

const Result = props => {

    const {firstName,lastName,email,password,confirmPassword} = props.info;

    return(
        <div>
            <h1>YOUR FORM DATA</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Result;
