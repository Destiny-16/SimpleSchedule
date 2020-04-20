import React, { useEffect } from 'react';
import Axios from 'axios'
class TimeOff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        id:null,
        leaveDate: null,
        returnDate:null};
  }

   saveData(event){
    event.preventDefault();   
    console.log(event.target);
  }
 

  render() {
    return (
        <body>
        <form method="POST" onSubmit={this.saveData}> 
        <h1>Time Off Request Form</h1>
            <div style={{backgroundColor: "lightblue"}}>
            <p>Name: </p>
                <input
                    type="text" value={this.state.name}/>

            <br></br>
            <br></br>

            <p>Employee ID: </p>
                <input
                        type="text" value={this.state.id}
                />   

            <br></br>
            <br></br>

            <p>Leave Date: </p>
                <input
                        type="text" value={this.state.leaveDate}
                />  

            <br></br>
            <br></br>

            <p>Return Date: </p>
                <input
                        type="text" value={this.state.returnDate}
                />               
            </div>

            <br></br>

            <input type="submit" value="Submit"></input>
        </form>
    </body>
    );
  }
}
export default TimeOff;