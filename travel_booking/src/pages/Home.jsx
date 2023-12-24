import React from "react";
import { Link } from "react-router-dom";
import home  from '../assets/images/home.jpg'
import { Box } from "@mui/material";

const Home = () => {
    return (
        <>
            <div>
                <Box
                    component="img"
                    alt="The house from the offer."
                    src={home}
                    height= '70vh'
                    width= '100%'
                />
            </div>
            
        </>
    )
}

export default Home;