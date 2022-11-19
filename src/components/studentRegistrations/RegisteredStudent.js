import React from "react";
import CourseDate from "./CourseDate";
import './RegisteredStudent.css';

function RegisteredStudent(props){
    const {registeredStudent, availableCourses} = props;
    const selectedCourse = availableCourses.find(course => {
        return course.courseName.toString() === registeredStudent.course.toString()
    });
    return(
        <div>
            <div className="registration-student__description">
                <h2>{registeredStudent.studentName}</h2>
                <div className="registration-student__course">
                    {registeredStudent.course}
                </div>
                <CourseDate selectedCourse={selectedCourse}/>
            </div>
        </div>
    )
}

export default RegisteredStudent