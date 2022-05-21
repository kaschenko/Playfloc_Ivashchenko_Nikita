import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const LandingPages = () => {
    let navigate = useNavigate()

    useEffect(() => {
        return navigate("/list")
    })
    return (
        <div>
            LANDING
        </div>
    );
};

export {LandingPages};