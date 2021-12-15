import React, {Component} from 'react';

class RegistrationForm extends Component {

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

export default RegistrationForm;