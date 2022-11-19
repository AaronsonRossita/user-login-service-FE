import React from "react";
import './App.css';
import RegisteredStudent from "./components/studentRegistrations/RegisteredStudent";

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
  return(
    <div>
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[0]} availableCourses={DUMMY_COURSES}></RegisteredStudent>
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[1]} availableCourses={DUMMY_COURSES}></RegisteredStudent>
    </div>
  ) 
}

export default App;


