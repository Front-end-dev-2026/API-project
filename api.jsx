import React, { useEffect } from "react";

function API() {
    const fetchdata = async () => (
        try {
            const response - await fetch("https://freesound.org/people/Qvantor/sounds/878606/");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log("Error fetching data",error);
        };
    );
}
useEffect(() => {fetchdata();}, []);

return(
    <div>
        <h1>API</h1>
        <p></p>
    </div>
)