import React, {useContext, useEffect, useState} from "react";
import AuthContext, {AuthProvider} from "./context/AuthProvider";
import {testAuthenticatedApi} from "../services/api";

function Home() {
    const authContext = useContext(AuthContext);
    const [testResponse, setTestResponse] = useState();

    useEffect(() => {
        console.log("this is auth " + JSON.stringify(authContext["auth"]))
        if(Object.keys(authContext["auth"]).length > 0 ) {
            console.log("heyyyyy")
            testAuthenticatedApi({
                    "Authorization": "Bearer " + authContext["auth"]
            }
            ).then(
                res => {
                    console.log("this is res from authenticated api " + JSON.stringify(res));
                    setTestResponse(res.data.response);
                }
            )
        }
    }, [authContext])

    return (
        <>
            <h1>Home</h1>
            {Object.keys(authContext["auth"]).length > 0 && <p>{testResponse}</p>}
        </>
    )
}

export default Home;