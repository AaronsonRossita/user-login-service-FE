import React from "react";
import './CourseDate.css';

function CourseDate(props){
    const {selectedCourse} = props
    return(
        <div className="course_date">
            {selectedCourse.courseDate.toDateString()}
        </div>
    )
}

export default CourseDate;