import React from "react";
import './RegisteredStudentList.css';
import RegisteredStudent from "./RegisteredStudent";


function RegisteredStudentList(props) {

    if(props.registeredStudents.length === 0){
        return <h2 className="registrations-list__fallback">No Students Registered</h2>
    }

    return(
        <ul className="registrations-list">
            {props.registeredStudents.map((student) => {
                return <RegisteredStudent
                    key={student.id}
                    studentName={student.studentName}
                    course={props.course}
                />
            })}
        </ul>
    )
}

export default RegisteredStudentList