import React from "react";
export const UncontrolledForm = () => {
    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();

    const handleSubmit = (e) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        e.preventDefault();
    }

    /**
     * Uncontrolled Form
     * 
     * because the form here is not accessible from outside 
     * components and parents component 
     * we have to do alternative thing like createRef
     * 
     * 
     * Only when we submit this form the data of it is going to change
     * 
     */
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name = "name" placeholder="name" ref = {nameInputRef}/>
                <input type="text" name = "age" placeholder="age"ref = {ageInputRef}/>
                <input type="submit" />
            </form>
        </>
    )
}