import React, {useContext, useEffect, useState} from "react";
import AuthContext, {AuthProvider} from "./context/AuthProvider";
import {testAuthenticatedApi} from "../services/api";

function Home() {
    const authContext = useContext(AuthContext);
    const [testResponse, setTestResponse] = useState();

    useEffect(() => {
        if(Object.keys(authContext["auth"]).length > 0 ) {
            testAuthenticatedApi({"Authorization": "Bearer " + authContext["auth"]}
            ).then(
                res => {
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