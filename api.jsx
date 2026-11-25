import React, { useEffect } from "react";

function API() {
    const GameOn = async () => {
        try {
            const response = await fetch("");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log("Error fetching data",error);
        }
    };

    
    const GameOver = async () => {
        try {
            const response = await fetch("");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log("Error fetching data",error);
        }
    };


useEffect(() => {
    GameOn();
    GameOver();
    }, []);

    return (
        <div>
            <h1>API</h1>
            <p></p>
        </div>
    );
}

export default API;
