import React, {Component} from 'react';

class FormValidation extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            description: '',
            skill: '',
        }
    }

    onChangeHandler= (event)=>{
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({[inputName]: inputValue})

        //Form validation
        var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        var textRegex = /^([a-zA-Z ]){2,30}$/;
        var phoneRegex = /^([0-9\(\)\/\+ \-]*)$/;

        if (inputName === 'name'){
            if (inputValue === null){
                this.setState({name: 'Name required'})
            }else if (!textRegex.test(inputValue)){
                this.setState({name: 'Name is invalid'})
            }
        }else if (inputName === 'email'){
            if (inputValue === null){
                this.setState({email: 'Email required'})
            }else if (!emailRegex.test(inputValue)){
                this.setState({email: 'Email is invalid'})
            }
        }else if (inputName === 'phone'){
            if (inputValue === null){
                this.setState({phone: 'Phone number required'})
            }else if (!phoneRegex.test(inputValue)){
                this.setState({phone: 'Phone number is invalid'})
            }
        }else if (inputName === 'password'){
            if (inputValue === null){
                this.setState({password: 'Password required'})
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>Name: {this.state.name}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Phone: {this.state.phone}</p>
                    <p>Phone: {this.state.password}</p>
                    <p>Description: {this.state.description}</p>
                    <p>Skill: {this.state.skill}</p>
                </div>
                <form>
                    <input onChange={this.onChangeHandler} type="text" name="name" placeholder="Name"/> <br/>
                    <input onChange={this.onChangeHandler} type="email" name="email" placeholder="Email"/> <br/>
                    <input onChange={this.onChangeHandler} type="text" name="phone" placeholder="Phone"/> <br/>
                    <input onChange={this.onChangeHandler} type="password" name="password" placeholder="Password"/> <br/> <br/>
                    <textarea onChange={this.onChangeHandler} name="description" placeholder="Your description"  cols="21" rows="4"/><br/>
                    <select onChange={this.onChangeHandler} name="skill">
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>PHP</option>
                        <option>Javascript</option>
                        <option>Laravel</option>
                    </select> <br/>
                    <input type="submit" name="submit" value="Save"/> <br/>
                </form>
            </div>
        );
    }
}

export default FormValidation;