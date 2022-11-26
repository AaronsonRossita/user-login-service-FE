import React, {useState} from "react";
import "./NewStudent.css"
import StudentForm from "./StudentForm";

function NewStudent(props){

    const [isEditing, setIsEditing] = useState(false);

    const saveRegisteredStudentDataHandler = (enteredRegisteredStudentData) => {
        console.log("this is enteredStudentData " + JSON.stringify(enteredRegisteredStudentData));
        const registeredStudentData = {
            ...enteredRegisteredStudentData,
            id: Math.random().toString()
        }
        console.log("this is enteredStudentData after object change: " + JSON.stringify(registeredStudentData));
        props.onRegisteredNewStudent(registeredStudentData);
        stopEditingHandler();
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-registration'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Register Student</button>
            )}
            {isEditing && (
                <StudentForm
                    courses={props.courses}
                    onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}

export default NewStudent;