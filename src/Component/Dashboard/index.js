import React,{Component} from 'react';
import  './Dashboard.css'
class Dashboard extends Component{
    constructor(props){
        super(props)
        
    }
    handleClick =(event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    
    render(){
        const detail = this.props.data.map((element, index) => {
            return <tr key = {index} style={{margin: '10px'}}>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element. name}</td>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element.position}</td>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element.contactNumber}</td>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element.emailId}</td>
                   <td>	
                       <button className={"btn btn-primary"} onClick = {(e) => this.props.handelShow(element)}>View</button>&nbsp;
                        <button className={"btn btn-danger"} onClick = {(e) => this.props.handleDelete(index)}>Delete</button>
                    </td>
                </tr>
        })
        
            
        return(
            <div>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact Number</th> 
                        <th>EmailId</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                       {detail}
                    </tbody>
                   
                </table>
                <center><button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add contact</button></center>
   
           </div>
        );
        
    }
}

export default Dashboard;