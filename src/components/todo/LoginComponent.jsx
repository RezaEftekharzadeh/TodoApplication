import React ,{Component} from 'react'

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }

        // this.handleUsernameChange= this.handleUsernameChange.bind(this);
        // this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);

    //     this.setState(
    //         {
    //             username: event.target.value
    //         }
    //     )
    // }

    handlePasswordChange(event){
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    render(){
        return(
            <div>

                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password"  onChange={this.handleChange} />
                <button>Loging</button>

            </div>
            
        )
    }
}
export default LoginComponent;