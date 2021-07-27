import React ,{Component} from 'react'

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }

        this.handleUsernameChange= this.handleUsernameChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event){
        console.log(event.target.value);

        this.setState(
            {
                username: event.target.value
            }
        )
    }

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

                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                Password: <input type="password" name="password"  onChange={this.handlePasswordChange} />
                <button>Loging</button>

            </div>
            
        )
    }
}
export default LoginComponent;