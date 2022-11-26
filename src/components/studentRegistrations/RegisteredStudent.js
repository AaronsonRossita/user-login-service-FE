import React from "react";
import CourseDate from "./CourseDate";
import './RegisteredStudent.css';

function RegisteredStudent(props){

    const {course, studentName} = props;

    return(
        <div className="registration-student card">
            <CourseDate date={course.startDate}/>
            <div className="registration-student__description">
                <h2>{studentName}</h2>
                <div className="registration-student__course">{course.displayName}</div>
            </div>
        </div>
    )
}

export default RegisteredStudent