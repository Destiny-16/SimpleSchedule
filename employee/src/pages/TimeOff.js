import React, { useEffect } from 'react';
import Axios from 'axios'
class TimeOff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        employeeid:'',
        leaveDate: '',
        returnDate:''
    };

    this.handleSaveData = this.handleSaveData.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmployeeId = this.handleEmployeeId.bind(this);
    this.handleLeaveDate = this.handleLeaveDate.bind(this);
    this.handleReturnDate = this.handleReturnDate.bind(this);


  }
  
  handleName(event){
    this.setState({name: event.target.value});
  }

  handleEmployeeId(event){
    this.setState({employeeid: event.target.value});
  }

  handleLeaveDate(event){
    this.setState({leaveDate: event.target.value});
  }
  handleReturnDate(event){
    this.setState({returnDate: event.target.value});
  }

   handleSaveData(event){
    event.preventDefault(); 
    
    alert(this.state.name + ' ' + this.state.employeeid +  ' ' +  this.state.leaveDate + ' ' + this.state.returnDate);
    
  }
 

  render() {
    return (
        <div>
        <form method="POST" onSubmit={this.handleSaveData}> 
        <h1>Time Off Request Form</h1>
            <div style={{backgroundColor: "lightblue"}}>
            <p>Name: </p>
                <input
                    type="text" value={this.state.name} onChange={this.handleName} />

            <br></br>
            <br></br>

            <p>Employee ID: </p>
                <input
                        type="text" value={this.state.employeeid} onChange={this.handleEmployeeId}
                />   

            <br></br>
            <br></br>

            <p>Leave Date: </p>
                <input
                        type="text" value={this.state.leaveDate} onChange={this.handleLeaveDate}
                />  

            <br></br>
            <br></br>

            <p>Return Date: </p>
                <input
                        type="text" value={this.state.returnDate} onChange={this.handleReturnDate}
                />               
            </div>

            <br></br>

            <input type="submit" value="Submit"></input>
        </form>
    </div>
    );
  }
}
export default TimeOff;