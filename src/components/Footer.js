import React from "react"; 

function Footer(){
    const date = new Date(); 
    const currTime = date.getFullYear(); 

    return(<div>
        <footer>
            Copyright © {currTime}
        </footer>
    </div>); 
}

export default Footer; 