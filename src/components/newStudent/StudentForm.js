import React, {useState} from "react";
import './StudentForm.css'

function StudentForm(props){

    const [enteredStudentName, setEnteredStudentName] = useState('');
    const [enteredCourseName, setEnteredCourseName] = useState('');
    const [enteredStartDate, setEnteredStartDate] = useState('');

    const studentNameChangeHandler = (event) => {
        setEnteredStudentName(event.target.value);
    }

    const courseNameChangeHandler = (event) => {
        setEnteredCourseName(event.target.value);
    };

    const startDateChangeHandler = (event) => {
        setEnteredStartDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const registeredStudent = {
            studentName: enteredStudentName,
            course: enteredCourseName,
            date: enteredStartDate
        }
        setEnteredStudentName('');
        setEnteredCourseName('');
        setEnteredStartDate('');
        props.onRegisteredNewStudent(registeredStudent);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-registration__contorls">
                <div className="new-registration__control">
                    <label>Student Name</label>
                    <input type="text" required onChange={studentNameChangeHandler} value={enteredStudentName}/>
                </div>

                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" defaultValue='' required onChange={courseNameChangeHandler} value={enteredCourseName}>
                        <option value='' disabled>Please Choose A Course</option>
                        <option value='fullstack'>Fullstack Course</option>
                        <option value='qa'>QA Course</option>
                        <option value='cyber'>Cyber Course</option>
                        <option value='product'>Product Management Course</option>
                    </select>
                </div>

                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" onChange={startDateChangeHandler} value={enteredStartDate}/>
                </div>
            </div>
            <br></br>
            <div className="ew-registration__actions">
                <button type="button">Cancel</button>
                <button type="submit">Register Student</button>
            </div>
        </form>
    )
}

export default StudentForm;