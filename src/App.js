import React, {useState} from "react";
import './App.css';
import RegisteredStudent from "./components/studentRegistrations/RegisteredStudent";
import NewStudent from "./components/newStudent/NewStudent";

const DUMMY_REGISTERED_STUDENTS = [
  {
      id: '1',
      studentName: "Yonit Levi",
      course: "qa"
  },
  {
      id: '2',
      studentName: "Oren Hazan",
      course: "cyber"
  }
]

const DUMMY_COURSES = [
  {
    id: '1',
    courseName: "fullstack",
    courseDate: new Date(2022, 10, 5)
  },
  {
    id: '2',
    courseName: "qa",
    courseDate: new Date(2023, 5, 4)
  },
  {
    id: '3',
    courseName: "cyber",
    courseDate: new Date(2025, 3, 10)
  }
];

function App() {

  const [registeredStudents, setRegisteredStudents] = useState(DUMMY_REGISTERED_STUDENTS);


  const addStudentHandler = (registeredStudent) => {
      setRegisteredStudents((prevStudents => {
          return [registeredStudent, ...prevStudents]
      }));
  }

  const newStudentRegisteredHandler = (student) => {
      const registeredStudent = {
          id: (registeredStudents.length + 1).toString(),
          studentName: student.studentName,
          course: student.course
      }
      addStudentHandler(registeredStudent)
  }

  return(
    <div>
      <NewStudent onRegisteredNewStudent={newStudentRegisteredHandler}/>
      {registeredStudents.map((registeredStudent) => {
          return <RegisteredStudent registeredStudent={registeredStudent} availableCourses={DUMMY_COURSES}/>
      })}
    </div>
  ) 
}

export default App;


