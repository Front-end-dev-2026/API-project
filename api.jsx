import React, { useEffect } from "react";

function API() {
    const fetchdata = async () => (
        try {
            const response - await fetch("");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log("Error fetching data",error);
        };
    );
}
useEffect(() => {fetchdata();}, []);