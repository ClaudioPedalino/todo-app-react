import React from "react";
import "./CreateTodoButton.css";

function CreateToDoButton() {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('Create ToDo')}
        > +
        </button>
    );
}

export { CreateToDoButton };