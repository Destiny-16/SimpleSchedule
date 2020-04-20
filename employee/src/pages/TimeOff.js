import React, { useEffect } from 'react';
import Axios from 'axios'

export default () => {

    return <>
       <body>
        <form method="POST" action="cp.php"> 
        <h1>Time Off Request Form</h1>
            <div style={{backgroundColor: "lightblue"}}>
            <p>Name: </p>
                <input
                    type="text" name="name"
                />

            <br></br>
            <br></br>

            <p>Employee ID: </p>
                <input
                        type="text" name="id"
                />   

            <br></br>
            <br></br>

            <p>Leave Date: </p>
                <input
                        type="text" name="leaveDate"
                />  

            <br></br>
            <br></br>

            <p>Return Date: </p>
                <input
                        type="text" name="returnDate"
                />               
            </div>

            <br></br>

            <input type="submit" value="Submit" href="cp.php"></input>
        </form>
    </body>
    </>
}
