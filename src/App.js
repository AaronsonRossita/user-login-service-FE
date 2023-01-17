import React from "react";
import Register from "./components/registration/Register";
import Login from "./components/registration/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {AuthProvider} from "./components/context/AuthProvider";

function App(){
    return(
        <>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signUp" element={<Register />} />
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App;