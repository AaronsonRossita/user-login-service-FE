import React, { useState } from "react";
import './Registrations.css'
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registrations(props) {

    const [filteredCourse, setFilteredCourse] = useState('fullstack')

    const filterChangeHandler = (selectedCourse) => {
        setFilteredCourse(selectedCourse);
    }

    const filteredRegisteredStudents = props.registeredStudents.filter(student => {
        return student.course === filteredCourse;
    })

    return(
        <div className="registrations card">
            <RegisteredStudentChart registeredStudents={props.registeredStudents} courses={props.courses}/>
            <RegisteredStudentFilter selected={filteredCourse} onChangeFilter={filterChangeHandler}/>
            <RegisteredStudentList registeredStudents={filteredRegisteredStudents} course={props.courses[filteredCourse]}/>
        </div>
    )
}

export default Registrations
