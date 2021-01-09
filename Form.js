import React from "react";

const Form = props => {
    const {inputState,setInputState} = props;

    const updateData = e => {
        setInputState({
            ...inputState,
            [e.target.name] : e.target.value
        });
    }

    return (
        <form>
            <div className="inputText">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" onChange={updateData}/>
            </div>
            <div className="inputText">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" onChange={updateData}/>
            </div>
            <div className="inputText">
                <label htmlFor="Email">Email:</label>
                <input type="text" name="email" onChange={updateData}/>
            </div>
            <div className="inputText">
                <label htmlFor="Password">Password:</label>
                <input type="text" name= "password" onChange={updateData}/>
            </div>
            <div className="inputText">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange={updateData}/>
            </div>
        </form>
    );

};

export default Form;
