import React,{Component} from 'react';
import Dashboard from './../../Component/Dashboard';
import EmployeeDetail from './../../Component/EmployeeDetail';
import AddEmployee from '../../Component/AddEmployee';
import axios from 'axios'
class EmployeeList extends Component{
    constructor(props   ){
        super(props);
        this.state = {
            data :[{
                name:"Archana Jain",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com",

            },
            {
                name:"Aayushi Jain",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com",

            },
            {
                name:"Akanksha Jain",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com",

            },
            {
                name:"Arpita Jain",
                position:"Designer",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com",

            },
            {
                name:"Abhisshek Jain",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"abhisshek @gmail.com",

            },
            {
                name:"Monika ",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"Mmnika@gmail.com",

            },
            {
                name:"Archana ",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com",

            },
            {
                name:"Kratika",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"Kratika@gmail.com",

            },
            {
                name:"Abhi",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"Abhi@gmail.com",

            },
        ],
            loading:true,
            persons:[],
            temp:'',
            
            name:"",
            Position:"",
            contactNumber:"",
            emailId:"",
            status:false,
            back:false,
            show:true,
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false,
            search:''
        }
    }
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/user')
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }
    handleDelete = (index) => {
        let employeeList = [...this.state.data];
        employeeList.splice(index, 1);
        this.setState({ data: employeeList });
    }
    handleShow(element){
        
        console.log("this.state.persons")
        this.setState({
            showDetails:true,
            data:element,
            showList:false
        })
    }
    handleBack = () => {
        console.log("bk")
        this.setState({
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false
        })
    }
    handleAdd = () => {
        this.setState({
          addContactForm: true,
          showDetails:false,
          showList:false
        });
    }
    handleChange = (e) => {
        console.log('e.target.value');
        console.log(e.target.value);
        console.log('e.target.value');
        this.setState({
             [e.target.name]: e.target.value,
        });
    }
    handleSearch = (event) => {
        this.setState({search:event.target.value})
        var updatedList = [...this.state.persons.title]
        console.log(updatedList)
        updatedList = updatedList.filter(function(item){
            return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    }
    
    handelSubmit = (e) => {
        e.preventDefault();
        const {name, Position,contactNumber,emailId } = this.state
        console.log(name);
        let newList = [...this.state.data];
        newList.push({
            name, Position,contactNumber,emailId
        });
        this.setState({ 
            data: newList, 
            addContactForm: false, 
            showList:true,
            name: '', 
            Position:"",
            contactNumber:"",
            emailId,
        });
    }
    render(){
        console.log(this.state.persons)
        return(
            <div>
                <h2 className="text-center">Employee Information</h2>
                <input t
                    type="text"
                    placeholder="Search" 
                    name="search" 
                    className="form-control" 
                    style={{width: '250px', marginBottom: '20px'}} 
                    aria-describedby="search"
                    value={this.state.search} 
                    onChange={this.handleSearch} 
                />
                    {
                    this.state.showList ? 
                        <Dashboard 
                            data={this.state.data} 
                            handelShow={this.handleShow.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                            persons={this.state.persons}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail 
                            data={this.state.data} 
                            handleBack={this.handleBack}
                        />
                    : ''
                }
                {
                    this.state.addContactForm ? 
                        <AddEmployee 
                            handleChange = {this.handleChange}
                            handelSubmit = {this.handelSubmit}
                        />
                    : ''
                }
            </div>
        )
    }
}

export default EmployeeList;